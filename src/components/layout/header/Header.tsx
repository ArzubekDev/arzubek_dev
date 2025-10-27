// components/Header/index.tsx
import HeaderServer from "./HeaderServer";
import HeaderClient from "./HeaderClient";

export default function Header() {
  return (
    <>
      <HeaderServer />
      <HeaderClient />
    </>
  );
}
