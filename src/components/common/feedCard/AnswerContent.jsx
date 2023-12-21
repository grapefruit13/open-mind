import styled from 'styled-components';

const Content = styled.div`
  color: var(--grayscale-60);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
`;
export default function AnswerContent({ content }) {
  return <Content>{content}</Content>;
}
