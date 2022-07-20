import React from 'react';

import LogoPNG from 'src/assets/logo.png';

import * as S from './styled';

export const Navbar: React.FC = () => (
  <S.NavbarContainer>
    <div className="container">
      <S.NavbarLogo src={LogoPNG} alt="오만상사 로고" />
    </div>
  </S.NavbarContainer>
);
