import css from './ContactList.module.css';
export const ContactList = ({ children }) => (
  <div className={css.contactListContainer}>
    <h2 className={css.heading}>Contacts</h2>
    <ul className={css.list}>{children}</ul>
  </div>
);
