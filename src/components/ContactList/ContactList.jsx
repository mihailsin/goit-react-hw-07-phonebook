import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';
import { List } from './ContactList.styled';
import CircularProgress from '@mui/material/CircularProgress';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filterValue = useSelector(({ filter }) => filter);

  const filterContacts = () => {
    if (data) {
      const normalizedContacts = filterValue.toLowerCase();
      return data.filter(({ name }) =>
        name.toLowerCase().includes(normalizedContacts)
      );
    }
  };

  const filteredContacts = filterContacts();
  return (
    <>
      {isLoading && (
        <h3>
          Fetching contacts
          <CircularProgress color="inherit" size={18} />
        </h3>
      )}
      {data && (
        <List>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
