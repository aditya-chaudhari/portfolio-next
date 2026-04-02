"use client";

import { motion } from "framer-motion";
import { experienceTimeline } from "@/lib/site-content";

export default function CareerTimeline() {
  return (
    <section
      id="timeline"
      className="bg-surface-container-low px-4 py-20 sm:px-8 md:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Experience
        </p>
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-on-surface sm:text-4xl md:text-5xl">
          Career timeline
        </h2>

        <div className="relative mt-14 md:mt-16">
          <div
            className="absolute bottom-2 left-[0.4rem] top-2 w-px bg-outline-variant/15 md:left-[0.55rem]"
            aria-hidden
          />

          <ul className="relative space-y-10 md:space-y-12">
            {[...experienceTimeline].reverse().map((event, index) => {
              const meta = `${event.period} · ${event.location}`;
              return (
                <motion.li
                  key={event.period + event.title + event.company}
                  className="relative pl-10 md:pl-12"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <span
                    className="absolute left-0 top-2 flex h-3 w-3 shrink-0 rounded-full border-2 border-surface bg-secondary shadow-[0_0_0_4px_rgba(76,215,246,0.12)] md:top-2.5"
                    aria-hidden
                  />
                  <article className="rounded-xl bg-surface-container p-5 ring-1 ring-white/5 transition-colors hover:bg-surface-container-high md:p-6">
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-secondary">
                      {meta}
                    </p>
                    <h3 className="mt-2 font-headline text-lg font-bold text-on-surface md:text-xl">
                      {event.title}
                    </h3>
                    <p className="mt-1 font-body text-sm text-on-surface-variant">{event.company}</p>
                    {event.intern ? (
                      <p className="mt-2 inline-block rounded-full bg-surface-container-highest px-2 py-0.5 font-body text-[0.65rem] font-bold uppercase tracking-wide text-on-surface-variant">
                        Internship
                      </p>
                    ) : null}
                    <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                      {event.summary}
                    </p>
                  </article>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
