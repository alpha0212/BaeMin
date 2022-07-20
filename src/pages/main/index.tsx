import React from 'react';

import { ItemCard } from 'src/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const CATEGORIES = ['키보드/마우스', '블루투스 이어폰', '스마트워치'];
  const TEST_ITEM_CARD_DATA = [
    {
      imageUrl: '',
      title: 'COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)',
      price: 50000,
      grade: '5.0',
      heart: 1400,
    },
    {
      imageUrl: '',
      title: 'COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)',
      price: 40000,
      grade: '5.0',
      heart: 1400,
    },
    {
      imageUrl: '',
      title: 'COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)',
      price: 30000,
      grade: '5.0',
      heart: 1400,
    },
    {
      imageUrl: '',
      title: 'COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)',
      price: 20000,
      grade: '5.0',
      heart: 1400,
    },
    {
      imageUrl: '',
      title: 'COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)',
      price: 10000,
      grade: '5.0',
      heart: 1400,
    },
    {
      imageUrl: '',
      title: 'COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)',
      price: 30000,
      grade: '5.0',
      heart: 1400,
    },
    {
      imageUrl: '',
      title: 'COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)',
      price: 20000,
      grade: '5.0',
      heart: 1400,
    },
    {
      imageUrl: '',
      title: 'COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)',
      price: 1000,
      grade: '5.0',
      heart: 1400,
    },
  ];

  return (
    <S.MainPageContainer>
      <section>
        <S.SectionTitle>🔥 따끈따끈한 상품</S.SectionTitle>
        <S.SectionDescription style={{ marginBottom: '0.5rem' }}>
          등록된 지 얼마 안 된 따끈따끈한 제품들이에요
        </S.SectionDescription>
        <S.NewestItemSectionContentContainer>
          {TEST_ITEM_CARD_DATA.map((data, i) => (
            <ItemCard key={data.title + i.toString()} {...data} />
          ))}
        </S.NewestItemSectionContentContainer>
      </section>
      <section>
        <S.SectionTitle>📦 카테고리 </S.SectionTitle>
        <S.SectionDescription>좋은 제품들을 카테고리로 살펴보세요!</S.SectionDescription>
        <S.CategorySectionItemsContainer>
          {CATEGORIES.map((category) => (
            <S.CategorySectionItemWrapper key={category}>{category}</S.CategorySectionItemWrapper>
          ))}
        </S.CategorySectionItemsContainer>
      </section>
      <section>
        <S.SectionTitle>💡 추천드리는 상품</S.SectionTitle>
        <S.SectionDescription>오만상사에서 고객님께 추천드리는 상품들이에요</S.SectionDescription>
      </section>
    </S.MainPageContainer>
  );
};
