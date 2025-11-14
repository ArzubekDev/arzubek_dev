"use client";
import { useRouter } from "next/navigation";
import scss from "./not-found.module.scss";
import { IoIosArrowBack } from "react-icons/io";

function NotFound() {
  const route = useRouter();

  return (
    <div className={scss.notFoundContainer}>
      <div className={scss.notFound}>
        <h1>404 — NOT FOUND!</h1>
        <button onClick={() => route.back()}>
          {" "}
          <IoIosArrowBack />
          Назад
        </button>
      </div>
    </div>
  );
}
export default NotFound;
