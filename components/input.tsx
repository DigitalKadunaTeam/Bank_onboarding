import { HTMLInputTypeAttribute, ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  placeholder: string;
  label?: string;
  state: string;
  setState: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

export default function Input({
  label,
  state,
  setState,
  placeholder,
  type,
  className,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`input__container ${className ? className : ""}`}>
      {label && <div className="label__text">{label}</div>}
      <section>
        <input
          type={type == "password" && showPassword ? "text" : type || "text"}
          placeholder={placeholder}
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
        {type == "password" && (
          <div onClick={() => setShowPassword(!showPassword)}>
            <img src={"/svg/eye-off.svg"} alt="Password off" />
          </div>
        )}
      </section>
    </div>
  );
}
