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
    gap: 1rem;
    border: 2px solid var(--brown-50, #341909);
    background: var(--brown-40, #542f1a);
    /* box-shadow: 0 0 0 2px var(--brown-50, #341909); */ // border-box 효과 주고싶을 때
  }

  &:active {
    gap: 1rem;
    background: var(--brown-50, #341909);
  }

  // inactive 상태 - 협의 point: 배경색 'figma에 적혀있는 절댓값' vs %
  ${props =>
    props.disabled &&
    css`
      background: var(--brown-30, #c7bbb5);
    `}

  &:disabled:hover,
  &:disabled:active {
    gap: 0.8rem;
    border: none;
    background: var(--brown-30, #c7bbb5);
  }
`;

function ButtonBox({ children, isDisabled }) {
  return <StyledButton disabled={isDisabled}>{children}</StyledButton>;
}

export default ButtonBox;
