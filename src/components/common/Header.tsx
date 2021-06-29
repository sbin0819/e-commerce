import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Logo = styled.div`
  height: 100px;
`;

const Navigator = styled.div`
  display: flex;
  background: gold;
  align-items: center;
  height: 50px;
`;

const Header = () => {
  return (
    <Container>
      <Logo>logo</Logo>
      <Navigator>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
      </Navigator>
    </Container>
  );
};

export default Header;
