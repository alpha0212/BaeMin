import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from 'src/components/common';

import * as S from './styled';

export interface AuthFormTemplateProps {
  formType: 'login' | 'register';
  loginForm: React.ReactNode;
  registerForm: React.ReactNode;
  onSubmit: React.FormEventHandler;
}

export const AuthFormTemplate: React.FC<AuthFormTemplateProps> = ({
  formType,
  loginForm,
  registerForm,
  onSubmit,
}) => (
  <S.AuthFormTemplateContainer>
    <S.AuthFormTypeContainer formType="login">
      <NavLink to="/auth/login">로그인</NavLink>
      <NavLink to="/auth/register">회원가입</NavLink>
    </S.AuthFormTypeContainer>
    <S.AuthForm onSubmit={onSubmit}>
      {formType === 'login' ? loginForm : registerForm}
      <Button style={{ width: '100%', marginTop: '1.2rem' }}>
        {formType === 'login' ? '로그인' : '회원가입'}
      </Button>
    </S.AuthForm>
  </S.AuthFormTemplateContainer>
);
