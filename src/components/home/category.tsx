/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categorySrc } from './images';

const Container = styled.div`
  margin: 100px 25px 0px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px;
  .img_wrapper {
    border-radius: 24px;
    box-shadow: 0 2px 3px 0 rgb(234 235 239 / 40%);
    border: 1px solid rgba(0, 0, 0, 0.07);
    background-color: #fff;
    overflow: hidden;
    padding: 5px;
    img {
      width: 90px;
    }
  }
  p {
    max-width: 98px;
    color: #292929;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    word-wrap: break-word;
    word-break: keep-all;
    overflow-wrap: break-word;
    margin: 10px auto 0;
  }
`;

const title = [
  '가구',
  '패브릭',
  '홈데코/조명',
  '가전',
  '수납/정리',
  '생활',
  '주방',
  '생필품',
  'DIY/공구',
  '시공/서비스',
  '반려동물',
  '캠핑',
  '홈트레이닝',
  '유아/아동',
  '렌탈',
];

const shortcut = () => {
  console.log(categorySrc.c_01);
  return (
    <Container>
      {Object.entries(categorySrc).map(([key, value], i) => (
        <ImgContainer key={key}>
          <div className="img_wrapper">
            <img src={`${value}`} />
          </div>
          <p>
            <Link to="/">{title[i]}</Link>
          </p>
        </ImgContainer>
      ))}
    </Container>
  );
};

export default shortcut;
