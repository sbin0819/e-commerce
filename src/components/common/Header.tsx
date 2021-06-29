import { useState } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';

import Sidebar from './Sidebar';

const Container = styled.div``;

const Icon = styled.div`
  font-size: 1.6rem;
`;

const Top = styled.div`
  background: ${colors.theme.GreenYellow};
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
  height: 50px;
  align-items: center;
`;

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
          <Link to="/">home</Link>
          <Link to="/login">login</Link>
          <Link to="/signup">signup</Link>
        </Navigator>
      </Container>
    </>
  );
};

export default Header;
