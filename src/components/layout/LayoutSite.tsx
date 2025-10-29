"use client";
import { FC, ReactNode, useEffect } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import BackgroundGlow from "../ui/backgroundGlow/BackgroundGlow";
import LightEffect from "../ui/lightEffect/LightEffect";

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {


  return (
    <div
      className={scss.layoutSite}
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
      <BackgroundGlow />
      <LightEffect/>
    </div>
  );
};
export default LayoutSite;
