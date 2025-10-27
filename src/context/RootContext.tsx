"use client"
import React, { FC, useState } from "react";
import { NavbarState } from ".";

interface IRootContext {
    children: React.ReactNode;
}

const RootContext: FC<IRootContext> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarState.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </NavbarState.Provider>
  );
};

export default RootContext;
