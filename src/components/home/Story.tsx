import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { storySrc } from './images'

const Container = styled.div`
  margin: 45px 10px 0px;
`

const TitleContainer = styled.div`
  padding-left: 5px;
  padding-bottom: 15px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
`

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`

const ImageStory = styled.div`
  height: 270px;
  width: 24%;
  border-radius: 4px;
  img {
    border-radius: 4px;
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 48%;
    height: 200px;
  }
  @media (max-width: 500px) {
    height: 180px;
  }
`

const NavStory = styled.div`
  height: 270px;
  width: 24%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  div {
    flex: 1;
    background: #f5f5f5;
  }
  @media (max-width: 800px) {
    width: 48%;
    height: 200px;
  }
  @media (max-width: 500px) {
    height: 180px;
  }
`

const shortcut = () => {
  return (
    <Container>
      <TitleContainer>카테고리별 상품 찾기</TitleContainer>
      <StoryContainer>
        <ImageStory>
          <img src={`${storySrc.s_01}`} />
        </ImageStory>
        <ImageStory>
          <img src={`${storySrc.s_02}`} />
        </ImageStory>
        <ImageStory>
          <img src={`${storySrc.s_03}`} />
        </ImageStory>
        <NavStory>
          <div></div>
          <div></div>
          <div></div>
        </NavStory>
      </StoryContainer>
    </Container>
  )
}

export default shortcut
