import LayoutSite from "@/components/layout/LayoutSite";
import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <LayoutSite>{children}</LayoutSite>
    </div>
  );
};
export default MainLayout;
