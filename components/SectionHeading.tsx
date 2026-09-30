type Props = { eyebrow: string; title: string; description?: string; align?: "left" | "center"; dark?: boolean };
export default function SectionHeading({ eyebrow, title, description, align = "left", dark = false }: Props) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <p className={`text-xs font-extrabold uppercase tracking-[.2em] ${dark ? "text-blue-300" : "text-muc-blue"}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-[clamp(34px,4vw,52px)] font-extrabold leading-[1.05] tracking-tight ${dark ? "text-white" : "text-muc-navy"}`}>{title}</h2>
      {description && <p className={`mt-5 text-base leading-7 ${dark ? "text-slate-300" : "text-muc-muted"}`}>{description}</p>}
    </div>
  );
}
