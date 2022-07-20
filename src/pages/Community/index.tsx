import React from 'react';

import { CommunityPreview } from 'src/components/common/Community/CommunityPreview';

import * as S from './styled';

export const CommunityPage = () => (
  <S.CommunityContainer>
    <CommunityPreview
      title="5만원 미만의 가성비 전자제품 6가지 - 킹성비 샤오미 제품 2탄"
      writer="박준희"
      content="가격이 착한 가성비 전자제품을 찾는 분들을 위해
      오늘은 5만원 이내의 전자제품 중 성능이 재미있고 뛰어난 제품 6가지를 준비했습니다!"
      //   content 삭제 추천
      image=""
      data="2022.05.05"
    />
  </S.CommunityContainer>
);
