import { createContext } from "react";

interface NavbarContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}


export const NavbarState = createContext<NavbarContextType | null>(null);