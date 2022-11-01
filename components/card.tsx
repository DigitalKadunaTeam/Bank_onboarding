import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  type: "active" | "pending" | "failed";
  count: string;
}

export default function Card({ type, count }: Props) {
  const iconPaths = {
    active: "/svg/account.svg",
    failed: "/svg/error.svg",
    pending: "/svg/spinner.svg",
  };

  const titles = {
    active: "Active Accounts",
    pending: "Pending Accounts",
    failed: "Failed Accounts",
  };

  return (
    <div className={"card__container " + type}>
      <img src={iconPaths[type]} alt="" />
      <div>{titles[type]}</div>
      <h2>{count}</h2>
    </div>
  );
}
