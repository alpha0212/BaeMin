import styled from '@emotion/styled';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 32rem;
  padding: 2rem;
  background: #ffffff;
  border: 1px solid rgba(226, 227, 235, 0.8);
  border-radius: 1.6rem;
`;

export const CarTitleContainer = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: -0.04em;
  color: var(--color-text-primary);
`;

export const CardItemThumbnail = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

export const ItemPriceRangeText = styled.p<{ color: string }>`
  font-size: 1.2rem;
  color: ${(props) => `var(${props.color})`};
`;

export const CardDetailContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CardReviewsContainer = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const ReviewItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewItemImage = styled.img`
  font-size: 1.4rem;
  margin-right: 0.2rem;
`;

export const ReviewText = styled.p`
  font-size: 1.2rem;
`;

export const CardItemPriceText = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-text-price);
`;

export const FlexText = styled.p`
  position: absolute;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  padding: 0.6rem 1.2rem;
  color: #ffffff;
  background: var(--price-level-5);
`;
