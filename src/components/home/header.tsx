import React from 'react';

import styled from 'styled-components';

const HomeHeader = styled.div`
  margin-top: 20px;
  display: flex;
  height: 400px;
  .main {
    flex: 2;
    background: gold;
    margin: 0 15px;
  }
  .event {
    flex: 1;
    background: pink;
    margin: 0 15px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const header = () => {
  return (
    <HomeHeader>
      <div className="main">a</div>
      <div className="event">b</div>
    </HomeHeader>
  );
};

export default header;
