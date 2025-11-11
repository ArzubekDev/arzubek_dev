"use client";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import scss from "./Contact.module.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}
interface SendMessageProps {
  onSuccess: () => void; // коштук!
}

const SendMessage: FC<SendMessageProps> = ({onSuccess}) => {

  // 🔹 1. useForm() форманы баштайт
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: "onChange", // реалтайм валидация
  });

  // 🔹 2. handleSubmit() → жиберүү логикасы
  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      onSuccess();
      reset(); // форманы тазалайт
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Свяжитесь со мной</h3>
        <div className={scss.subtitle}>
          <h4>Готов к новым идеям и совместным проектам.</h4>
        </div>

        {/* Name */}
        <div className={scss.inputContainer}>
          <label htmlFor="name" className={scss.placeholder}>
            Ваше имя{" "}
            <span style={{ opacity: errors.name ? "1" : "0" }}>
              (*Заполните здесь!)
            </span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Имя"
            autoComplete="name"
            {...register("name", { required: true })}
            style={{
              border: errors.name
                ? "1px solid red"
                : "rgba(255, 255, 255, 0.15)",
            }}
          />
        </div>

        {/* Email */}
        <div className={scss.inputContainer}>
          <label htmlFor="email" className={scss.placeholder}>
            Ваш Email{" "}
            <span style={{ opacity: errors.email ? "1" : "0" }}>
              (Некорректный email!)
            </span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Неверный email!",
              },
            })}
            style={{
              border: errors.email
                ? "1px solid red"
                : "rgba(255, 255, 255, 0.15)",
            }}
          />
        </div>

        {/* Message */}
        <div className={scss.inputContainer}>
          <label htmlFor="message" className={scss.placeholder}>
            Ваше сообщение{" "}
            <span style={{ opacity: errors.message ? "1" : "0" }}>
              (*Заполните здесь!)
            </span>
          </label>
          <textarea
            id="message"
            placeholder="Текст"
            {...register("message", { required: true })}
            style={{
              border: errors.message
                ? "1px solid red"
                : "rgba(255, 255, 255, 0.15)",
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(onSubmit)()}
          ></textarea>
        </div>

        <div className={scss.sendContainer}>
          <div className={scss.bg}></div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "Отправить"}
          </button>
        </div>
      </form>

    </>
  );
};

export default SendMessage;
