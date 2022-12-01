import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled';

export class Section extends Component {
  render() {
    return <StyledSection>{this.props.children}</StyledSection>;
  }
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
