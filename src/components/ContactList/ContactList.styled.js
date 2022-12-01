import styled from 'styled-components';

export const List = styled.ul`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  gap: 20px;
  margin-top: 30px;

  @media (min-width: 480px) {
    width: 350px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.6;
  color: #4b494d;
`;

export const Text = styled.p`
  margin-top: 30px;
  font-size: 18px;
  color: #4b494d;
`;

export const Span = styled.span`
  color: #5c3c8c;
  font-weight: 600;
`;
