import { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
<<<<<<< HEAD
  height: ${props => props.height};
=======
  width: 100%;
  height: 100%;
>>>>>>> 5e745e2 (InputText,Modal,Homepage변경사항)
  padding: 1.6rem;
  margin-bottom: ${props => props.marginbottom};
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

export default function InputTextarea({
  height,
  marginbottom,
  type,
  onChangeInput,
}) {
  const [inputState, setInputState] = useState({
    value: '',
    hasValue: false,
  });

  const handleInputChange = e => {
    setInputState(prev => ({ ...prev, value: e.target.value, hasValue: true }));
    onChangeInput({ value: e.target.value, hasValue: true });
  };

  const handleInputKeyDown = e => {
    if (e.key === 'Backspace' && !e.target.value) {
      setInputState(prev => ({ ...prev, hasValue: false }));
      onChangeInput({ hasValue: false });
    }
  };

  return (
    <Div height={height} marginbottom={marginbottom}>
      <Textarea
        type="text"
        placeholder={`${type}을 입력해주세요`}
        value={inputState.value}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </Div>
  );
}
