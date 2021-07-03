/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { homeImges } from './imges';

const Container = styled.div`
  margin: 25px 10px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12%;
  gap: 15px;
  @media (max-width: 800px) {
    width: 25%;
  }
  img {
    width: 100%;
  }
`;

const shortcut = () => {
  return (
    <Container>
      <ImgContainer>
        <img src={`${homeImges.shorcut_01}`} />
        <p>
          <Link to="/">쇼핑하기</Link>
        </p>
      </ImgContainer>
      <ImgContainer>
        <img src={`${homeImges.shorcut_02}`} />
        <p>
          <Link to="/">오늘의집새송</Link>
        </p>
      </ImgContainer>
      <ImgContainer>
        <img src={`${homeImges.shorcut_03}`} />
        <p>
          <Link to="/">평수별집구경</Link>
        </p>
      </ImgContainer>
      <ImgContainer>
        <img src={`${homeImges.shorcut_04}`} />
        <p>
          <Link to="/">공간별사진</Link>
        </p>
      </ImgContainer>
      <ImgContainer>
        <img src={`${homeImges.shorcut_05}`} />
        <p>
          <Link to="/">시공업체찾기</Link>
        </p>
      </ImgContainer>
      <ImgContainer>
        <img src={`${homeImges.shorcut_06}`} />
        <p>
          <Link to="/">빠른시공상담</Link>
        </p>
      </ImgContainer>
      <ImgContainer>
        <img src={`${homeImges.shorcut_07}`} />
        <p>
          <Link to="/">장마철 꿀팁!</Link>
        </p>
      </ImgContainer>
      <ImgContainer>
        <img src={`${homeImges.shorcut_08}`} />
        <p>
          <Link to="/">질문과답변</Link>
        </p>
      </ImgContainer>
    </Container>
  );
};

export default shortcut;
