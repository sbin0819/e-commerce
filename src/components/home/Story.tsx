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
  .content {
    margin: 10px 5px 10px 5px;
    white-space: normal;
    .story_title {
      font-size: 13px;
      margin-bottom: 5px;
    }
    .story_sub {
      font-weight: 700;
      line-height: 1.3;
      max-height: 34px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }
  }

  @media (max-width: 750px) {
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    cursor: pointer;
    .nav_title {
      font-size: 14px;
      font-weight: 700;
      color: #424242;
    }
    .nav_sub {
      font-size: 13px;
      margin-bottom: 8px;
      color: #757575;
    }
  }
  @media (max-width: 750px) {
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
          <div className="content">
            <div className="story_title">세 번의 이사끝</div>
            <div className="story_sub">
              경험에서 나오는 공간 활용, 원앤온리 자취방
            </div>
          </div>
        </ImageStory>
        <ImageStory>
          <img src={`${storySrc.s_02}`} />
          <div className="content">
            <div className="story_title">넓은 욕실</div>
            <div className="story_sub">욕실 공간 활용, 깨끗한 욕실</div>
          </div>
        </ImageStory>
        <ImageStory>
          <img src={`${storySrc.s_03}`} />
          <div className="content">
            <div className="story_title">햇살이 가득한 거실</div>
            <div className="story_sub">화이트 컬로로 시원한 거실 공간 활용</div>
          </div>
        </ImageStory>
        <NavStory>
          <div>
            <p className="nav_sub">예쁜 집 구경하기</p>
            <p className="nav_title">집들이</p>
          </div>
          <div>
            <p className="nav_sub">전문가 시공사례</p>
            <p className="nav_title">전문가 집들이</p>
          </div>
          <div>
            <p className="nav_sub">인테리어 꿀팁 총 집합</p>
            <p className="nav_title">노하우</p>
          </div>
        </NavStory>
      </StoryContainer>
    </Container>
  )
}

export default shortcut
