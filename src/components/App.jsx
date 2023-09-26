import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import style from "./App.module.css";

export const App = () => {
  return (
    <section className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm></ContactForm>
      <h1 className={style.subtitle}>Contacts</h1>
      <Filter></Filter>
      <ContactList></ContactList>
    </section>
  );
};
