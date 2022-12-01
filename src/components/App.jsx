import { nanoid } from 'nanoid';
import { Component } from 'react';
import { GlobalStyles } from 'utils/GlobalStyles';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Text, Span } from './ContactList/ContactList.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contactObject => {
    const newContact = {
      ...contactObject,
      id: nanoid(),
    };

    const isExist = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = idToDelete => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };

  registerFilterValue = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedString = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedString)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact}></ContactForm>
        </Section>

        <Section>
          <h2>Contacts</h2>
          <Filter
            filter={filter}
            findContact={this.registerFilterValue}
          ></Filter>

          {contacts.length === 0 && filter === '' ? (
            <Text>Unfortunately your contacts list is empty</Text>
          ) : this.filterContacts().length === 0 && filter !== '' ? (
            <Text>
              Your list does not contain the contact named
              <Span> {filter}</Span>
            </Text>
          ) : (
            <ContactList
              contacts={this.filterContacts()}
              deleteContact={this.deleteContact}
            />
          )}
        </Section>

        <GlobalStyles />
      </div>
    );
  }
}
