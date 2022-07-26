import React from 'react';

import BlogPNG from 'src/assets/Blog.png';
import FacebookPNG from 'src/assets/Facebook.png';
import InstaPNG from 'src/assets/Insta.png';
import LogoPNG from 'src/assets/Logo.png';
import YoutubePNG from 'src/assets/Youtube.png';

import * as S from './styled';

export const Navbar: React.FC = () => (
  <S.NavbarContainer>
    <S.NavbarLogo src={LogoPNG} />
    <S.LogoContainer>
      <S.Logoli>
        <S.NavbarSocialLogo src={FacebookPNG} />
      </S.Logoli>
      <S.Logoli>
        <S.NavbarSocialLogo src={InstaPNG} />
      </S.Logoli>
      <S.Logoli>
        <S.NavbarSocialLogo src={BlogPNG} />
      </S.Logoli>
      <S.Logoli>
        <S.NavbarSocialLogo src={YoutubePNG} />
      </S.Logoli>
    </S.LogoContainer>
  </S.NavbarContainer>
);
