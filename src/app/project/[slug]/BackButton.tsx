"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import scss from "./ProjectPage.module.scss";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button onClick={handleBack} className={scss.back}>
      <IoIosArrowBack />
      Назад
    </button>
  );
}
