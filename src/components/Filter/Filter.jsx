import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={this.props.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.props.findContact}
          required
        />
      </FilterLabel>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  findContact: PropTypes.func.isRequired,
};
