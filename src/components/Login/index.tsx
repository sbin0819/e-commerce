import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Input, Button } from '../common';

import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';

const Conatiner = styled.div`
  position: relative;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const Logo = styled.div`
  font-size: 36px;
`;

const FormContainer = styled.form`
  width: 300px;
  padding: 35px 0 25px;
  display: flex;
  flex-direction: column;
  button {
    margin-top: 15px;
  }
`;

const Config = styled.div`
  display: flex;
  gap: 15px;
`;

const SnsLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 35px 0 25px;
  align-items: center;
  border-bottom: 1px solid #eee;
  gap: 10px;
  .info {
    font-size: 14px;
    color: #888;
  }
  .icons {
    margin-top: 8px;
    display: flex;
    font-size: 45px;
    gap: 15px;
  }
`;

const NonMember = styled.div`
  margin-top: 15px;
  color: #888;
`;

const index = () => {
  return (
    <Conatiner>
      <Logo>
        <Link to="/">AKEI</Link>
      </Logo>
      <FormContainer>
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" type="password" />
        <Button>로그인</Button>
      </FormContainer>
      <Config>
        <Link to="/">비밀번호 재설정</Link>
        <Link to="/signup">회원가입</Link>
      </Config>
      <SnsLogin>
        <p className="info">SNS 계정으로 간편 로그인/회원가입</p>
        <div className="icons">
          <FcGoogle />
          <AiFillFacebook />
          <AiFillGithub />
        </div>
      </SnsLogin>
      <NonMember>비회원 주문 조회하기</NonMember>
    </Conatiner>
  );
};

export default index;
