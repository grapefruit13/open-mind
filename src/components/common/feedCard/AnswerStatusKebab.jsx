import styled from 'styled-components';
import Badge from '../Badge';
import More from '../../../assets/svgComponents/More';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default function AnswerStatusKebab() {
  return (
    <Container>
      <Badge badgeText="답변 완료" />
      <More />
    </Container>
  );
}
