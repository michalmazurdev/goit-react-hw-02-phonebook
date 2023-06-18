import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => (
  <form className={css.form} onSubmit={onSubmit}>
    <h2>Phonebook</h2>
    <label>
      Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
    <label>
      Number
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
    <button type="submit">Add contact</button>
  </form>
);
