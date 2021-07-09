/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

const PictureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;

  div {
    display: flex;
    align-items: center;
    width: 23%;
    background: gold;
    height: 215px;
    @media (max-width: 800px) {
      width: 47%;
      height: 210px;
    }
    img {
      width: 100%;
    }
  }
`

const pictures = () => {
  return (
    <Container>
      <TitleContainer>오늘의 인기 사진</TitleContainer>
      <PictureContainer>
        <div>gold</div>
        <div>gold</div>
        <div>gold</div>
        <div>gold</div>
        <div>gold</div>
        <div>gold</div>
        <div>gold</div>
        <div>gold</div>
      </PictureContainer>
    </Container>
  )
}

export default pictures
