import React from 'react';

import { Navbar } from 'src/components';
import { SectionItem } from 'src/components/common/SectionItem';

import * as S from './styled';

export const MainPage: React.FC = () => (
  <S.MainPageContainer>
    <Navbar />
    <SectionItem />
  </S.MainPageContainer>
);
