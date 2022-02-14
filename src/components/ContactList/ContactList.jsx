import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../redux/items-slice';
import { ImBin2 } from 'react-icons/im';
import { List, Item, Button } from './ContactList.styled';

const ContactList = () => {
  const items = useSelector(state => state.contacts.items);

  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalizedContacts = filterValue.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name} : {number}
            <Button onClick={() => dispatch(remove(id))} type="button">
              <ImBin2 />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
