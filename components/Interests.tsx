const interests = [
  {
    name: "Agentic AI",
    description:
      "Orchestration and workflow design for LLM agents — promptfoo eval harnesses, multi-step flows, tool routing, and MCP-style hooks on real backends.",
    icon: "🤖",
  },
  {
    name: "Quantum Computing",
    description:
      "Exploring how quantum algorithms can revolutionize data processing and encryption.",
    icon: "⚛️",
  },
  {
    name: "Neurology & neuroscience",
    description:
      "Brain and nervous system — aligned with topics I like discussing alongside AI and behavior.",
    icon: "🧠",
  },
  {
    name: "Space Exploration",
    description:
      "Following the latest advancements in space technology and imagining the future of human life beyond Earth.",
    icon: "🪐",
  },
  {
    name: "Psychology",
    description:
      "Studying human behavior and cognitive processes, with a focus on AI’s role in decision-making.",
    icon: "📘",
  },
] as const;

export default function Interests() {
  return (
    <section
      id="interests"
      className="bg-surface-container-low px-4 py-20 sm:px-8 md:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Beyond the keyboard
        </p>
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-on-surface sm:text-4xl">
          Interests &amp; passions
        </h2>
        <p className="mt-4 max-w-2xl font-body text-sm text-on-surface-variant md:text-base">
          Topics I follow and enjoy discussing outside of day-to-day delivery work.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {interests.map((item) => (
            <article
              key={item.name}
              className="rounded-xl bg-surface-container p-6 ring-1 ring-white/5 transition-colors hover:bg-surface-container-high md:p-8"
            >
              <h3 className="flex items-center gap-3 font-headline text-lg font-bold text-on-surface">
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                {item.name}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-on-surface-variant md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
