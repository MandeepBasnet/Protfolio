"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none aria-[invalid=true]:border-red-400";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    // No backend required: hand the message to the visitor's mail client, prefilled.
    const subject = values.subject.trim() || `Portfolio enquiry from ${values.name}`;
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      {props.as === "textarea" ? (
        <textarea id={name} name={name} rows={5} value={values[name]} onChange={update} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} className={inputClass} placeholder={props.placeholder} />
      ) : (
        <input id={name} name={name} type={props.type || "text"} autoComplete={props.autoComplete} value={values[name]} onChange={update} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} className={inputClass} placeholder={props.placeholder} />
      )}
      {errors[name] && <p id={`${name}-error`} className="mt-1.5 text-sm text-red-400">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-xl border border-line bg-surface p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Name", { autoComplete: "name", placeholder: "Your name" })}
        {field("email", "Email", { type: "email", autoComplete: "email", placeholder: "you@company.com" })}
      </div>
      {field("subject", "Subject (optional)", { placeholder: "Internship, project, collaboration…" })}
      {field("message", "Message", { as: "textarea", placeholder: "Tell me a bit about what you have in mind." })}

      <button type="submit" className="w-full rounded-lg bg-accent px-5 py-3 font-medium text-bg transition hover:bg-accent/90 sm:w-auto">
        Send message
      </button>
      <p role="status" className="text-sm text-muted">
        {sent && "Your email app should have opened with the message ready to send."}
      </p>
    </form>
  );
}
