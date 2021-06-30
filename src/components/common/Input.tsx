import styled from 'styled-components';

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
  label?: string;
  placeholder?: string;
  type?: string;
}
const index: React.FC<IProps> = ({ label, type = 'text', placeholder }) => {
  return (
    <div>
      <label>
        {label}
        <Input type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default index;
