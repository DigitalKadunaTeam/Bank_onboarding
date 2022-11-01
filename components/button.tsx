import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({ title, onClick, className }: Props) {
  console.log(`${className || ""} btn__container`);

  return (
    <div className={`${className || ""} btn__container`}>
      <button className="w-full" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
