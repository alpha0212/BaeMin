import styled from '@emotion/styled';

export const Button = styled.button`
  outline: none;
  border: none;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.05rem;
  color: #ffffff;
  background-color: var(--color-primary);
  padding: 1.3rem;
  border-radius: 1.2rem;
  transition: all 100ms;

  &:active {
    background-color: var(--color-primary-darker);
  }
`;
