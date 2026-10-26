import { milestones } from "@/data/milestones";
import Section from "./Section";

const kindStyles = {
  work: "text-accent-2 border-accent-2/40",
  education: "text-accent border-accent/40",
};

export default function Milestones() {
  return (
    <Section id="milestones" eyebrow="experience" title="Experience & education">
      <ol className="relative border-l border-line">
        {milestones.map((m) => (
          <li key={`${m.title}-${m.date}`} className="mb-12 ml-6 last:mb-0">
            <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" aria-hidden />
            <div className="flex flex-wrap items-center gap-3">
              <time className="font-mono text-sm text-muted">{m.date}</time>
              <span className={`rounded-full border px-2 py-0.5 font-mono text-xs capitalize ${kindStyles[m.kind]}`}>{m.kind}</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold">{m.title}</h3>
            <p className="text-sm text-muted">{m.org}</p>
            {m.points.length > 0 && (
              <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
                {m.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
