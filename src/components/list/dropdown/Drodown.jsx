import { useEffect, useState } from 'react';
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
  cursor: ${({ $isClicked }) => ($isClicked ? 'pointer' : 'default')};
`;

function Dropdown({ setSelectedMenuState }) {
  const [view, setView] = useState(false);
  const [dropDownState, setDropDownState] = useState('이름순');
  const [isClicked, setIsClicked] = useState(false);
  const handleMouseEnter = () => {
    setIsClicked(true);
  };

  const handleMouseLeave = () => {
    setIsClicked(false);
  };

  const handleViewSelect = () => {
    setView(!view);
  };

  const handleBlurContainer = () => {
    setView(false);
  };

  const sortBy = text => {
    return () => {
      setDropDownState(text);
      setView(false);
    };
  };

  useEffect(() => {
    if (dropDownState === '이름순') {
      setSelectedMenuState('name');
    } else if (dropDownState === '최신순') {
      setSelectedMenuState('time');
    }
  }, [dropDownState, setSelectedMenuState]);

  return (
    <Position
      $isClicked={isClicked}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Div
        onClick={handleViewSelect}
        onBlur={handleBlurContainer}
        onKeyDown={handleViewSelect}
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
            onClick={sortBy('이름순')}
            onKeyDown={sortBy('이름순')}
            role="presentation"
          >
            <DropdownElement $dropDownState={dropDownState} $element="이름순" />
          </span>
          <span
            onClick={sortBy('최신순')}
            onKeyDown={sortBy('최신순')}
            role="presentation"
          >
            <DropdownElement $dropDownState={dropDownState} $element="최신순" />
          </span>
        </DropdownMenu>
      )}
    </Position>
  );
}

export default Dropdown;
