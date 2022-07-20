import styled from '@emotion/styled';

export const CardContainer = styled.div`
  width: 100%;
  height: 324px;
`;
export const Card = styled.div`
  width: 250px;
  height: 324px;
  align-items: center;
  padding: 2rem;

  background: #ffffff;
  border: 1px solid rgba(226, 227, 235, 0.8);
  border-radius: 1.6rem;
`;

export const SpanCard = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.04em;

  color: #000000;
`;

export const ImageCard = styled.img`
  width: 210px;
  height: 151px;
  left: 20px;
  top: 20px;
  object-fit: cover;
`;

export const PriceRangeCard = styled.span`
  font-size: 12px;
  color: #e9b738;
`;

export const ReviewCard = styled.img`
  font-size: 1.4rem;
  left: 23px;
  top: 256px;
`;

export const distance = styled.div`
  padding-top: 2rem;
  width: 30px;
  height: 15px;
`;

export const ReviewText = styled.span`
  width: 17px;
  height: 15px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.04em;
  padding-left: 0.3rem;
`;

export const PriceCard = styled.span`
  width: 94px;
  height: 30px;
  padding-left: 10rem;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 5rem;
  letter-spacing: -0.04em;

  color: #dd2525;
`;

export const FlexCard = styled.div``;

export const FlexText = styled.p`
  position: absolute;
  top: 2.1rem;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.04em;
  text-align: center;
  padding: 0.3rem 1.2rem;

  color: #ffffff;
  background: #e9b738;
`;
