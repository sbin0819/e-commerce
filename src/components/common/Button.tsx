import styled from 'styled-components';

const Container = styled.button`
  height: 50px;
  border: none;
  background: #35c5f0;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
`;

interface IProps {
  children: any;
}
const Button: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
