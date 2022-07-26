import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  display: flex;
  width: 102.4rem;
  margin: 0rem auto;
  padding: 5rem 5rem 0rem;
`;

export const NavbarSocialLogo = styled.img`
  margin-top: 1rem;
  object-fit: cover;
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;

export const NavbarLogo = styled.img`
  object-fit: contain;
  display: flex;
  float: none;
  width: 28%;
  height: auto;
  max-width: 14.2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const Logoli = styled.li`
  display: flex;
`;
