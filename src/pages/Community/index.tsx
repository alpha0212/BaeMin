import React from 'react';
import { Link } from 'react-router-dom';

import { CommunityPreview } from 'src/components/common/Community/CommunityPreview';

import * as S from './styled';

export const CommunityPage = () => {
  const TEST_COMMUNITY_PREVIEW_DATA = [
    {
      title: '5만원 미만의 가성비 전자제품 6가지 - 킹성비 샤오미 제품 2탄',
      writer: '탑픽',
      content:
        '가격이 착한 가성비 전자제품을 찾는 분들을 위해 오늘은 5만원 이내의 전자제품 중 성능이 재미있고 뛰어난 제품 6가지를 준비했습니다!',
      image:
        'https://jtoppick.com/wp-content/uploads/2020/05/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%91%E1%85%AE%E1%86%B71.png',
      data: '2020.05.19',
    },
    {
      title: '5만원 미만의 가성비 전자제품 - 킹성비 샤오미 제품',
      writer: '탑픽',
      content:
        '350ml로 휴대할 수 있는 크기의 믹서기다. 디자인도 깔끔하고 믹서기 기능 자체도 좋은 제품이다. ',
      image:
        'https://jtoppick.com/wp-content/uploads/2020/05/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%91%E1%85%AE%E1%86%B72.png',
      data: '2019.12.05',
    },
    {
      title: '5만원 이하 핵가성비 스마트 워치 추천2',
      writer: '얼마이하',
      content: '샤오미 스마트 미밴드 4 링크 : https://coupa.ng/bK10YQ',
      image:
        'https://thumbnail8.coupangcdn.com/thumbnails/remote/292x292q65ex/image/retail/images/2021/05/24/14/5/08b1b212-5f9c-4e5b-b091-eed2c090647d.jpg',
      data: '2020.10.12',
    },
  ];

  return (
    <S.CommunityContainer>
      <S.CommunityTextBox>
        <div>
          <S.CommunityTextTitle>📝 커뮤니티</S.CommunityTextTitle>
          <S.CommunityTextDescription>여러 사람과 소통해봐요! </S.CommunityTextDescription>
        </div>
        <Link to="/community/write">
          <S.CommunityWriteButton>글쓰기</S.CommunityWriteButton>
        </Link>
      </S.CommunityTextBox>
      <S.CommunityPreviewListBox>
        {TEST_COMMUNITY_PREVIEW_DATA.map((data, i) => (
          <CommunityPreview key={data.title + i.toString()} {...data} />
        ))}
      </S.CommunityPreviewListBox>
    </S.CommunityContainer>
  );
};
