import styled from 'styled-components';
import Header from './header';
import Shortcut from './shortcut';
import Category from './category';

const Container = styled.div`
  height: 150vh;
`;

const index = () => {
  return (
    <Container>
      <Header />
      <Shortcut />
      <Category />
    </Container>
  );
};

export default index;
