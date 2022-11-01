import React, { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  title: string;
  content: string;
  iconPath: string;
  onClick: () => void;
}

export default function CardOption({
  title,
  content,
  onClick,
  iconPath,
}: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const onButtonClick = () => {
    setIsChecked(true);
    onClick();
  };
  return (
    <button
      onClick={onButtonClick}
      className="option__container"
      style={{
        background: isChecked ? "#F0F5FF" : undefined,
      }}
    >
      <input checked={isChecked} onChange={() => {}} type="radio" />

      <div>
        <div className="header">
          <img src={iconPath} alt="*" />
          <h2>{title}</h2>
        </div>

        <div>{content}</div>
      </div>

      <img src={"/svg/arrow-right.svg"} alt="*" />
    </button>
  );
}
