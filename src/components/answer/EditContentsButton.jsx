import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ColoredEditImg from '../../assets/svgComponents/EditSvg';

const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 10.3rem;
  height: 3.8rem;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
  border: 1px solid var(--grayscale-30, #cfcfcf);
  background: var(--grayscale-10, #fff);
  font-size: 1.4rem;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 1.4rem;
  margin: 0rem;
  color: var(--grayscale-50, #515151);

  ${props =>
    props.$isHovered &&
    css`
      color: ${props.color};
      background: var(--grayscale-20, #f9f9f9);
    `}

  ${props =>
    props.$isActive &&
    css`
      color: ${props.color};
    `}
`;

const ButtonLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export default function EditContentsButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [colors, setColors] = useState('#515151');

  const handleButtonActive = () => {
    setButtonActive(!buttonActive);
  };

  useEffect(() => {
    if (buttonActive) {
      setColors('#1877f2');
    } else if (isHovered) {
      setColors('#000');
    } else {
      setColors('#515151');
    }
  }, [buttonActive, isHovered]);

  return (
    <EditButton
      $isActive={buttonActive}
      $isHovered={isHovered}
      onClick={handleButtonActive}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      color={colors}
    >
      <ButtonLabel>
        <ColoredEditImg color={colors} />
        <p>수정하기</p>
      </ButtonLabel>
    </EditButton>
  );
}
