"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import React from "react";
import scss from "./ContactModal.module.scss";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            className={scss.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Dialog.Content asChild>
              <motion.div
                className={scss.contentModal}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <Dialog.Title className={scss.title}>Спасибо!</Dialog.Title>
                <Dialog.Description className={scss.description}>
                  Ваше сообщение успешно отправлено.
                </Dialog.Description>
                <button className={scss.btn} onClick={onClose}>
                  Закрыть
                </button>
              </motion.div>
            </Dialog.Content>
          </motion.div>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ContactModal;
