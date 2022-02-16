import { useDispatch, useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
  contactsApi,
} from 'redux/contactsApi';
import { remove } from '../../redux/items-slice';
import { ImBin2 } from 'react-icons/im';
import { List, Item, Button } from './ContactList.styled';

const ContactList = () => {
  const { data, error, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  console.log(data);

  // const items = useSelector(state => state.contacts.items);

  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    if (data) {
      const normalizedContacts = filterValue.toLowerCase();
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedContacts)
      );
    }
  };

  const filteredContacts = filterContacts();

  return (
    <>
      {isFetching && <h2>Loading...</h2>}
      {data && (
        <List>
          {filteredContacts.map(({ name, phone, id }) => {
            return (
              <Item key={id}>
                {name} : {phone}
                <Button type="button" onClick={() => deleteContact(id)}>
                  <ImBin2 />
                </Button>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ContactList;
