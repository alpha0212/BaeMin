import React from 'react';

import { ItemCardHorizontal } from 'src/components';

import * as S from './styled';

const priceState = 50000;
const butCountState = 1314;

export const MainPage: React.FC = () => (
  <S.TestContainer>
    <ItemCardHorizontal
      image=""
      title="COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)"
      price={priceState}
      grade={4.5}
      buyCound={butCountState}
      heart={21}
    />
  </S.TestContainer>
);
