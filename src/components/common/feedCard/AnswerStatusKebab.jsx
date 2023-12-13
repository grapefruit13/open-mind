import styled from 'styled-components';
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
      <div>Badge</div>
      <More />
    </Container>
  );
}
