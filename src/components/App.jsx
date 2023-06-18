import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
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
        <ContactForm onSubmit={this.addContact} />
        {/* filter */}

        <Filter onChange={this.handleFilterChnage} />
        {/* <label>
          Find contacts by name
          <input
            onChange={this.handleFilterChnage}
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
          />
        </label> */}
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
