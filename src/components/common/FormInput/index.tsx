import React from 'react';

import * as S from './styled';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({ label }, ref) => (
  <S.FormInputContainer ref={ref}>
    <S.Label>{label}</S.Label>
    <S.InputElement />
  </S.FormInputContainer>
));
