import { openSourceProjects, workProjects, type WorkProject } from "@/lib/site-content";

function ProjectCard(props: WorkProject & { className?: string }) {
  const { title, desc, href, linkLabel, className = "" } = props;
  return (
    <article
      className={`flex h-full flex-col rounded-xl bg-surface-container p-6 ring-1 ring-white/5 transition-colors hover:bg-surface-container-high md:p-8 ${className}`}
    >
      <h3 className="font-headline text-lg font-bold text-on-surface md:text-xl">{title}</h3>
      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
        {desc}
      </p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit font-body text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-secondary"
        >
          {linkLabel ?? "View on GitHub"}
        </a>
      ) : null}
    </article>
  );
}

export default function Projects() {
  const featuredIdx = workProjects.findIndex((p) => p.featured);
  const fIdx = featuredIdx >= 0 ? featuredIdx : 0;
  const featured = workProjects[fIdx] ?? null;
  const restWork = workProjects.filter((_, i) => i !== fIdx);
  const [second, ...otherWork] = restWork;

  return (
    <section id="projects" className="bg-surface px-4 py-20 sm:px-8 md:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Selected work
        </p>
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-on-surface sm:text-4xl md:text-5xl">
          Platform &amp; product impact
        </h2>

        {featured ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            <div className="relative md:col-span-8">
              <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-primary/5 blur-3xl md:h-64 md:w-64" />
              <ProjectCard
                {...featured}
                className="relative min-h-[280px] justify-between md:min-h-[320px]"
              />
            </div>
            {second ? (
              <div className="md:col-span-4">
                <ProjectCard {...second} />
              </div>
            ) : null}
          </div>
        ) : null}

        {otherWork.length > 0 ? (
          <div
            className={`mt-6 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 ${featured ? "" : "mt-12"}`}
          >
            {otherWork.map((proj) => (
              <div key={proj.title} className="md:col-span-4">
                <ProjectCard {...proj} />
              </div>
            ))}
          </div>
        ) : null}

        <h3 className="mb-6 mt-16 font-headline text-xl font-bold text-on-surface md:mt-20 md:text-2xl">
          Open source &amp; demos
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {openSourceProjects.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
