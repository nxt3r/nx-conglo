"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // In the future, you will replace this with your actual API call to Beehiiv/ConvertKit.
    // For now, we just simulate a successful submission.
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              The Conglo Dispatch.
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Occasional essays on software, solo-founding, and the systems behind our ventures. No spam, just signal.
            </p>
            <p>(Currently Newsletter is Offline)</p>
          </div>

          {/* Form */}
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {status === "idle" ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="flex-1 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-slate-900 dark:focus:border-white focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200"
                  >
                    Subscribe
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-4 dark:border-emerald-900/50 dark:bg-emerald-900/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                    You&apos;re on the list. Watch your inbox.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}