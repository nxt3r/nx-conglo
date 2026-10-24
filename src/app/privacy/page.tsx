import { contactInfo } from "@/data/site";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors duration-300">Privacy Policy</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 transition-colors duration-300">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="space-y-8 text-gray-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">1. Information We Collect</h2>
            <p>Nx Conglo is a static informational website. We do not require you to create an account, and we do not intentionally collect personal information. If you contact us via email, we will receive your email address and any information you choose to include in your message.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">2. Usage Data & Analytics</h2>
            <p>We may use basic, privacy-friendly analytics to understand how visitors interact with the site (e.g., page views). This data is aggregated and does not personally identify you.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">3. Third-Party Links</h2>
            <p>Our website contains links to external websites and ventures (including GitHub and Instagram). We are not responsible for the privacy practices or content of these external sites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${contactInfo.email}`} className="text-slate-900 dark:text-white underline underline-offset-4 transition-colors duration-300">{contactInfo.email}</a>.</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
          <Link
            href="/"
            prefetch={false}
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            ← Back to Nx Conglo
          </Link>
        </div>
      </div>
    </div>
  );
}