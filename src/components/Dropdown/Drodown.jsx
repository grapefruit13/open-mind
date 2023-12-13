import { useState } from 'react';
import styled from 'styled-components';
import DropdownSelected from './DropDownSelected';
import DropdownElement from './DropdownElement ';

const DropdownMenu = styled.section`
  width: 7.9rem;
  height: 6.8rem;
  padding: 1rem;
  bottom: -7.1rem;
  left: 0;
  border: 1px solid var(--grayscale-30);
  border-radius: 0.8rem;
  background: var(--grayscale-10, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  position: absolute;
  z-index: 1;
`;

const Div = styled.div`
  width: fit-content;
`;

const Position = styled.div`
  position: relative;
`;

function Dropdown() {
  const [view, setView] = useState(false);
  const [dropDownState, setDropDownState] = useState('이름순');

  const handleViewSelect = () => {
    setView(!view);
  };

  const handleBlurContainer = () => {
    setView(false);
  };

  const clickRecently = () => {
    setDropDownState('최신순');
    setView(false);
  };

  const clickAlphabetical = () => {
    setDropDownState('이름순');
    setView(false);
  };

  return (
    <Position>
      <Div
        onClick={handleViewSelect}
        onBlur={handleBlurContainer}
        onKeyDown={clickAlphabetical}
        role="presentation"
      >
        <DropdownSelected
          $selectedOrNot={view}
          dropDownState={dropDownState}
          isFolded={view}
        />
      </Div>
      {view && (
        <DropdownMenu>
          <span
            onClick={clickAlphabetical}
            onKeyDown={clickAlphabetical}
            role="presentation"
          >
            <DropdownElement dropDownState={dropDownState} element="이름순" />
          </span>
          <span
            onClick={clickRecently}
            onKeyDown={clickAlphabetical}
            role="presentation"
          >
            <DropdownElement dropDownState={dropDownState} element="최신순" />
          </span>
        </DropdownMenu>
      )}
    </Position>
  );
}

export default Dropdown;
