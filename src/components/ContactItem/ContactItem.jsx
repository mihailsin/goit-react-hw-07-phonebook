import { useDeleteContactMutation } from 'redux/contactsApi';
import { ImBin2 } from 'react-icons/im';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteContactHandler = id => {
    deleteContact(id)
      .unwrap()
      .then(() => toast.success(`${name} deleted from your phonebook`))
      .catch(error =>
        toast.error(
          `DELETE request threw an error! ${error.status}: ${error.data}`
        )
      );
  };

  return (
    <Item>
      {name} : {phone}
      <Button
        type="button"
        onClick={() => deleteContactHandler(id)}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <CircularProgress color="inherit" size={18} />
        ) : (
          <ImBin2 size={18} />
        )}
      </Button>
    </Item>
  );
};

export default ContactItem;
