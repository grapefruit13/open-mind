import styled from 'styled-components';

const Div = styled.div`
  height: ${props => props.$height};
  padding: 1.6rem;
  margin-bottom: ${props => props.$marginbottom};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--grayscale-20);

  &:focus-within {
    box-shadow: 0 0 0 1px var(--brown-40);
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
  onChangeInput,
}) {
  return (
    <Div $height={height} $marginbottom={marginbottom}>
      <Textarea
        type="text"
        placeholder={`${type}을 입력해주세요`}
        onChange={e => onChangeInput(e.target.value)}
        defaultValue={content}
      />
    </Div>
  );
}
