import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center justify-center bg-surface px-6 text-center text-on-surface">
      <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
        Error 404
      </p>
      <h1 className="mt-3 font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-body text-on-surface-variant">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-lg bg-primary-container px-8 py-3 font-headline text-sm font-bold text-on-primary-container transition-all hover:brightness-110 active:scale-[0.98]"
      >
        Back to home
      </Link>
    </section>
  );
}
