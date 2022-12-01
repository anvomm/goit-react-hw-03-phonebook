import styled from 'styled-components';

export const Form = styled.form`
  width: 250px;
  border: 2px solid #9c73c7;
  border-radius: 5px;
  margin: 30px auto 0 auto;
  padding: 20px;

  @media (min-width: 480px) {
    width: 300px;
    padding: 40px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
  color: #4b494d;
`;

export const Input = styled.input`
  width: 200px;
  padding: 10px 0 10px 10px;
  border: 1px solid #d3b0f7;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  color: #4b494d;
  transition: border-color 250ms linear;

  &:focus {
    border-color: #7b53b8;
  }

  @media (min-width: 480px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  min-width: 110px;
  padding: 10px;
  margin-top: 65px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #d3b0f7;
  color: #3a383d;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #ac8acf;
  }
`;
