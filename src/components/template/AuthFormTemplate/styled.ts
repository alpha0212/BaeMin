import styled from '@emotion/styled';

export const AuthFormTemplateContainer = styled.div`
  width: 43rem;
  border: 1px solid var(--color-border);
  border-radius: 1.2rem;
`;

export const AuthFormTypeContainer = styled.div<{ formType: 'login' | 'register' }>`
  display: flex;
  border-bottom: 1px solid var(--color-border);
  background-color: #f4f4f4;
  border-radius: 1.2rem 1.2rem 0 0;

  & > a {
    flex: 1 1 auto;
    color: #3f3f3f;
    font-size: 1.7rem;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    padding: 1.7rem;
    background-color: #f4f4f4;
    transition: all 200ms;
  }

  & > a.active {
    border: none;
    background-color: #ffffff;
  }

  & > a:first-child {
    border-radius: 1.2rem 1.2rem 1.2rem 0;
  }

  & > a:last-child {
    border-radius: 1.2rem 1.2rem 0 1.2rem;
  }
`;

export const AuthForm = styled.form`
  padding: 2rem;

  & > div:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
