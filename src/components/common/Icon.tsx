import styled from 'styled-components'
import { AiOutlineUser } from 'react-icons/ai'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: #ececec;
  svg {
    font-size: 24px;
  }
`

function Icon() {
  return (
    <Container>
      <AiOutlineUser />
    </Container>
  )
}

export default Icon
