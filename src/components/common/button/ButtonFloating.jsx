import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  // layout
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  padding: 1.2rem 2.4rem;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 200px;
  background: var(--brown-40, #542f1a);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  // font
  color: var(--grayscale-10, #fff);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;

  // width, heigth, font-size, padding
  // large -> 208 / 54 / 20 / 12 24
  // default ->  x / 54 / 20 / 12 24
  // small -> 100 / 35 / 15 / 0 0
  // xsmall -> 70 / 25 / 10 / 0 0

  ${props =>
    props.large &&
    css`
      width: 20.8rem;
      padding: 0;
    `}

  ${props =>
    props.small &&
    css`
      width: 10rem;
      height: 3.5rem;
      font-size: 1.5rem;
      padding: 0;
    `}

    ${props =>
    props.xsmall &&
    css`
      width: 7rem;
      height: 2.5rem;
      font-size: 1rem;
      padding: 0;
    `}
`;

function ButtonFloating({ children, large, small, xsmall }) {
  return (
    <StyledButton large={large} small={small} xsmall={xsmall}>
      {children}
    </StyledButton>
  );
}

export default ButtonFloating;
