import TopBanner from './TopBanner'
import TodayDeal from './TodayDeal'
import BestItems from './BestItems'

import styled from 'styled-components'

const Container = styled.div``

const index = () => {
  return (
    <Container>
      <TopBanner />
      <TodayDeal />
      <BestItems />
      <div style={{ height: '80px' }} />
    </Container>
  )
}

export default index
