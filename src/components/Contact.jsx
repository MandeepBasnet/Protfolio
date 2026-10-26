import { profile } from "@/data/profile";
import Section from "./Section";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="Let's build something.">
      <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
        <div className="space-y-6 text-muted">
          <p className="text-lg">
            Hiring for a remote full-stack or frontend role, or need a web app built? I&apos;d love to hear from you.
          </p>
          <p>
            Email me directly at{" "}
            <a href={`mailto:${profile.email}`} className="text-accent hover:underline">{profile.email}</a>{" "}
            or use the form.
          </p>
          <p className="font-mono text-sm">Based in {profile.location}</p>
          <SocialLinks />
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
