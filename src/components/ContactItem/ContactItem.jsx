export const ContactItem = ({ arrayOfContacts, deleteFunction }) =>
  arrayOfContacts.map(contact => (
    <li key={contact.id}>
      {contact.name}: {contact.number}{' '}
      <button onClick={() => deleteFunction(contact.id)}>Delete</button>
    </li>
  ));
