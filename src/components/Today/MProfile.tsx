import Icon from '../common/Icon'
import Button from '../common/Button'
import styled from 'styled-components'

const Container = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  .profile_wrapper {
    display: flex;
    align-items: center;
    .icon {
    }
    .info {
      margin-left: 8px;
      h4 {
        font-weight: bold;
        margin-bottom: 3px;
      }
      h5 {
        font-size: 11px;
        color: #757575;
      }
    }
  }

  .btn_container {
    button {
      width: 74px;
      height: 28px;
      font-size: 14px;
      font-weight: 400;
    }
  }
`

function Profile(props) {
  return (
    <>
      <Container>
        <div className="profile_wrapper">
          <div className="icon">
            <Icon />
          </div>
          <div className="info">
            <h4>Yoo's Bistro</h4>
            <h5>3일전</h5>
          </div>
        </div>
        <div className="btn_container">
          <Button>팔로우</Button>
        </div>
      </Container>
      <div style={{ height: '12px', background: '#F7F8FA' }}></div>
    </>
  )
}

export default Profile
