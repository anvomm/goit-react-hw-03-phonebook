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
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

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
