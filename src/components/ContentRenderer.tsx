import type { ContentBlock } from "@/data/ventures";

export default function ContentRenderer({
  blocks,
  layout = "default",
}: {
  blocks: ContentBlock[];
  layout?: "default" | "sidebar";
}) {
  const isSidebar = layout === "sidebar";

  return (
    <div className="text-slate-700 dark:text-slate-300 transition-colors duration-300">
      {blocks.map((block, i) => {
        const isFirstBlock = i === 0;

        switch (block.type) {
          case "heading":
            return (
              <h3
                key={i}
                className={`${
                  isSidebar
                    ? "mt-16 mb-6 text-2xl font-bold tracking-tight sm:text-3xl"
                    : "mt-12 mb-4 text-2xl font-bold tracking-tight"
                } text-slate-900 dark:text-white transition-colors duration-300`}
              >
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p
                key={i}
                className={`mb-6 leading-relaxed ${
                  isFirstBlock && isSidebar
                    ? "text-xl sm:text-2xl sm:leading-relaxed font-medium text-slate-900 dark:text-white"
                    : "text-lg"
                } transition-colors duration-300`}
              >
                {block.text}
              </p>
            );

          case "list":
            if (isSidebar) {
              return (
                <div key={i} className="my-10 grid gap-4 sm:grid-cols-2">
                  {block.items.map((item, j) => {
                    const [title, desc] = item.split(/\s+—\s+(.*)/);
                    return (
                      <div
                        key={j}
                        className="flex flex-col rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-colors duration-300"
                      >
                        <span className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                          0{j + 1}
                        </span>
                        {desc ? (
                          <>
                            <h4 className="mb-2 text-base font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                              {title}
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 transition-colors duration-300">
                              {desc}
                            </p>
                          </>
                        ) : (
                          <p className="text-sm font-medium text-slate-900 dark:text-white transition-colors duration-300">
                            {item}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            }

            return (
              <ul key={i} className="mb-6 list-disc space-y-3 pl-6 text-lg leading-relaxed">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );

          case "link":
            return (
              <div key={i} className="mb-3 flex items-start gap-2">
                <span className="mt-1 text-slate-400 dark:text-slate-500" aria-hidden>
                  ↗
                </span>
                <a
                  href={block.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 dark:text-white underline decoration-slate-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-slate-900 dark:hover:decoration-white transition-colors duration-300"
                >
                  {block.text}
                </a>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}