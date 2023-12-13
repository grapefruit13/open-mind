import styled from 'styled-components';

const StyledDatesAgo = styled.div`
  color: var(--grayscale-40);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
`;

export default function DatesAgo({ text }) {
  return <StyledDatesAgo>{text}</StyledDatesAgo>;
}
