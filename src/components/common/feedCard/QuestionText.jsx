import styled from 'styled-components';

const Div = styled.div`
  color: var(--grayscale-60);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export default function QuestionText({ text }) {
  return <Div>{text}</Div>;
}
