import React from 'react';

import HeartPNG from 'src/assets/heart.png';
import StarPNG from 'src/assets/star.png';
import { usePriceProps } from 'src/hooks';

import * as S from './styled';

export interface ItemCardHorizontalProps {
  imageUrl: string;
  title: string;
  price: number;
  grade: string;
  buyCount: number;
  heart: number;
  isFlexItem?: boolean;
}

export const ItemCardHorizontal: React.FC<ItemCardHorizontalProps> = ({
  imageUrl,
  title,
  price,
  grade,
  buyCount,
  heart,
  isFlexItem = false,
}) => {
  const { text, color } = usePriceProps(price);
  const priceString = price.toLocaleString(undefined, { minimumFractionDigits: 0 });
  const buyCountString = buyCount.toLocaleString(undefined, { minimumFractionDigits: 0 });

  return (
    <S.ItemCardHorizontalContainer>
      {isFlexItem && <S.FlexText>FLEX 제품</S.FlexText>}
      <S.CardItemThumbnail src={imageUrl} />
      <S.ItemBox>
        <div>
          <S.ItemPriceRangeText priceColor={color}>{text}</S.ItemPriceRangeText>
          <S.ItemTitle>{title}</S.ItemTitle>
          <S.ReviewItemContainer>
            <S.ReviewItemContainer>
              <p>구매 {buyCountString}</p>
            </S.ReviewItemContainer>
            <S.ReviewItemContainer>
              <img src={StarPNG} alt="" />
              <p>{grade}</p>
            </S.ReviewItemContainer>
            <S.ReviewItemContainer>
              <img src={HeartPNG} alt="" />
              <p>{heart}</p>
            </S.ReviewItemContainer>
          </S.ReviewItemContainer>
        </div>
        <S.ItemPriceBox>
          <S.ItemPrice>{priceString}원</S.ItemPrice>
        </S.ItemPriceBox>
      </S.ItemBox>
    </S.ItemCardHorizontalContainer>
  );
};
