import { useState } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';

import Sidebar from './Sidebar';

const Container = styled.div``;

const Icon = styled.div`
  font-size: 1.6rem;
`;

const StyledLink = styled(Link)`
  background: gold;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
  .logo {
    font-size: 24px;
    margin: auto auto;
  }
  .nav_right {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
  }
`;

const Navigator = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0 5px;
  overflow-x: scroll;
  gap: 10px;
`;

const navigatorData = [
  { label: '홈', url: '/' },
  { label: '팔로잉', url: '/' },
  { label: '집들이', url: '/' },
  { label: '노하우', url: '/' },
  { label: '전문가집들이', url: '/' },
  { label: '셀프가이드', url: '/' },
  { label: '질문과 답변', url: '/' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && <Sidebar onClose={onClose} />}
      <Container>
        <Top>
          <Icon onClick={onOpen}>
            <FiMenu />
          </Icon>
          <div className="logo">
            <Link to="/">AKEI</Link>
          </div>
          <div className="nav_right">
            <Icon>
              <AiOutlineSearch />
            </Icon>
            <Icon>
              <AiOutlineShoppingCart />
            </Icon>
            <div>
              <Link to="/login">로그인</Link>
            </div>
            <div>
              <Link to="/signup">회원가입</Link>
            </div>
          </div>
        </Top>
        <Navigator>
          {navigatorData.map((data, i) => (
            <div key={i}>
              <Link to={`${data.url}`}>{data.label}</Link>
            </div>
          ))}
        </Navigator>
      </Container>
    </>
  );
};

export default Header;
