import styled from 'styled-components';

const StyledBadge = styled.div`
  height: 2.6rem;
  justify-content: center;
  border-radius: 0.8rem;
  background: var(--grayscale-10);

  ${props =>
    props.badgeText === '답변 완료' &&
    ` 
      width:7.6rem;
      color: var( --brown-40);
      border: 1px solid var( --brown-40);
    `}

  ${props =>
    props.badgeText === '미답변' &&
    `
      width:6.1rem;
      color: var(--grayscale-40);
      border: 1px solid var(--grayscale-40);
    `}

    p {
    display: flex;
    height:100%;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 500;
`;

function ModalBadge({ badgeText }) {
  return (
    <StyledBadge badgeText={badgeText}>
      <p>{badgeText}</p>
    </StyledBadge>
  );
}

export default ModalBadge;
