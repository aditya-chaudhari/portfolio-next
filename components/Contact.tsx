import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { contact, urls } from "@/lib/site-content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface px-4 py-20 sm:px-8 md:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/10 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Contact
        </p>
        <h2 className="mt-3 font-headline text-4xl font-bold leading-none tracking-tighter text-on-surface sm:text-5xl lg:text-6xl">
          <span className="hero-gradient-text">Let&apos;s connect.</span>
        </h2>
        <p className="mt-6 font-body text-base leading-relaxed text-on-surface-variant sm:text-lg">
          Best for technical discussions, collaboration, or questions about platform work. Prefer email;
          LinkedIn and GitHub are linked below.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <a
            href={urls.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl bg-surface-container p-4 transition-all hover:bg-surface-container-high"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant transition-colors group-hover:text-primary">
              <FaGithub className="text-xl" aria-hidden />
            </div>
            <div className="min-w-0 flex-1 text-left">
              <div className="font-body text-xs font-medium uppercase tracking-widest text-on-surface-variant">
                Source
              </div>
              <div className="font-headline text-lg font-semibold text-on-surface">GitHub</div>
            </div>
            <FaArrowRight
              className="shrink-0 text-on-surface-variant opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </a>

          <a
            href={urls.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl bg-surface-container p-4 transition-all hover:bg-surface-container-high"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant transition-colors group-hover:text-secondary">
              <FaLinkedin className="text-xl" aria-hidden />
            </div>
            <div className="min-w-0 flex-1 text-left">
              <div className="font-body text-xs font-medium uppercase tracking-widest text-on-surface-variant">
                Network
              </div>
              <div className="font-headline text-lg font-semibold text-on-surface">LinkedIn</div>
            </div>
            <FaArrowRight
              className="shrink-0 text-on-surface-variant opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </a>

          <a
            href={`mailto:${contact.primaryEmail}`}
            className="group flex items-center gap-4 rounded-xl bg-surface-container p-4 transition-all hover:bg-surface-container-high"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant transition-colors group-hover:text-primary">
              <FaEnvelope className="text-xl" aria-hidden />
            </div>
            <div className="min-w-0 flex-1 text-left">
              <div className="font-body text-xs font-medium uppercase tracking-widest text-on-surface-variant">
                Email
              </div>
              <div className="font-headline text-lg font-semibold text-on-surface break-all">
                {contact.primaryEmail}
              </div>
            </div>
            <FaArrowRight
              className="shrink-0 text-on-surface-variant opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </a>

          <a
            href={urls.leetCode}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl bg-surface-container p-4 transition-all hover:bg-surface-container-high"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-on-surface-variant transition-colors group-hover:text-secondary">
              <SiLeetcode className="text-xl" aria-hidden />
            </div>
            <div className="min-w-0 flex-1 text-left">
              <div className="font-body text-xs font-medium uppercase tracking-widest text-on-surface-variant">
                Practice
              </div>
              <div className="font-headline text-lg font-semibold text-on-surface">LeetCode</div>
            </div>
            <FaArrowRight
              className="shrink-0 text-on-surface-variant opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
