import styled from 'styled-components';

const selectedStyle = `
color: var(--blue-50);
`;

const StyledElement = styled.p`
  color: var(--grayscale-50);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.4rem;
  font-weight: 700;

  ${({ $dropDownState, $element }) =>
    $dropDownState === $element ? selectedStyle : ''}
`;

export default function DropdownElement({ $dropDownState, $element }) {
  return (
    <StyledElement $dropDownState={$dropDownState} $element={$element}>
      {$element}
    </StyledElement>
  );
}
