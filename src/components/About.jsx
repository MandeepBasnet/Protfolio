import { profile } from "@/data/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="about" title="Frontend at heart, full-stack by choice.">
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I spent the last year and a half building production apps at <strong className="text-ink">iTsoch</strong> in Itahari,
            Nepal. Most of my time goes into the
            frontend — <strong className="text-ink">Next.js, React and TypeScript</strong> interfaces that are fast, responsive and
            accessible — but I like owning a feature all the way through, so I build the APIs, CMS and data layer behind it too.
          </p>
          <p>
            My biggest project so far is the <strong className="text-ink">Trackon GPS e-commerce platform</strong>: storefront,
            checkout with eSewa and cash-on-delivery, a headless Vendure + Appwrite backend, an admin dashboard, and Playwright and
            Vitest tests running in CI on every push.
          </p>
          <p>
            I&apos;ve also delivered client work for businesses in <strong className="text-ink">Nepal, Israel and Canada</strong> —
            a digital-signage app, a CMS-driven ramen shop site and a multi-store KPI platform — while completing a{" "}
            <strong className="text-ink">{profile.education.degree}</strong> at {profile.education.school} with{" "}
            {profile.education.partner}.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-4 self-start sm:grid-cols-3 md:grid-cols-1">
          {profile.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-line bg-surface p-5">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="mt-1 font-mono text-3xl font-semibold text-accent">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
