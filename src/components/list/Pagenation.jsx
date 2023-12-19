import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

let i = 0;

const Nums = styled.p`
  display: flex;
  width: 4rem;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--Grayscale-40, #818181);

  ${props =>
    props.$active &&
    css`
      color: var(--Brown-40, #542f1a);
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
      setArrayNum(totalPage % 5);
    } else {
      setArrayNum(5);
    }
  }, [currentPageBlock, page, totalPage]);

  return (
    <>
      {new Array(arrayNum).fill().map((_, index) => (
        <Nums
          $active={page === currentPageBlock * 5 + index + 1}
          key={i++}
          onClick={() => setPage(currentPageBlock * 5 + index + 1)}
        >
          {currentPageBlock * 5 + index + 1}
        </Nums>
      ))}
    </>
  );
}

export default Pagenation;
