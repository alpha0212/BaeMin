import React from 'react';
import { Link } from 'react-router-dom';

import LogoPNG from 'src/assets/logo.png';

import * as S from './styled';

export const Navbar: React.FC = () => (
  <S.NavbarContainer>
    <div
      className="container"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <Link to="/">
        <S.NavbarLogo src={LogoPNG} alt="오만상사 로고" />
      </Link>

      <Link
        to="community"
        style={{
          fontSize: '1.8rem',
          fontWeight: 500,
          textDecoration: 'none',
          color: 'var(--color-text-primary)',
        }}
      >
        커뮤니티
      </Link>
    </div>
  </S.NavbarContainer>
);
