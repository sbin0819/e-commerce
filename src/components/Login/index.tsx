import styled from 'styled-components';
// import { Input } from '../common';

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
  height: 600px;
  width: 300px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  button {
    margin-top: 15px;
  }
`;

const Input = styled.input`
  height: 50px;
  padding: 13px 15px 14px;
  border: 1px solid #eee;
  font-size: 16px;
  border-radius: 4px;
  :focus {
    border: 1px solid #f77;
  }
  ::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  height: 50px;
  border: none;
  background: #35c5f0;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
`;

const index = () => {
  return (
    <Conatiner>
      <Logo>AKEI</Logo>
      <FormContainer>
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" type="password" />
        <Button>로그인</Button>
      </FormContainer>
      <div></div>
      <div></div>
      <div></div>
    </Conatiner>
  );
};

export default index;
