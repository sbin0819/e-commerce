import styled from 'styled-components'

const Container = styled.div`
  margin-top: 40px;
  .header {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
  }
  .item_wrapper {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .item_card {
    flex: 1 0 23%;
    height: 380px;
    background: #ececec;
    @media only screen and (max-width: 800px) {
      flex: 1 0 33%;
    }
    @media only screen and (max-width: 450px) {
      flex: 1 0 100%;
    }
  }
`

const index = () => {
  return (
    <Container>
      <div className="header">
        <div>오늘의 딜</div>
        <div>더보기</div>
      </div>
      <div className="item_wrapper">
        {Array(4)
          .fill(1)
          .map((_, idx) => (
            <div className="item_card" key={idx}>
              hi
            </div>
          ))}
      </div>
    </Container>
  )
}

export default index
