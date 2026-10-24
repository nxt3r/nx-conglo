"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BentoGrid() {
  const [time, setTime] = useState<string>("");
  const [latestCommit, setLatestCommit] = useState<string>("Syncing activity...");

  // Live Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Fetch Latest GitHub Activity
  useEffect(() => {
    async function fetchGitHub() {
      try {
        const res = await fetch("https://api.github.com/users/nxt3r/events/public");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        
        if (data && data.length > 0) {
          const latest = data.find((e: any) => e.type === "PushEvent" || e.type === "CreateEvent");
          
          if (latest) {
            if (latest.type === "PushEvent") {
              const repo = latest.repo.name.split("/")[1];
              const commits = latest.payload.commits?.length || 1;
              setLatestCommit(`Pushed ${commits} commit${commits > 1 ? 's' : ''} to ${repo}`);
            } else if (latest.type === "CreateEvent") {
              const repo = latest.repo.name.split("/")[1];
              setLatestCommit(`Created repository ${repo}`);
            }
          } else {
            setLatestCommit("Active on open source.");
          }
        } else {
          setLatestCommit("No recent public activity.");
        }
      } catch (err) {
        setLatestCommit("Building in stealth mode.");
      }
    }
    fetchGitHub();
  }, []);

  const cardHover = "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 dark:hover:border-zinc-700";

  return (
    <section className="mx-auto max-w-6xl px-6 pt-48 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Card 1: GitHub Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`md:col-span-2 flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-zinc-800 bg-gradient-to-br from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-950 p-8 shadow-sm ${cardHover}`}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-widest text-slate-400 dark:text-zinc-500 uppercase">
                Latest Open Source
              </span>
            </div>
            <a 
              href="https://github.com/nxt3r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              @nxt3r
            </a>
          </div>
          
          <div>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white leading-snug">
              {latestCommit}
            </p>
          </div>
        </motion.div>

        {/* Card 2: Live Clock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-zinc-800 bg-gradient-to-br from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-950 p-8 shadow-sm ${cardHover}`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold tracking-widest text-slate-400 dark:text-zinc-500 uppercase">
              Local Time
            </span>
            <div className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 dark:text-white font-mono">
              {time}
            </div>
            <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
              Nx Conglo HQ
            </p>
          </div>
        </motion.div>

        {/* Card 3: Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`md:col-span-3 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm ${cardHover}`}
        >
          <div>
            <h3 className="text-xs font-bold tracking-widest text-slate-400 dark:text-zinc-500 uppercase mb-2">
              Current Focus
            </h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              Scaling the portfolio.
            </p>
          </div>
          
          <div className="mt-6 sm:mt-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-zinc-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Building in public
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}