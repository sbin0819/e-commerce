import styled from 'styled-components'
import Main from './main'
import Shortcut from './shortcut'
import Story from './Story'
import Category from './category'
import Pictures from './pictures'

const Container = styled.div`
  height: 150vh;
`

const index = () => {
  return (
    <Container>
      <Main />
      <Shortcut />
      <Story />
      <Category />
      <Pictures />
    </Container>
  )
}

export default index
