import styled from 'styled-components';

const Conatiner = styled.div`
  display: flex;
  height: 100vh;
`;
const Left = styled.div`
  flex: 1;
  overflow: scroll;
`;
const Right = styled.div`
  flex: 1;
  overflow: scroll;
`;

const Div = styled.div`
  background: #eee;
  border: 1px solid blue;
  height: 100%;
`;
const index = () => {
  return (
    <Conatiner>
      <Left>
        <Div>image</Div>
      </Left>
      <Right>
        <div>Login</div>
      </Right>
    </Conatiner>
  );
};

export default index;
