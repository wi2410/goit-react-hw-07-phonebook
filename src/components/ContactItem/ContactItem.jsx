import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ListItem, ItemButton } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <ListItem id={contact.id}>
        {contact.name}: {contact.number}
        <ItemButton onClick={handleDelete}>Delete</ItemButton>
      </ListItem>
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  value: PropTypes.object,
};