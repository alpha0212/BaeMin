const body = document.querySelector('body');
const createImg = (number) => {
  // <img> 요소를 만듭니다.
  const img = document.createElement('img');
  // <img> src, alt 값을 지정하고 'bgImg' 클래스를 추가합니다.
  img.src = `assets/background_0${number}.jpg`;
  img.alt = 'background images';
  img.classList.add('bgIme');
  // <body>에 <img> 삽입
  body.prepend(img);
};
const getRandom = () => {
  // 이미지 개수. 얼마든지 변경 가능.
  const IMG_NUM = 5;
  // 1 부터 5 까지의 랜덤 숫자 만들기
  const num = Math.floor(Math.random() * IMG_NUM) + 1;
  // 이미지 생성함수 호출
  createImg(num);
};
// 마지막으로 getRandom 함수 호출
getRandom();
