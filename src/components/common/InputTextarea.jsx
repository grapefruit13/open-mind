import styled from 'styled-components';
import { useState } from 'react';

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.6rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;

  border-radius: 8px;
  background: var(--grayscale-20);
  &:focus-within {
    border: 1px solid var(--brown-40);
  }
`;

const Textarea = styled.textarea`
  flex: 1 0 0;
  align-self: stretch;
  border: none;
  outline: none;
  resize: none;
  background-color: inherit;
  ${({ theme }) => theme.body3Regular}

  &::placeholder {
    color: var(--grayscale-40);
  }
`;

function InputTextarea() {
  const [value, setValue] = useState('');
  const hanleChange = e => {
    setValue(() => e.target.value);
  };

  return (
    <Div>
      <Textarea
        type="text"
        placeholder="이름을 입력해주세요"
        value={value}
        onChange={hanleChange}
      />
    </Div>
  );
}

export default InputTextarea;
