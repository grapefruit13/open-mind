import styled from 'styled-components';

const Rejected = styled.div`
  color: var(--red-50);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;
export default function AnswerRejected() {
  return <Rejected>답변 거절</Rejected>;
}
