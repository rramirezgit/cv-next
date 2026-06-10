interface SkillBarProps {
  name: string;
}

export function SkillBar({ name }: SkillBarProps) {
  return (
    <div className="skill-item">
      <span className="skill-chip">{name}</span>
    </div>
  );
}
