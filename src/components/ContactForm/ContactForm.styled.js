import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 24px;
  border: 1px solid black;
`;

export const FormInput = styled.input`
  border: 1px solid black;
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.21);
  margin-bottom: 16px;
  margin-top: 6px;
  padding: 4px;
  outline: none;
  &:hover,
  :focus {
    border: 1px solid blue;
  }
`;

export const SubmitButton = styled.button`
  padding: 4px;
  width: 150px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
`;