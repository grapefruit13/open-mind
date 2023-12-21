import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  padding: 1.2rem 2.4rem;
  gap: 0.8rem;
  flex-shrink: 0;
  border-radius: 200px;
  background: var(--brown-40);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--grayscale-10);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;

  ${props =>
    props.$large &&
    css`
      width: 20.8rem;
      padding: 0;
    `}

  ${props =>
    props.$small &&
    css`
      width: 10rem;
      height: 3.5rem;
      font-size: 1.5rem;
      padding: 0;
    `}

    ${props =>
    props.$xsmall &&
    css`
      width: 7rem;
      height: 2.5rem;
      font-size: 1rem;
      padding: 0;
    `}
    
    ${props =>
    props.$feed &&
    css`
      width: 100%;
      font-size: 2rem;
      padding: 0;
    `}
`;

export default function ButtonFloating({
  children,
  large,
  small,
  xsmall,
  feed,
  onClickButton,
}) {
  return (
    <StyledButton
      $large={large}
      $small={small}
      $xsmall={xsmall}
      $feed={feed}
      onClick={onClickButton}
    >
      {children}
    </StyledButton>
  );
}
