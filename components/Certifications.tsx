import { certifications } from "@/lib/site-content";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-surface px-4 py-20 sm:px-8 md:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Credentials
        </p>
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-on-surface sm:text-4xl">
          Certifications
        </h2>
        <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
          Professional learning from LinkedIn and course platforms.
        </p>
        <ul className="mx-auto mt-12 max-w-3xl space-y-4">
          {certifications.map((c) => (
            <li
              key={c}
              className="rounded-xl bg-surface-container px-5 py-4 font-body text-sm leading-relaxed text-on-surface md:text-base"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
