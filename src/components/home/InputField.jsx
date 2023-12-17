import styled from 'styled-components';
import Person from '../../assets/svgComponents/Person';

const Div = styled.div`
  display: flex;
  width: 33.6rem;
  padding: 1.2rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  border-radius: 8px;
  border: 1px solid var(--grayscale-40);
  background: var(--grayscale-10);
  &:focus-within {
    border: 1px solid var(--brown-40);
  }
`;

const Input = styled.input`
  flex: 1 0 0;
  border: none;
  outline: none;
  ${({ theme }) => theme.body3Regular}
  &::placeholder {
    color: var(--grayscale-40);
  }
`;

export default function InputField({ onChangeUserNameInput }) {
  const hanleChange = e => {
    onChangeUserNameInput(e.target.value);
  };

  return (
    <Div>
      <Person />
      <Input
        type="text"
        placeholder="이름을 입력해주세요"
        onChange={hanleChange}
      />
    </Div>
  );
}
