import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactItem } from './ContactItem/ContactItem';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
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
    number: '',
  };

  addContact = async event => {
    event.preventDefault();
    const { name, number } = event.currentTarget;
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

  removeContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1 className={css.heading}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={css.secondaryHeading}>Contacts</h2>
        <Filter onChange={this.handleFilterChnage} />
        <ContactList>
          <ContactItem
            arrayOfContacts={this.filterArrayByName()}
            deleteFunction={this.removeContact}
          />
        </ContactList>
      </div>
    );
  }
}
export default App;
