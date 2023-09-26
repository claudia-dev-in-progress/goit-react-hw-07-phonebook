import { ContactItem } from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { contactsSelector, filterSelector } from "../../redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          id={contact.id}
        ></ContactItem>
      ))}
    </ul>
  );
};
