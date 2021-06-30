import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Input, Button, SocialIcons } from '../common';

const Conatiner = styled.div`
  position: relative;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
  }
`;

const Logo = styled.div`
  font-size: 36px;
`;

const FormContainer = styled.form`
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

const NonMember = styled.div`
  margin-top: 15px;
  color: #888;
`;

const index = () => {
  return (
    <Conatiner>
      <Logo>
        <Link to="/">AEKI</Link>
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
      <SocialIcons title="로그인/회원가입" />
      <NonMember>비회원 주문 조회하기</NonMember>
    </Conatiner>
  );
};

export default index;
