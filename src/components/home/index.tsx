import styled from 'styled-components'
import Main from './main'
import Shortcut from './shortcut'
import Category from './category'

const Container = styled.div`
  height: 150vh;
`

const index = () => {
  return (
    <Container>
      <Main />
      <Shortcut />
      <Category />
    </Container>
  )
}

export default index
