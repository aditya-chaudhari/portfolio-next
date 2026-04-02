import { education, honorsAwards } from "@/lib/site-content";

export default function HonorsEducation() {
  return (
    <section
      id="credentials"
      className="bg-surface px-4 pb-20 pt-14 sm:px-8 md:px-12 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Recognition &amp; study
        </p>
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-on-surface sm:text-4xl">
          Honors &amp; education
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-6 font-body text-xs font-bold uppercase tracking-[0.15em] text-on-surface-variant">
              Honors &amp; awards
            </h3>
            <ul className="space-y-3">
              {honorsAwards.map((h) => (
                <li
                  key={h}
                  className="rounded-lg bg-surface-container px-4 py-3 font-body text-sm leading-relaxed text-on-surface md:text-base"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-body text-xs font-bold uppercase tracking-[0.15em] text-on-surface-variant">
              Education
            </h3>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.school} className="rounded-lg bg-surface-container p-5">
                  <p className="font-headline text-base font-semibold text-on-surface">{e.school}</p>
                  <p className="mt-2 font-body text-sm text-on-surface-variant">{e.detail}</p>
                  <p className="mt-1 font-body text-xs text-on-surface-variant/80">{e.location}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
