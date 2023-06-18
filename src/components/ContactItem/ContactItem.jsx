import { nanoid } from 'nanoid';
export const ContactItem = ({ arrayOfContacts }) =>
  arrayOfContacts.map(contact => (
    <li key={nanoid()}>
      {contact.name} {contact.number}
    </li>
  ));
