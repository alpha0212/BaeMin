import styled from '@emotion/styled';

type ItemPriceKeyWordProps = {
  priceColor: string;
};

export const ItemCardHorizontalContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 54.5;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 20px;
`;

export const CardItemThumbnail = styled.img`
  height: 15rem;
  width: 15rem;
  object-fit: cover;
  margin-right: 2rem;
`;

export const ItemBox = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemPriceRangeText = styled.div<ItemPriceKeyWordProps>`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(${(props) => props.priceColor});
  margin-bottom: 0.5rem;
`;

export const ItemTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
`;

export const ReviewItemContainer = styled.div`
  display: flex;
  color: #6a6a6a;
  font-size: 1.4rem;

  & > div:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const ItemPriceBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ItemPrice = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-price);
`;

export const FlexText = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  padding: 0.6rem 1.2rem;
  color: var(--color-text-flex);
  background: var(--price-level-5);
`;
