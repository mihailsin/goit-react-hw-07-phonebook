import { Item, Button } from './ContactItem.styled';
import { ImBin2 } from 'react-icons/im';
import { useDeleteContactMutation } from 'redux/contactsApi';

const ContactItem = ({ name, phone, id }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Item>
      {name} : {phone}
      <Button type="button" onClick={() => deleteContact(id)}>
        <ImBin2 />
      </Button>
    </Item>
  );
};

export default ContactItem;
