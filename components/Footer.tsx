import Image from "next/image";
import { profile } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-low py-8 text-center text-sm text-on-surface-variant">
      <p className="flex w-full flex-wrap items-center justify-center gap-x-1 gap-y-1">
        <span>Made with</span>
        <Image
          src="/milky-way.png"
          width={20}
          height={20}
          alt=""
          className="mx-0.5 opacity-90"
        />
        <span>by {profile.name}</span>
      </p>
    </footer>
  );
}
