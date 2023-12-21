import styled from 'styled-components';
import { useState } from 'react';
import Badge from '../Badge';
import More from '../../../assets/svgComponents/More';

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

export default function AnswerStatusKebab({ path, answer, onClickKebab }) {
  const [isKebabCliked, setIsKebabCliked] = useState(false);

  const handleKebabClick = () => {
    if (!isKebabCliked) {
      setIsKebabCliked(true);
      onClickKebab(true);
    } else {
      setIsKebabCliked(false);
      onClickKebab(false);
    }
  };

  return (
    <Container>
      {!answer ? <Badge badgeText="미답변" /> : <Badge badgeText="답변 완료" />}
      {path === 'answer' && (
        <Button onClick={handleKebabClick}>
          <More />
        </Button>
      )}
    </Container>
  );
}
