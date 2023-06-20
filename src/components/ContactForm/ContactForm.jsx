import {useState} from "react";
import css from './ContactForm.module.css'

const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.currentTarget.value)
  }

  const handleChangeNumber = e => {
    setNumber(e.currentTarget.value)
  }
    
     const handleSubmit = e => {
        e.preventDefault(); 

        onSubmit({name: name, number: number});
        setName('');
        setNumber('');
      }

        return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.form__label}>
              Name
              <input
              className={css.form__input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name} 
              onChange={handleChangeName}
              /> 
            </label>
            <label className={css.form__label}>
            Number
            <input
              className={css.form__input} 
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number} 
              onChange={handleChangeNumber}
              />
            </label>
            <button type="submit" className={css.form__button}>Add contact</button>
          </form>
          );
    }
 
export default ContactForm;