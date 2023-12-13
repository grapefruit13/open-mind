import styled from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  // layout
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20.8rem;
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
`;

function ButtonFloating({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default ButtonFloating;
