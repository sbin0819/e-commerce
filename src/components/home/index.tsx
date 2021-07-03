import styled from 'styled-components';
import Header from './header';
import Shortcut from './shortcut';

const Container = styled.div``;

const index = () => {
  return (
    <Container>
      <Header />
      <Shortcut />
    </Container>
  );
};

export default index;
