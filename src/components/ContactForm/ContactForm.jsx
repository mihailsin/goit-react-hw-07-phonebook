import { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { Form, Label, Input, Button, Wrapper } from './ContactForm.styled';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

const ContactForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid(7);
  const numberInputid = nanoid(7);

  const inputHandler = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else setNumber(e.target.value);
  };

  const resetFormFields = () => {
    setName('');
    setNumber('');
  };

  const contactsNamesMatched = array => {
    const normalizedNames = array.map(item => item.name.toLowerCase());
    if (normalizedNames.includes(name.toLowerCase())) {
      toast.error(`${name} already in the phonebook!`);
      return true;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    resetFormFields();
    if (contactsNamesMatched(data)) return;
    else {
      addContact({ name, number })
        .unwrap()
        .then(() => toast.success(`${name} added to your phonebook!`))
        .catch(error =>
          toast.error(
            `POST request threw an error! ${error.status}: ${error.data}`
          )
        );
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Wrapper>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          value={name}
          onChange={inputHandler}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={numberInputid}>Number</Label>
        <Input
          id={numberInputid}
          value={number}
          onChange={inputHandler}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        {isLoading ? (
          <Button type="submit" disabled>
            Adding contact &nbsp;
            <CircularProgress color="inherit" size={12} />
          </Button>
        ) : (
          <Button type="submit">Add Contact</Button>
        )}
      </Wrapper>
    </Form>
  );
};

export default ContactForm;
