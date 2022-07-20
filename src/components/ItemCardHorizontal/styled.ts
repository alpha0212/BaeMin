import styled from '@emotion/styled';

type ItemPriceKeyWordProps = {
  priceColor: string;
};

export const ItemCardHorizontalContainer = styled.div`
  position: relative;
  width: 54.5rem;
  height: 20rem;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemImageBox = styled.div`
  width: 21.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemImage = styled.img`
  width: 13.4rem;
  height: 13.1rem;
  object-fit: cover;
`;

export const ItemBox = styled.div`
  font-weight: bold;
  flex: 1;
  height: 100%;
  justify-content: center;
  padding-right: 3rem;
  display: flex;
  flex-direction: column;
`;

export const ItemPriceKeyWord = styled.div<ItemPriceKeyWordProps>`
  font-size: 1.4rem;
  color: var(${(props) => props.priceColor});
`;

export const ItemTitle = styled.div`
  font-size: 1.8rem;
  color: var(--color-text-primary);
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const ItemReViewBox = styled.div`
  width: 14.6rem;
  font-size: 1.2rem;
  color: var(--color-text-description);
  display: flex;
  justify-content: space-between;
`;

export const ItemBuyCount = styled.div``;

export const ItemGrade = styled.img``;

export const ItemHeart = styled.img``;

export const ItemPriceBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ItemPrice = styled.div`
  font-size: 2.8rem;
  color: var(--color-text-price);
`;

export const ItemFLexIF = styled.div`
  position: absolute;
  color: var(--color-text-flex);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  width: 7.8rem;
  height: 2.2rem;
  background-color: var(--color-flex);
  top: 20px;
  left: 25px;
`;
