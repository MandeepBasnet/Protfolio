import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const items = [
  { label: "GitHub", href: profile.links.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-muted transition hover:border-accent/60 hover:text-accent"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
