import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { ArrowIcon } from "./Icons";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" eyebrow="projects" title="Featured projects" intro="Production and client work from iTsoch, plus a few academic builds — most of it live.">
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p) => <ProjectCard key={p.title} project={p} large />)}
      </div>

      <h3 className="mt-16 font-mono text-sm text-muted">More on GitHub</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {more.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>

      <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-accent hover:underline">
        See all repositories <ArrowIcon width={18} height={18} />
      </a>
    </Section>
  );
}
