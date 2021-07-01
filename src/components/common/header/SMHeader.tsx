import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';

import Sidebar from '../Sidebar';

import { comunityList } from '../../../libs/menus';

import styled from 'styled-components';

const Container = styled.div``;

const Icon = styled.div`
  font-size: 1.6rem;
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

const SMHeader = () => {
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
            <Link to="/">AEKI</Link>
          </div>
          <div className="nav_right">
            <Icon>
              <AiOutlineSearch />
            </Icon>
            <Icon>
              <AiOutlineShoppingCart />
            </Icon>
          </div>
        </Top>
        <Navigator>
          {comunityList.map((data, i) => (
            <div key={i}>
              <Link to={`${data.url}`}>{data.label}</Link>
            </div>
          ))}
        </Navigator>
      </Container>
    </>
  );
};

export default SMHeader;
