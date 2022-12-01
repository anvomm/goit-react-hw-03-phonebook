import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactButton } from './Contact.styled';

export class Contact extends Component {
  render() {
    const { name, number, id, deleteContact } = this.props;
    return (
      <>
        <p>
          {name}: {number}
        </p>
        <ContactButton
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
        >
          Delete
        </ContactButton>
      </>
    );
  }
}

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func,
};
