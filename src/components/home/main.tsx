import styled from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize'
import { mainSrc, mainSideHSrc, mainSideWSrc } from './images'

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  height: 400px;
  .main {
    flex: 2;
    margin: 0 15px;
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
    background: pink;
    margin: 0 15px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`

const index = () => {
  const { width }: { width: any } = useWindowSize()

  console.log(width)
  return (
    <Container>
      <div className="main">
        <img src={`${mainSrc.m_01}`} />
      </div>
      <div className="event">b</div>
    </Container>
  )
}

export default index
