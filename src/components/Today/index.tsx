import useWindowSize from '../../hooks/useWindowSize'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import MainContent from './MainContent'
import SideSticky from './SideSticky'

const Container = styled.div``

const ContentContainer = styled.div`
  display: flex;
  height: auto;
  min-height: 800px;
  flex-wrap: wrap;
`

function TodayComponent() {
  const { width }: { width: any } = useWindowSize()
  const { slug }: { slug: string } = useParams()
  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`).then((res) =>
      res.json()
    )
  )
  console.log(data)
  // top profile footer Nav
  return (
    <Container>
      <ContentContainer>
        <MainContent />
        <SideSticky />
      </ContentContainer>
    </Container>
  )
}

export default TodayComponent
