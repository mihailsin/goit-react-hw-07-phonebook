import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import './App.css';
import { Grid, GridContainer } from './App.styled';

const App = () => {
  return (
    <Grid>
      <GridContainer>
        <h1>Phonebook</h1>
        <ContactForm />
      </GridContainer>

      <GridContainer>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </GridContainer>
    </Grid>
  );
};

export default App;
