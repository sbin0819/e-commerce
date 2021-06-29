import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: 0.3s linear;
`;

const Side = styled.div`
  background: #fff;
  border-left: 1px solid #eee;
  width: 50%;
  height: 100%;
  z-index: 2;
`;
const Rest = styled.div`
  width: 50%;
  height: 100%;
  z-index: 2;
`;

interface IProps {
  onClose?: any;
}
const Sidebar: React.FC<IProps> = ({ onClose }) => {
  return (
    <Container>
      <Side>side</Side>
      <Rest
        onClick={() => {
          onClose();
        }}
      />
    </Container>
  );
};

export default Sidebar;
