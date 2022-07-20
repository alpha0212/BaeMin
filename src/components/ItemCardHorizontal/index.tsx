import React, { useState } from 'react';

import HeartPNG from 'src/assets/heart.png';
import StarPNG from 'src/assets/star.png';

import * as S from './styled';

type ItemCardHorizontalType = {
  image: string;
  title: string;
  price: number;
  grade: string | number;
  buyCount: number;
  heart: string | number;
};

export const ItemCardHorizontal: React.FC<ItemCardHorizontalType> = ({
  image,
  title,
  price,
  grade,
  buyCount,
  heart,
}) => {
  const priceKeywordValue = () => {
    if (price >= 0 && price < 10000) {
      return { text: '천원대', color: '--price-level-0' };
    }
    if (price >= 10000 && price < 20000) {
      return { text: '1만원대', color: '--price-level-1' };
    }
    if (price >= 20000 && price < 30000) {
      return { text: '2만원대', color: '--price-level-2' };
    }
    if (price >= 30000 && price < 40000) {
      return { text: '3만원대', color: '--price-level-3' };
    }
    if (price >= 40000 && price < 50000) {
      return { text: '4만원대', color: '--price-level-4' };
    }
    if (price >= 50000 && price < 60000) {
      return { text: '5만원대', color: '--price-level-5', isFlexItem: true };
    }
    return { text: '5만원대', color: '--price-level-5' };
  };
  const [priceData] = useState(priceKeywordValue());

  const priceString = price.toLocaleString(undefined, { minimumFractionDigits: 0 });
  const buyCountString = buyCount.toLocaleString(undefined, { minimumFractionDigits: 0 });
  return (
    <S.ItemCardHorizontalContainer>
      {priceData.isFlexItem ? <S.ItemFLexIF>Flex 제품</S.ItemFLexIF> : ''}
      <S.ItemImageBox>
        <S.ItemImage src={image} />
      </S.ItemImageBox>
      <S.ItemBox>
        <S.ItemPriceKeyWord priceColor={priceData.color}>{priceData.text}</S.ItemPriceKeyWord>
        <S.ItemTitle>{title}</S.ItemTitle>
        <S.ItemReViewBox>
          <S.ItemBuyCount>구매 {buyCountString}</S.ItemBuyCount>
          <S.ItemGrade src={StarPNG} />
          {grade}
          <S.ItemHeart src={HeartPNG} />
          {heart}
        </S.ItemReViewBox>
        <S.ItemPriceBox>
          <S.ItemPrice>{priceString}원</S.ItemPrice>
        </S.ItemPriceBox>
      </S.ItemBox>
    </S.ItemCardHorizontalContainer>
  );
};
