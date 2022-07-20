import styled from '@emotion/styled';

export const MainPageContainer = styled.div`
  & > section:not(:last-child) {
    margin-bottom: 12rem;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.7rem;
`;

export const SectionDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-bottom: 2.5rem;
`;

export const CategorySectionItemsContainer = styled.div`
  display: flex;
  align-items: center;

  & > div:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const CategorySectionItemWrapper = styled.div`
  width: 28rem;
  padding: 2rem;
  font-weight: 500;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: 1.2rem;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    z-index: 99;
    transform: scale(1.1);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }
`;
