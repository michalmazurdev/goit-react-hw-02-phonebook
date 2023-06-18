import { nanoid } from 'nanoid';
export const ContactItem = ({ arrayOfContacts }) =>
  this.filterArrayByName().map(contact => (
    <li key={nanoid()}>
      {contact.name} {contact.number}
    </li>
  ));
