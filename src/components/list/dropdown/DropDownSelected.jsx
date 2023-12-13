import styled from 'styled-components';
import ColoredArrowImg from '../../../assets/svgComponents/ArrowUpDownSvg';

const notSelected = `
border-radius: 0.8rem;
border: 0.1rem solid var(--grayscale-40, #818181);
background: var(--grayscale-10, #FFF);
color: var(--grayscale-40, #818181);
`;

const selected = `
border-radius: 0.8rem;
border: 0.1rem solid var(--grayscale-60, #000);
background: var(--grayscale-10, #fff);
color: var(--grayscale-60, #000);
`;

const Selected = styled.div`
  width: 7.9rem;
  height: 3.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-left: 1.2rem;
  position: relative;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  ${({ $selectedOrNot }) => ($selectedOrNot ? selected : notSelected)};
`;

function DropdownSelected({ $selectedOrNot, dropDownState, isFolded }) {
  return (
    <Selected $selectedOrNot={$selectedOrNot}>
      <span>{dropDownState}</span>
      <span>
        <ColoredArrowImg isFolded={isFolded} />
      </span>
    </Selected>
  );
}

export default DropdownSelected;
