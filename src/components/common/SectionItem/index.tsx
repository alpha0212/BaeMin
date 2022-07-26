import React from 'react';

import MainTextPNG from 'src/assets/main_text.png';

import * as S from './styled';

export const SectionItem: React.FC = () => (
  <S.MainSection>
    <S.TextContainer>
      <S.TextLogo src={MainTextPNG} />
    </S.TextContainer>
    <S.MainFont>웹스토어 다운로드</S.MainFont>
  </S.MainSection>
);
