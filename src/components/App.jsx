import React, {Component} from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from "./App.module.css"

class App extends Component {
  state = { 
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
   }

   componentDidMount(){
    const contact = localStorage.getItem('contacts');
    const parselContact = JSON.parse(contact);
    if (parselContact) {
      this.setState({contacts: parselContact});
    }
   }

   componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
           localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
         }
   }

  formSubmit = data => {
    const { name } = data;
    if (this.isNameExist(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number
      };

    this.setState(prevState => ({
   
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }))
  } 

  handleChangeFilter = (e) => {
    this.setState({filter: e.currentTarget.value});
  };

  isNameExist = (name) => {
    return this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }


  render() {
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={this.formSubmit}/>
      <h2 className={css.title__list}>Contacts</h2>
      <Filter value={filter} onChange={this.handleChangeFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact}/>
    </div>
    );
  }
}
 
export default App;