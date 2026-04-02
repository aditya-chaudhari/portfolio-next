import type { ReactNode } from "react";
import { skillsLearning, skillsLinkedInTop, skillsTechnical } from "@/lib/site-content";

/** Mirrors ordering in `skillsTechnical` so slices stay aligned. */
const languages = skillsTechnical.slice(0, 6);
const frameworks = skillsTechnical.slice(6, 14);
const dataStores = skillsTechnical.slice(14, 19);
const cloudInfra = skillsTechnical.slice(19, 28);
const observability = skillsTechnical.slice(28);

function SkillChip({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-surface-container-highest px-3 py-1 text-xs font-medium tracking-tight text-on-surface-variant transition-colors hover:bg-secondary-container hover:text-on-secondary-container">
      {label}
    </span>
  );
}

function BentoPanel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col bg-surface-container p-6 transition-colors hover:bg-surface-container-high md:p-8 ${className}`}
    >
      <h3 className="font-headline text-lg font-bold text-on-surface md:text-xl">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-surface-container-low px-4 pb-14 pt-20 sm:px-8 md:px-12 md:pb-16 lg:pb-16 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-on-surface sm:text-4xl md:text-5xl">
            Technical core
          </h2>
          <span className="hidden font-body text-xs font-bold uppercase tracking-[0.2em] text-outline md:block">
            01 / Skills
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[auto_auto]">
          <div className="flex flex-col justify-between gap-6 bg-surface-container p-6 transition-colors hover:bg-surface-container-high md:col-span-8 md:row-span-2 md:p-8">
            <div>
              <h3 className="font-headline text-xl font-bold text-on-surface md:text-2xl">
                Agentic AI, evals &amp; platform engineering
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                promptfoo evals for LLM orchestrators and workflows; MCP/Python and Spring Boot agents in
                production. Same stack: Kubernetes, AWS, and shared libraries across hosting brands —
                migrations, cost, and delivery at scale.
              </p>
            </div>
            <div>
              <p className="mb-3 font-body text-xs font-bold uppercase tracking-widest text-secondary">
                LinkedIn top skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skillsLinkedInTop.map((skill) => (
                  <SkillChip key={skill} label={skill} />
                ))}
              </div>
            </div>
          </div>

          <BentoPanel title="Languages" className="md:col-span-4">
            {languages.map((s) => (
              <SkillChip key={s} label={s} />
            ))}
          </BentoPanel>

          <BentoPanel title="Frameworks &amp; runtimes" className="md:col-span-4">
            {frameworks.map((s) => (
              <SkillChip key={s} label={s} />
            ))}
          </BentoPanel>

          <BentoPanel title="Data &amp; persistence" className="md:col-span-6">
            {dataStores.map((s) => (
              <SkillChip key={s} label={s} />
            ))}
          </BentoPanel>

          <BentoPanel title="Cloud, containers &amp; delivery" className="md:col-span-6">
            {cloudInfra.map((s) => (
              <SkillChip key={s} label={s} />
            ))}
          </BentoPanel>

          <BentoPanel title="Observability &amp; quality" className="md:col-span-7">
            {observability.map((s) => (
              <SkillChip key={s} label={s} />
            ))}
          </BentoPanel>

          <div className="flex flex-col justify-center bg-surface-container p-6 transition-colors hover:bg-surface-container-high md:col-span-5 md:p-8">
            <h3 className="font-headline text-lg font-bold text-on-surface md:text-xl">
              Active learning
            </h3>
            <p className="mt-3 font-body text-sm text-on-surface-variant">
              Focus areas on GitHub and side work:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skillsLearning.map((s) => (
                <SkillChip key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
