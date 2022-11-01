import { ReactNode } from "react";
import Navbar from "./navbar";

interface Props {
  children?: ReactNode;
  navBarType?: "no_auth" | "auth";
}

export default function Layout({ children, navBarType }: Props) {
  return (
    <div className="layout__container">
      <Navbar type={navBarType} />
      <main>{children}</main>
    </div>
  );
}
