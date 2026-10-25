"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { ventures } from "@/data/ventures";
import { contactInfo } from "@/data/site";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <Command
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
              loop
            >
              <Command.Input
                placeholder="Search ventures, pages, or type 'contact'..."
                className="w-full border-b border-slate-100 bg-transparent px-4 py-4 text-slate-900 outline-none placeholder:text-slate-400"
              />
              
              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-slate-500">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Ventures" className="px-2 py-3 text-xs font-medium text-slate-500">
                  {ventures.map((venture) => (
                    <Command.Item
                      key={venture.id}
                      onSelect={() => runCommand(() => router.push(`/ventures/${venture.id}`))}
                      className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm text-slate-700 aria-selected:bg-slate-100 aria-selected:text-slate-900"
                    >
                      {venture.name}
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Pages" className="px-2 py-3 text-xs font-medium text-slate-500 border-t border-slate-100 mt-1">
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/#about"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm text-slate-700 aria-selected:bg-slate-100 aria-selected:text-slate-900"
                  >
                    About
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/blog"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm text-slate-700 aria-selected:bg-slate-100 aria-selected:text-slate-900"
                  >
                    Blog
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/careers"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm text-slate-700 dark:text-slate-300 aria-selected:bg-slate-100 dark:aria-selected:bg-zinc-800 aria-selected:text-slate-900 dark:aria-selected:text-white"
                  >
                    Careers
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/manifesto"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm text-slate-700 aria-selected:bg-slate-100 aria-selected:text-slate-900"
                  >
                    Manifesto
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/privacy"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm text-slate-700 aria-selected:bg-slate-100 aria-selected:text-slate-900"
                  >
                    Privacy Policy
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/terms"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm text-slate-700 aria-selected:bg-slate-100 aria-selected:text-slate-900"
                  >
                    Terms of Service
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Actions" className="px-2 py-3 text-xs font-medium text-slate-500 border-t border-slate-100 mt-1">
                  <Command.Item
                    onSelect={() => runCommand(() => window.location.href = `mailto:${contactInfo.email}`)}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm text-slate-700 aria-selected:bg-slate-100 aria-selected:text-slate-900"
                  >
                    Copy Contact Email
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}