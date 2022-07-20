/* eslint-disable no-param-reassign */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { ItemCard, ItemCardHorizontal } from 'src/components';

import * as S from './styled';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const MainPage: React.FC = () => {
  const CATEGORIES = ['키보드/마우스', '블루투스 이어폰', '스마트워치'];
  const ITEM_CARD_CODE = [
    {
      code: 2786921,
      type: 'danawa',
    },
    {
      code: 3427959,
      type: 'danawa',
    },
    {
      code: 12076547,
      type: 'danawa',
    },
    {
      code: 6231709,
      type: 'danawa',
    },
    {
      code: 8206648,
      type: 'danawa',
    },
    {
      code: 16102643,
      type: 'danawa',
    },
    {
      code: 25606471522,
      type: 'naver',
    },
    {
      code: 12948410,
      type: 'danawa',
    },
    {
      code: 12387557,
      type: 'danawa',
    },
  ];

  const [items, setItems] = useState<
    {
      imageUrl: string;
      title: string;
      price: number;
      grade: string;
      heart: number;
    }[]
  >([]);

  useEffect(() => {
    const init = () => {
      for (let i = 0; i < ITEM_CARD_CODE.length; i += 1) {
        const item = ITEM_CARD_CODE[i];
        axios
          .get(`http://minpeter.iptime.org:4001/api/data/?type=${item.type}&code=${item.code}`)
          .then((res) => {
            setItems((prev) => [...prev, res.data]);
          });
      }
    };

    init();
  }, []);

  return (
    <S.MainPageContainer>
      <section>
        <S.SectionTitle>🔥 따끈따끈한 상품</S.SectionTitle>
        <S.SectionDescription style={{ marginBottom: '0.5rem' }}>
          등록된 지 얼마 안 된 따끈따끈한 제품들이에요
        </S.SectionDescription>
        <S.NewestItemSectionItemsContainer>
          {items.map((data, i) => (
            <ItemCard key={data.title + i.toString()} {...data} />
          ))}
        </S.NewestItemSectionItemsContainer>
      </section>
      <section style={{ marginBottom: '5rem' }}>
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
        <S.RecommendItemSectionItemsContainer>
          {items.map((data, i) => (
            <ItemCardHorizontal
              key={data.title + i.toString()}
              buyCount={getRandomInt(100, 1483)}
              {...data}
              isFlexItem={data.price >= 50000}
            />
          ))}
        </S.RecommendItemSectionItemsContainer>
      </section>
    </S.MainPageContainer>
  );
};
