"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  canonicalResumePath,
  contact,
  hero,
  profile,
  urls,
} from "@/lib/site-content";

function splitHeadline() {
  const parts = profile.headline.split(" — ");
  return {
    roleLine: parts[0]?.trim() ?? profile.headline,
    accentLine: parts[1]?.trim() ?? profile.subheadline,
  };
}

export default function Hero() {
  const { roleLine, accentLine } = splitHeadline();

  return (
    <section className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden px-4 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="stitch-blur-primary absolute -left-24 -top-24 h-[min(600px,80vw)] w-[min(600px,80vw)]" />
        <div className="stitch-blur-secondary absolute -right-24 top-1/2 h-[min(400px,70vw)] w-[min(400px,70vw)] -translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          className="mb-6 flex flex-wrap items-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="stitch-label max-w-[min(100%,28rem)] text-[0.65rem] sm:text-xs">
            {roleLine}
          </span>
          <div className="hidden h-px w-10 bg-outline-variant/30 sm:block md:w-12" />
          <span className="font-body text-[0.65rem] font-bold uppercase tracking-[0.1em] text-on-surface-variant sm:text-xs">
            {profile.locationProfile}
          </span>
        </motion.div>

        <motion.h1
          className="font-headline text-4xl font-extrabold leading-[1.1] tracking-tighter text-on-surface sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="mt-3 max-w-3xl font-headline text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="hero-gradient-text">{accentLine}</span>
        </motion.p>

        <motion.p
          className="mt-4 max-w-2xl font-body text-sm font-medium leading-relaxed text-on-surface-variant sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {profile.subheadline}
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-on-surface-variant md:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {hero.impactLead}
        </motion.p>

        <motion.div
          className="mt-6 grid max-w-xl grid-cols-2 gap-4 sm:max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <div className="rounded-lg bg-surface-container p-4 pl-4 border-l-[3px] border-primary">
            <div className="font-headline text-2xl font-bold text-on-surface md:text-3xl">
              10K+
            </div>
            <div className="mt-1 font-body text-xs font-medium uppercase tracking-widest text-on-surface-variant">
              Concurrent SSE
            </div>
          </div>
          <div className="rounded-lg bg-surface-container p-4 pl-4 border-l-[3px] border-secondary">
            <div className="font-headline text-2xl font-bold text-on-surface md:text-3xl">
              ~5 min
            </div>
            <div className="mt-1 font-body text-xs font-medium uppercase tracking-widest text-on-surface-variant">
              Deploys post-K8s
            </div>
          </div>
        </motion.div>

        <motion.p
          className="mt-6 max-w-2xl font-body text-xs leading-relaxed text-on-surface-variant sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {hero.brands}
        </motion.p>
        <motion.p
          className="mt-2 max-w-2xl font-body text-xs leading-relaxed text-on-surface-variant sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.32, duration: 0.5 }}
        >
          {hero.learning}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-primary-container px-6 py-3.5 font-headline text-sm font-bold text-on-primary-container transition-all hover:pr-8 md:px-8 md:py-4 md:text-base"
          >
            View projects
            <span
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
            <span className="absolute left-0 top-0 h-px w-full bg-white/20" />
          </a>
          <a
            href="#skills"
            className="rounded-lg border border-outline-variant/20 px-6 py-3.5 font-headline text-sm font-bold text-secondary transition-colors hover:bg-secondary-container/10 md:px-8 md:py-4 md:text-base"
          >
            Technical core
          </a>
          <a
            href={canonicalResumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-2 py-3.5 font-headline text-sm font-bold text-on-surface-variant underline decoration-outline-variant/40 underline-offset-4 transition-colors hover:text-primary md:py-4 md:text-base"
          >
            Resume (PDF)
          </a>
        </motion.div>

        <motion.div
          className="mt-8 flex gap-5 text-2xl text-on-surface-variant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42, duration: 0.5 }}
        >
          <a
            href={urls.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <FaLinkedin />
          </a>
          <a
            href={urls.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-primary"
          >
            <FaGithub />
          </a>
          <a
            href={`mailto:${contact.primaryEmail}`}
            aria-label="Email"
            className="transition-colors hover:text-secondary"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.div
          className="mt-12 text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          aria-hidden
        >
          <span className="inline-block animate-bounce text-xl">↓</span>
        </motion.div>
      </div>
    </section>
  );
}
