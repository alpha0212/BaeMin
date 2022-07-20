import React from 'react';
import { useLocation } from 'react-router-dom';

import { AuthFormTemplate, FormInput } from 'src/components';

import * as S from './styled';

export const AuthPage: React.FC = () => {
  const location = useLocation();
  const formType = location.pathname.split('/')[2];

  return (
    <S.AuthPageFormContainer>
      <AuthFormTemplate
        formType={formType as any}
        loginForm={
          <>
            <FormInput label="이메일" />
            <FormInput label="비밀번호" />
          </>
        }
        registerForm={
          <>
            <FormInput label="이메일" />
            <FormInput label="비밀번호" />
            <FormInput label="이메일" />
            <FormInput label="비밀번호" />
          </>
        }
        onSubmit={(event: React.FormEvent) => event.preventDefault()}
      />
    </S.AuthPageFormContainer>
  );
};
