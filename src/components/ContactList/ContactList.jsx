import React from "react";
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({contacts, onDeleteContact}) => {
  return (contacts.map(contact => {
    return (<ul className={css.contact__list}>
      <li key={contact.id} className={css.contact__item}>
        <span className={css.contact__text}>{contact.name}:</span>
        <span className={css.contact__text}>{contact.number}</span>
        <button 
        type="button" 
        onClick={()=>onDeleteContact(contact.id)} 
        className={css.contact__button}
        >
        Delete
        </button>
      </li>
      </ul>)
  }))
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
	onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;

