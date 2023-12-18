import { useContext, useState } from 'react';
import styled from 'styled-components';
import { DropdownContext } from '../../utils/context';

const Div = styled.div`
  display: flex;
  height: ${props => props.height};
  width: 100%;
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
  content,
  // onChangeInput,
}) {
  const { setInputTextarea } = useContext(DropdownContext);
  const [inputState, setInputState] = useState('');

  const handleInputChange = e => {
    setInputState(e.target.value);
    setInputTextarea(e.target.value);
    if (!e.target.value) {
      setInputState(prev => ({ ...prev, hasValue: false }));
    }
  };

  // useEffect(() => {
  //   setInputTextarea(prev => ({ ...prev, ...inputState }));
  // }, [inputState, setInputTextarea]);

  return (
    <Div height={height} marginbottom={marginbottom}>
      <Textarea
        type="text"
        placeholder={`${type}을 입력해주세요`}
        onChange={handleInputChange}
        defaultValue={content}
      />
    </Div>
  );
}
