import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';
import { ImBin2 } from 'react-icons/im';
import { List } from './ContactList.styled';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const { data, error, isFetching } = useGetContactsQuery();
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
      {isFetching && <h2>Loading...</h2>}
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
