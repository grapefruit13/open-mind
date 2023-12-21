import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Nums = styled.p`
  display: flex;
  width: 4rem;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--Grayscale-40, #818181);
  font-size: 2rem;
  font-weight: 400;
  ${props =>
    props.$active &&
    css`
      color: var(--Brown-40, #542f1a);
      font-weight: 700;
    `}
`;
function Pagenation({
  currentPageBlock,
  totalPageBlock,
  totalPage,
  setPage,
  page,
}) {
  const [arrayNum, setArrayNum] = useState(0);
  useEffect(() => {
    if (currentPageBlock === totalPageBlock - 1) {
      if (totalPage % 5 === 0) {
        setArrayNum(5);
      } else {
        setArrayNum(totalPage % 5);
      }
    } else {
      setArrayNum(5);
    }
  }, [currentPageBlock, totalPage, totalPageBlock]);

  return (
    <>
      {new Array(arrayNum).fill().map((_, index) => (
        <Nums
          $active={page === currentPageBlock * 5 + index + 1}
          key={`${index}-pagenums`}
          onClick={() => setPage(currentPageBlock * 5 + index + 1)}
        >
          {currentPageBlock * 5 + index + 1}
        </Nums>
      ))}
    </>
  );
}

export default Pagenation;
