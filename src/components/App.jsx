import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = async event => {
    event.preventDefault();
    const { name, number } = event.currentTarget;
    await this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name.value, number: number.value.toString() },
      ],
    }));
    event.target.reset();
  };
  render() {
    console.log(this.state);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* Phonebook  */}

        <form onSubmit={this.addContact}>
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
        {/* Phonebook  */}
        {/* contacts  */}
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => (
              <li key={nanoid()}>
                {contact.name} {contact.number}{' '}
              </li>
            ))}
          </ul>
        </div>
        {/* contacts  */}
      </div>
    );
  }
}
export default App;
