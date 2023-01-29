import PropTypes from 'prop-types';
import { ContainertList, ListContact, BtnDelete } from './ContactList.styled';

export function ContactList({ contact, onDelete }) {
  return (
    <ContainertList>
      {contact.map(({ number, name, id }) => {
        return (
          <ListContact key={id}>
            {name}: {number}
            <BtnDelete onClick={() => onDelete(id)}> Delete</BtnDelete>
          </ListContact>
        );
      })}
    </ContainertList>
  );
}

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
