import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 35px 0 25px;
  align-items: center;
  border-bottom: 1px solid #eee;
  gap: 10px;
  .info {
    font-size: 14px;
    color: #888;
  }
  margin-bottom: 8px;
`;

const SocialNetworkIcons = styled.div`
  display: flex;
  font-size: 45px;
  gap: 15px;
`;

interface IProps {
  title: '로그인/회원가입' | '로그인' | '회원가입';
}
const SocialIcons: React.FC<IProps> = ({ title }) => {
  return (
    <Container>
      <p className="info">SNS 계정으로 간편 {title}</p>
      <SocialNetworkIcons>
        <FcGoogle />
        <AiFillFacebook />
        <AiFillGithub />
      </SocialNetworkIcons>
    </Container>
  );
};

export default SocialIcons;
