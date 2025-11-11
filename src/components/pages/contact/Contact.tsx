"use client";
import { useState } from "react";
import scss from "./Contact.module.scss";
import ContactModal from "./contactModal/ContactModal";
import SendMessage from "./SendMessage";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className={scss.contact}>
      <div className={scss.content}>
        <h1>03</h1>
        <div className={scss.contactContainer}>
          <SendMessage onSuccess={() => setModalOpen(true)} />
          <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
