import styled from 'styled-components';

const selectedStyle = `
color: var(--blue-50, #1877F2);
`;

const StyledElement = styled.p`
  color: var(--grayscale-50, #515151);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  ${({ dropDownState, element }) =>
    dropDownState === element ? selectedStyle : ''}
`;

function DropdownElement({ dropDownState, element }) {
  return (
    <StyledElement dropDownState={dropDownState} element={element}>
      {element}
    </StyledElement>
  );
}

export default DropdownElement;
