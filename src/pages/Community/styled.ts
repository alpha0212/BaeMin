import styled from '@emotion/styled';

export const CommunityContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
`;

export const CommunityTextBox = styled.div`
  width: 114.2rem;
  margin-top: 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CommunityTextTitle = styled.div`
  font-size: 2.4rem;
  padding-bottom: 10px;
`;

export const CommunityTextDescription = styled.div`
  font-size: 1.6rem;
  color: var(--color-text-description);
`;

export const CommunityWriteButtin = styled.button`
  text-decoration: none;
  width: 12.6rem;
  height: 4.1rem;
  background-color: #49b84d;
  border: 0;
  border-radius: 30px;
  font-size: 1.7rem;
  font-weight: bold;
`;

export const CommunityPreviewListBox = styled.div`
  width: 114.2rem;
  background-color: #f8f8f8;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
