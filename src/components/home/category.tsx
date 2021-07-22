/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { categorySrc } from './images'

const Container = styled.div`
  margin: 50px 10px 0px;
`

const TitleContainer = styled.div`
  padding-left: 5px;
  padding-bottom: 15px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
`

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px;
  padding-bottom: 20px;
  .img_wrapper {
    border-radius: 24px;
    box-shadow: 0 2px 3px 0 rgb(234 235 239 / 40%);
    border: 1px solid rgba(0, 0, 0, 0.07);
    background-color: #fff;
    overflow: hidden;
    padding: 5px;
    img {
      cursor: pointer;
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
`

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
]

const shortcut = () => {
  return (
    <Container>
      <TitleContainer>카테고리별 상품 찾기</TitleContainer>
      <CategoryContainer>
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
      </CategoryContainer>
    </Container>
  )
}

export default shortcut
