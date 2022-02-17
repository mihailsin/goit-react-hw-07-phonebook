import { useState } from 'react';
import { useGetContactsQuery } from 'redux/contactsApi';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button, Wrapper } from './ContactForm.styled';
import { useAddContactMutation } from 'redux/contactsApi';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

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
      alert(`${name} is already in contacts`);
      return true;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    resetFormFields();
    if (contactsNamesMatched(data)) return;
    else addContact({ name, number });
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
        <Button type="submit">Add Contact</Button>
      </Wrapper>
    </Form>
  );
};

export default ContactForm;
