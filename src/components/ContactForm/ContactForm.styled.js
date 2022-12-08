import styled from 'styled-components';

export const Form = styled.form.attrs({ autocomplete: 'off' })`
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #2a2a2a;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  widh: 500px;
  padding: 4px;
  font: inherit;
`;

export const Button = styled.button`
  margin-left: 50px;
  padding: 3px 8px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  :hover {
    background-color: #80a6ff;
  }
`;
