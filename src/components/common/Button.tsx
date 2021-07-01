import styled from 'styled-components';

const Container = styled.button`
  height: 50px;
  border: none;
  background: #35c5f0;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
`;

interface IProps {
  children: any;
  onClick?: any;
}
const Button: React.FC<IProps> = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
