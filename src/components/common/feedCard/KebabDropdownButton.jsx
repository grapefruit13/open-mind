import { useContext } from 'react';
import styled from 'styled-components';
import FeedCardContext from '../../../utils/contexts/FeedCardProvider';

const Button = styled.button`
  color: var(--Grayscale-50);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  outline: none;
  background-color: inherit;
  cursor: pointer;
  background: var(--Grayscale-10);
  border: none;

  &:hover {
    background: var(--Grayscale-20);
    color: var(--Grayscale-60);
  }
`;

export default function KebabDropdownButton({ children }) {
  const { setClickedDropdown } = useContext(FeedCardContext);

  const handleClick = () => {
    if (children === '수정하기') {
      setClickedDropdown({ edited: true });
    } else if (children === '삭제하기') {
      setClickedDropdown({ deleted: true });
    } else if (children === '거절하기') {
      setClickedDropdown({ rejected: true });
    }
  };

  return <Button onClick={handleClick}>{children}</Button>;
}
