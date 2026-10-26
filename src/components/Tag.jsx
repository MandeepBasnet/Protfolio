export default function Tag({ children }) {
  return (
    <li className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink/85">
      {children}
    </li>
  );
}
