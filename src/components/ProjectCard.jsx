import Image from "next/image";
import Tag from "./Tag";
import { ExternalIcon, GitHubIcon } from "./Icons";

export default function ProjectCard({ project, large = false }) {
  const { title, context, summary, tags, github, live, image } = project;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent/50">
      {image && (
        <a href={live} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden className="block border-b border-line bg-bg">
          <div className="flex gap-1.5 px-3 py-2" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </a>
      )}

      <div className={`flex flex-1 flex-col p-6 ${large ? "md:p-8" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <h3 className={`font-semibold transition-colors group-hover:text-accent ${large ? "text-xl" : "text-lg"}`}>{title}</h3>
          <div className="flex shrink-0 gap-1">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${title} source on GitHub`} className="rounded-md p-1.5 text-muted hover:text-ink">
                <GitHubIcon width={18} height={18} />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`${title} live site`} className="rounded-md p-1.5 text-muted hover:text-ink">
                <ExternalIcon width={18} height={18} />
              </a>
            )}
          </div>
        </div>
        {context && <p className="mt-1 font-mono text-xs text-accent-2">{context}</p>}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </ul>
      </div>
    </article>
  );
}
