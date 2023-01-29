import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';

export function App() {
  const storageKey = 'storage-contacts-key';

  const contactGet = () => JSON.parse(localStorage.getItem(storageKey)) ?? [];
  const contactSet = contacts =>
    localStorage.setItem(storageKey, JSON.stringify(contacts));

  const [contacts, setContacts] = useState(contactGet);
  const [filter, setFilter] = useState('');

  const formSubmit = ({ name, number }) => {
    let filteredContact = contacts.filter(contact => {
      return contact.name === name;
    });
    if (filteredContact.length === 0) {
      setContacts([...contacts, { id: nanoid(), name, number }]);
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    contactSet(contacts);
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    (contact.name + contact.number).toLowerCase().includes(normalizedFilter)
  );

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit}></ContactForm>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter}></Filter>
      <ContactList
        contact={visibleContacts}
        onDelete={deleteContact}
      ></ContactList>
    </div>
  );
}
