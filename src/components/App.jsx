import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  addContact = async event => {
    event.preventDefault();
    const { name, number } = event.currentTarget;
    console.log('name', name);
    const { contacts } = this.state;
    const contactNames = contacts.map(contact => contact.name);
    if (contactNames.includes(name.value)) {
      return alert(`${name.value} is alredy in contacts`);
    }
    await this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name.value, number: number.value.toString() },
      ],
    }));
    event.target.reset();
  };
  handleFilterChnage = event => {
    this.setState({ filter: event.target.value });
  };
  filterArrayByName = event => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    // console.log(this.state);

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
        {/* filter */}
        <label>
          Find contacts by name
          <input
            onChange={this.handleFilterChnage}
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
          />
        </label>
        {/* filter */}
        {/* ContactList  */}
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.filterArrayByName().map(contact => (
              <li key={nanoid()}>
                {contact.name} {contact.number}
              </li>
            ))}
          </ul>
        </div>
        {/* ContactList  */}
      </div>
    );
  }
}
export default App;
