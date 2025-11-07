"use client";
import React, { useState } from "react";
import scss from "./Contact.module.scss";
import ContactModal from "./contactModal/ContactModal";

interface FormData {
  name: string;
  email: string;
  message: string;
}
interface ErrorState {
  name: boolean;
  email: boolean;
  message: boolean;
}

const SendMessage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState>({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: false }));
  };

  async function handleMessage() {
    const newErrors: ErrorState = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };

    if (Object.values(newErrors).some(Boolean)) {
      setError(newErrors);
      return;
    }

    const res = await fetch("/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setModalOpen(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleMessage();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Свяжитесь со мной</h3>
        <div className={scss.subtitle}>
          <h4>Готов к новым идеям и совместным проектам.</h4>
        </div>

        {/* Name */}
        <div className={scss.inputContainer}>
          <label htmlFor="name" className={scss.placeholder}>
            Ваше имя{" "}
            <span style={{ opacity: error.name ? "1" : "0" }}>
              (*Обязательное поле!)
            </span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
            style={{
              border: error.name ? "1px solid red" : "rgba(255, 255, 255, 0.15)",
            }}
          />
        </div>

        {/* Email */}
        <div className={scss.inputContainer}>
          <label htmlFor="email" className={scss.placeholder}>
            Ваш Email адрес{" "}
            <span style={{ opacity: error.email ? "1" : "0" }}>
              (*Обязательное поле!)
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            style={{
              border: error.email
                ? "1px solid red"
                : "rgba(255, 255, 255, 0.15)",
            }}
          />
        </div>

        {/* Message */}
        <div className={scss.inputContainer}>
          <label htmlFor="message" className={scss.placeholder}>
            Ваше сообщение{" "}
            <span style={{ opacity: error.message ? "1" : "0" }}>
              (*Обязательное поле!)
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            autoComplete="off"
            placeholder="Текст"
            value={formData.message}
            onChange={handleChange}
            style={{
              border: error.message
                ? "1px solid rgb(202, 56, 56)"
                : "rgba(255, 255, 255, 0.15)",
            }}
          ></textarea>
        </div>

        <div className={scss.sendContainer}>
          <div className={scss.bg}></div>
          <button type="submit">Отправить</button>
        </div>
      </form>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default SendMessage;
