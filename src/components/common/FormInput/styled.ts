import styled from '@emotion/styled';

export const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: 1.2rem;
  color: #363636;
  margin-bottom: 0.5rem;
`;

export const InputElement = styled.input`
  outline: none;
  padding: 1.2rem;
  border: 2px solid var(--color-border);
  border-radius: 0.8rem;
  transition: all 200ms;

  &:hover {
    border-color: #b7dcb9;
  }

  &:focus {
    border-color: #4cb050;
  }
`;
