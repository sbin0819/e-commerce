import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Input = styled.input`
  height: 50px;
  padding: 13px 15px 14px;
  border: 1px solid #eee;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  :focus {
    border: 1px solid #f77;
  }
  ::placeholder {
    color: #999;
  }
`;

interface IProps {
  placeholder?: string;
  type?: string;
}
const index: React.FC<IProps> = ({ type = 'text', placeholder }) => {
  return (
    <Container>
      <Input type={type} placeholder={placeholder} />
    </Container>
  );
};

export default index;
