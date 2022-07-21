import styled from '@emotion/styled';

export const CommunityPreviewContainer = styled.div`
  width: 108rem;
  height: 12.6rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CommunityPreviewIamge = styled.img`
  width: 12.8rem;
  height: 11.3rem;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 10px;
`;

export const CommunityPreviewBox = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: none;
`;

export const CommunityPreviewTitle = styled.div`
  margin-bottom: 5px;
  font-size: 1.9rem;
  font-weight: bold;
`;

export const CommunityPreviewContent = styled.div`
  font-size: 1.4rem;
  color: var(--color-text-description);
`;

export const CommunityPreviewNewsBox = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CommunityPreviewNews = styled.div`
  font-size: 1.2rem;
  color: var(--color-text-primary);
`;
