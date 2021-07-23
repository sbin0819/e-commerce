import styled from 'styled-components'

import { FcGoogle } from 'react-icons/fc'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'

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
    @media (max-width: 489px) {
      position: relative;
      top: 0;
    }
  }
`

const SocialNetworkIcons = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  font-size: 45px;
  gap: 15px;
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
        <SocialNetworkIcons>
          <RiKakaoTalkFill
            style={{ background: 'gold', borderRadius: '6px' }}
          />
          <FcGoogle />
          <AiFillFacebook style={{ color: '#1877F2' }} />
          <AiFillGithub />
        </SocialNetworkIcons>
      </div>
    </Container>
  )
}

export default Profile
