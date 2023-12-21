import styled from 'styled-components';
import Message from '../../assets/svgComponents/Message';

const StyledUserCard = styled.div`
  max-width: 22rem;
  min-width: 18.6rem;
  height: 18.7rem;
  padding: 2rem;
  border-radius: 1.6rem;
  border: 1px solid var(--grayscale-40);
  background: var(--grayscale-10);

  @media (max-width: 767px) {
    height: 16.8rem;
    padding: 1.6rem;
  }

  img.user-profile {
    display: block;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;

    @media (max-width: 767px) {
      width: 4.8rem;
      height: 4.8rem;
    }
  }

  p.user-name {
    margin-top: 1.2rem;
    color: var(--grayscale-60);
    font-size: 2rem;
    line-height: 125%;

    @media (max-width: 767px) {
      font-size: 1.8rem;
    }
  }

  .received-questions-container {
    display: flex;
    height: 2.2rem;
    margin-top: 2.8rem;
    align-items: center;
    color: var(--grayscale-40);
    gap: 0.4rem;

    img {
      display: block;
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 0.4rem;

      @media (max-width: 767px) {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
    p {
      font-size: 1.6rem;

      @media (max-width: 767px) {
        font-size: 1.4rem;
      }
    }
    span {
      margin-right: 0;
      margin-left: auto;
      font-size: 1.6rem;

      @media (max-width: 767px) {
        font-size: 1.4rem;
      }
    }
  }
`;

export default function UserCard({ imgSrc, userName, questions }) {
  return (
    <StyledUserCard>
      <img className="user-profile" src={imgSrc} alt="User" />
      <p className="user-name">{userName}</p>
      <div className="received-questions-container">
        <Message size="18" />
        <p>받은 질문</p>
        <span>{questions}개</span>
      </div>
    </StyledUserCard>
  );
}
