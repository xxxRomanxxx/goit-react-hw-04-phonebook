import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from "./App.module.css"

const App = () => {

  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? [ ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  
  const formSubmit = data => {
    const { name } = data;
    if (isNameExist(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number
      };

    setContacts([...contacts, newContact]);
  }

  const isNameExist = (name) => {
    return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  }

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  }

  const handleChangeFilter = (e) => {
    setFilter(e.currentTarget.filter)
  };

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmit}/>
      <h2 className={css.title__list}>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact}/>
    </div>
  )

}

export default App;