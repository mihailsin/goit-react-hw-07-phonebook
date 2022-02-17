import { Item, Button } from './ContactItem.styled';
import { ImBin2 } from 'react-icons/im';
import CircularProgress from '@mui/material/CircularProgress';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { toast } from 'react-toastify';

const ContactItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item>
      {name} : {phone}
      <Button
        type="button"
        onClick={() =>
          deleteContact(id)
            .unwrap()
            .then(() => toast.success(`${name} deleted from your phonebook`))
            .catch(error =>
              toast.error(
                `DELETE request threw an error! ${error.status}: ${error.data}`
              )
            )
        }
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
