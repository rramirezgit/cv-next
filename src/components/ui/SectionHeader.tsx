interface SectionHeaderProps {
  label: string;
  title: string;
  id?: string;
  className?: string;
}

export function SectionHeader({ label, title, id, className = "" }: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`} id={id}>
      <span className="section-label" aria-hidden="true">
        {label}
      </span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
