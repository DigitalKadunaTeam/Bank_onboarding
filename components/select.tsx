import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  label?: string;
  className?: string;
  setState: (value: string) => void;
}
export default function Select({
  label,
  setState,
  children,
  className,
}: Props) {
  return (
    <div className={`input__container ${className ? className : ""}`}>
      {label && <div className="label__text">{label}</div>}
      <section>
        <select onChange={(e) => setState(e.target.value)}>{children}</select>
      </section>
    </div>
  );
}

interface LabelProps {
  children?: ReactNode;
  value: string;
  label: string;
}

export function SelectOption({ value, label }: LabelProps) {
  return <option value={value}>{label}</option>;
}
