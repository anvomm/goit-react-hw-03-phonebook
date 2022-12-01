import styled from 'styled-components';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

export const FilterLabel = styled(Label)`
  margin: 30px auto 0 auto;
  width: 250px;

  @media (min-width: 480px) {
    width: 350px;
  }
`;

export const FilterInput = styled(Input)`
  width: 100%;
`;
