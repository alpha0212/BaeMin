import React from 'react';

import * as S from './styled';

type CommunityPreviewType = {
  title: string;
  content: string;
  writer: string;
  image: string;
  data: string;
};

export const CommunityPreview: React.FC<CommunityPreviewType> = ({
  title,
  content,
  writer,
  image,
  data,
}) => (
  <S.CommunityPreviewContainer>
    <S.CommunityPreviewIamge src={image} />
    <S.CommunityPreviewBox>
      <S.CommunityPreviewTitle>{title}</S.CommunityPreviewTitle>
      <S.CommunityPreviewContent>{content}</S.CommunityPreviewContent>
      <S.CommunityPreviewNewsBox>
        <S.CommunityPreviewNews>
          작성자: {writer} <br /> 게시날짜: {data}
        </S.CommunityPreviewNews>
      </S.CommunityPreviewNewsBox>
    </S.CommunityPreviewBox>
  </S.CommunityPreviewContainer>
);
