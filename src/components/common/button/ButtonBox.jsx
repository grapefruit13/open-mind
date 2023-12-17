import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  // layout
  display: inline-flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 8px;
  background: var(--brown-40, #542f1a);
  // font
  color: var(--grayscale-10, #fff);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;

  &:hover {
    background: var(--brown-40, #542f1a);
    box-shadow: 0 0 0 2px var(--brown-50, #341909);
  }

  &:active {
    background: var(--brown-50, #341909);
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }

  &:disabled:hover,
  &:disabled:active {
    background: var(--brown-40, #542f1a);
  }

  ${props =>
    props.$outline &&
    css`
      border: 1px solid var(--brown-40, #542f1a);
      background: var(--brown-10, #f5f1ee);
      color: var(--brown-40, #542f1a);

      &:hover {
        box-shadow: 0 0 0 2px var(--brown-50, #341909);
        background: var(--brown-10, #f5f1ee);
      }

      &:active {
        box-shadow: 0 0 0 2px var(--brown-40, #542f1a);
        background: var(--brown-20, #e4d5c9);
      }

      &:disabled:hover,
      &:disabled:active {
        box-shadow: none;
        background: var(--brown-10, #f5f1ee);
      }
    `}

  ${props =>
    props.$small &&
    css`
      padding: 8px 12px;
      gap: 4px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
    `}
`;

function ButtonBox({
  children,
  disabled,
  outline,
  small,
  onClickQuestionButton,
}) {
  return (
    <StyledButton
      disabled={disabled}
      $outline={outline}
      $small={small}
      onClick={onClickQuestionButton}
    >
      {children}
    </StyledButton>
  );
}

export default ButtonBox;
