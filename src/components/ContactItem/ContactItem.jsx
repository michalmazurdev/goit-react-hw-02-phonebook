import css from './ContactItem.module.css';

export const ContactItem = ({ arrayOfContacts, deleteFunction }) =>
  arrayOfContacts.map(contact => (
    <li className={css.listItem} key={contact.id}>
      {contact.name}: {contact.number}{' '}
      <button className={css.button} onClick={() => deleteFunction(contact.id)}>
        Delete
      </button>
    </li>
  ));
