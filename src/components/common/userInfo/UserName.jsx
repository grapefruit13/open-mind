import styled from 'styled-components';

export default function UserName({ userName, size }) {
  const Div = styled.div`
    color: var(--grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: ${size / 10}rem;
    font-weight: 400;
    line-height: 2.4rem;
  `;
  return <Div>{userName}</Div>;
}
