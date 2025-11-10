import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function ProjectLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
