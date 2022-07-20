import React from 'react';

import HeartPNG from 'src/assets/heart.png';
import StarPNG from 'src/assets/star.png';
import { getPriceProps } from 'src/utils';

import * as S from './styled';

export interface ItemCardProps {
  imageUrl: string;
  title: string;
  price: number;
  grade: string;
  heart: number;
  isFlexItem?: boolean;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  imageUrl,
  title,
  price,
  grade,
  heart,
  isFlexItem = false,
}) => {
  const { text, color } = getPriceProps(price);

  return (
    <S.CardContainer>
      {isFlexItem && <S.FlexText>FLEX 상품</S.FlexText>}
      <S.CardItemThumbnail src={imageUrl} />
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <S.CarTitleContainer>
          <S.ItemPriceRangeText color={color}>{text}</S.ItemPriceRangeText>
          <p>{title}</p>
        </S.CarTitleContainer>
        <S.CardDetailContentContainer>
          <S.CardReviewsContainer>
            <S.ReviewItemContainer>
              <S.ReviewItemImage src={StarPNG} />
              <S.ReviewText>{grade}</S.ReviewText>
            </S.ReviewItemContainer>
            <S.ReviewItemContainer>
              <S.ReviewItemImage src={HeartPNG} />
              <S.ReviewText>{heart.toLocaleString()}</S.ReviewText>
            </S.ReviewItemContainer>
          </S.CardReviewsContainer>
          <S.CardItemPriceText>{price.toLocaleString()}원</S.CardItemPriceText>
        </S.CardDetailContentContainer>
      </div>
    </S.CardContainer>
  );
};
