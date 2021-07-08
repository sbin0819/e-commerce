import styled from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize'
import { mainSrc, mainSideHSrc, mainSideWSrc } from './images'

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  height: auto;
  margin: 30px 15px 0;
  gap: 10px;
  .main {
    display: block;
    flex: 3;
    border-radius: 4px;
    img {
      border-radius: 4px;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .event {
    flex: 1;
    border-radius: 4px;
    img {
      border-radius: 4px;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 0;
    .event {
      img {
        min-height: 80px;
        width: 100%;
      }
    }
  }
`

const Main = () => {
  const { width }: { width: any } = useWindowSize()
  const side = width > 650 ? mainSideHSrc.h_01 : mainSideWSrc.w_01
  return (
    <Container>
      <div className="main">
        <img src={`${mainSrc.m_01}`} />
      </div>
      <div className="event">
        <img src={`${side}`} />
      </div>
    </Container>
  )
}

export default Main
