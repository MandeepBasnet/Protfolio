import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { profile } from "@/data/profile";

const photo = existsSync(path.join(process.cwd(), "public", profile.photo)) ? profile.photo : profile.avatar;
import SocialLinks from "./SocialLinks";
import { ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 md:grid-cols-[1fr_auto] md:pb-28 md:pt-40">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            Open to remote full-stack & frontend roles
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name}.
          </h1>
          <p className="mt-3 bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-2 font-mono text-sm text-muted">{profile.focus}</p>
          <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-bg transition hover:bg-accent/90">
              View projects <ArrowIcon width={18} height={18} />
            </a>
            <a href="#contact" className="rounded-lg border border-line px-5 py-3 font-medium transition hover:border-accent/60 hover:text-accent">
              Get in touch
            </a>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <div className="relative mx-auto hidden w-64 sm:block md:w-72">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/60 to-accent-2/60 opacity-60 blur" aria-hidden />
          <Image
            src={photo}
            alt={`Portrait of ${profile.name}`}
            width={460}
            height={460}
            priority
            className="relative rounded-2xl border border-line object-cover"
          />
        </div>
      </div>
    </section>
  );
}
