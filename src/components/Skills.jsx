import { skillGroups } from "@/data/skills";
import Section from "./Section";
import Tag from "./Tag";
import { GroupIcon } from "./Icons";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="Skills & tech stack" intro="The tools I reach for, grouped by where they sit in the stack.">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <article key={g.title} className="rounded-xl border border-line bg-surface p-6">
            <h3 className="flex items-center gap-3 text-lg font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                <GroupIcon name={g.icon} />
              </span>
              {g.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.skills.map((s) => <Tag key={s}>{s}</Tag>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
