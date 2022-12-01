import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Wrap, Label, Input, Button } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};
export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  inputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();
    this.props.addContact({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <Form onSubmit={this.addContact}>
        <Wrap>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.inputHandler}
              required
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.inputHandler}
              required
            />
          </Label>
        </Wrap>

        <Button onClick={e => e.target.blur()}>Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
