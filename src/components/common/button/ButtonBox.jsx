import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  display: inline-flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 8px;
  background: var(--brown-40);
  color: var(--grayscale-10);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
  white-space: nowrap;

  &:hover {
    background: var(--brown-40);
    box-shadow: 0 0 0 2px var(--brown-50);
  }

  &:active {
    background: var(--brown-50);
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }

  &:disabled:hover,
  &:disabled:active {
    background: var(--brown-40);
  }

  ${props =>
    props.$outline &&
    css`
      border: 1px solid var(--brown-40);
      background: var(--brown-10);
      color: var(--brown-40);

      &:hover {
        box-shadow: 0 0 0 2px var(--brown-50);
        background: var(--brown-10);
      }

      &:active {
        box-shadow: 0 0 0 2px var(--brown-40);
        background: var(--brown-20);
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
      padding: 0.8rem 1.2rem;
      gap: 0.4rem;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 18px;
    `}
`;

export default function ButtonBox({
  children,
  disabled,
  outline,
  small,
  onClickButton,
}) {
  return (
    <StyledButton
      disabled={disabled}
      $outline={outline}
      $small={small}
      onClick={onClickButton}
    >
      {children}
    </StyledButton>
  );
}
