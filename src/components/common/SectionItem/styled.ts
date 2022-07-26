import styled from '@emotion/styled';

export const MainSection = styled.div`
  width: 102.4rem;
  margin: 0rem auto;
  padding: 5rem 5rem 0rem;
`;

export const TextLogo = styled.img`
  object-fit: contain;
  display: flex;
  float: none;
  width: 100%;
  height: auto;
`;

export const TextContainer = styled.div`
  position: relative;
  z-index: 3;
  @media screen and (min-width: 300px) {
    width: 86%;
  }
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
  @media screen and (min-width: 768px) {
    width: 45%;
  }
  width: 100%;
`;

export const MainFont = styled.div`
  color: #ffffff;
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;
