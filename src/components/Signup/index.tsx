import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Input, Button, SocialIcons } from '../common';

const Conatiner = styled.div`
  position: relative;
  overflow: scroll;
  margin-top: 35px;
`;

const Logo = styled.div`
  margin-left: 40px;
  font-size: 34px;
`;

const InnerConatiner = styled.div`
  flex-direction: column;
  width: 300px;
  margin: 50px auto;
  display: flex;
  gap: 28px;
  .top {
    font-size: 24px;
  }
`;

const InputContainer = styled.div``;

const PolicyContainer = styled.div`
  .checkbox_container {
    border: 4px dotted #eee;
    height: 200px;
  }
`;

const Footer = styled.div`
  text-align: center;
`;

const index = () => {
  return (
    <Conatiner>
      <Logo>AEKI</Logo>
      <InnerConatiner>
        <div className="top">회원가입</div>
        <SocialIcons title="회원가입" />
        <InputContainer>
          <div className="label">이메일</div>
          <Input />
        </InputContainer>
        <InputContainer>
          <div className="label">비밀번호</div>
          <div className="detail">8자 이상 입력해주세요</div>
          <Input />
        </InputContainer>
        <InputContainer>
          <div className="label">비밀번호 확인</div>
          <Input />
        </InputContainer>
        <InputContainer>
          <div className="label">별명</div>
          <div className="detail">
            다른 유저와 겹치지 않는 별명을 입력해주세요
          </div>
          <Input />
        </InputContainer>
        <PolicyContainer>
          <div className="head">약관 동의</div>
          <div className="checkbox_container"></div>
        </PolicyContainer>
        <Button>회원가입 완료</Button>
        <Footer>
          <p>
            이미 아이디가 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </Footer>
      </InnerConatiner>
    </Conatiner>
  );
};

export default index;
