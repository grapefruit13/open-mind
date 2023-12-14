// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import More from '../../../assets/svgComponents/More';
import Badge from '../Badge';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  width: 2.6rem;
  height: auto;
  border: 0;
  background-color: inherit;
  cursor: pointer;
`;

// export default function AnswerStatusKebab({ page, onClickInput }) {
export default function AnswerStatusKebab({ page }) {
  // const [isKebabCliked, setIsKebabCliked] = useState(false);

  // const handleKebabClick = () => {
  //   setIsKebabCliked(true);
  // };

  // useEffect(() => {
  //   onClickInput(isKebabCliked);
  // }, [isKebabCliked]);

  return (
    <Container>
      <Badge badgeText="답변 완료" />
      {page === 'answer' && (
        // <Button onClick={handleKebabClick}>
        <Button>
          <More />
        </Button>
      )}
    </Container>
  );
}
