import styled from 'styled-components'

const Container = styled.div`
  padding-top: 25px;
  flex: 1;
  min-width: 200px;
  margin: 40px 20px;
  .sticky_container {
    position: sticky;
    top: 100px;

    .buttons {
      background: gray;
      height: 80px;
    }
    .box-2 {
      margin-top: 50px;
      height: 250px;
      background: grey;
    }
  }
`

function Profile() {
  return (
    <Container>
      <div className="sticky_container">
        <div className="buttons">
          <div></div>
          <div></div>
        </div>
        <div className="box-2">
          <div></div>
          <div></div>
        </div>
      </div>
    </Container>
  )
}

export default Profile
