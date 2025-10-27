import scss from "./Contact.module.scss";
import SendMessage from "./SendMessage";

const Contact = () => {

  return (
    <section className={scss.contact}>
      <div className={scss.content}>
        <h1>03</h1>
        <div className={scss.contactContainer}>
         <SendMessage/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
