import React from 'react';

import PencilPNG from 'src/assets/pencil.png';

import * as S from './styled';

export const CommunityWrite: React.FC = () => (
  <>
    <div />
    <S.CommunityWriteIntroduce>
      <S.CommunityWriteImage src={PencilPNG} />
      글쓰기 <br />
      <S.CommunityWriteIntroduceVer2>자신만의 글을 써보아요!</S.CommunityWriteIntroduceVer2>
    </S.CommunityWriteIntroduce>
    <S.CommunityWriteContainer>
      <S.CommunityWriteTitleArea>
        <S.CommunityWriteTitle placeholder="제목" />
      </S.CommunityWriteTitleArea>
      <S.CommunityWriteInputArea>
        <S.CommunityWriteInput placeholder="내용을 작성해주세요!" />
      </S.CommunityWriteInputArea>
      <S.CommunityWriteImgArea>
        <S.CommunityWriteUpload>이미지 업로드</S.CommunityWriteUpload>
      </S.CommunityWriteImgArea>
      <S.CommunityWriteUploadArea>
        <S.CommunityWriteUpload>등록</S.CommunityWriteUpload>
      </S.CommunityWriteUploadArea>
    </S.CommunityWriteContainer>
  </>
);
