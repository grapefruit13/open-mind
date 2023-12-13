import styled from 'styled-components';
import Message from '../../assets/svgComponents/Message';

const StyledUserCard = styled.div`
  width: 22rem;
  height: 18.7rem;
  padding: 2rem;
  border-radius: 1.6rem;
  border: 1px solid var(--grayscale-40);
  background: var(--grayscale-10);

  img.user-profile {
    display: block;
    width: 6rem;
    height: 6rem;
  }

  p.user-name {
    margin-top: 1.2rem;
    color: var(--grayscale-60);
    font-family: Actor;
    font-size: 2rem;
    line-height: 125%;
  }

  .received-questions-container {
    display: flex;
    height: 2.2rem;
    margin-top: 2.8rem;==
    align-items: center;
    color: var(--grayscale-40);

    img {
      display: block;
      width: 1.8rem; /* Adjust the width as needed */
      height: 1.8rem; /* Adjust the height as needed */
      margin-right: 0.4rem;
    }
    p {
      font-size: 1.6rem;
    }
    span {
      margin-right: 0;
      margin-left: auto;
      font-size: 1.4rem;
    }
  }
`;

function UserCard({ imgSrc, userName, questions }) {
  return (
    <StyledUserCard>
      <img className="user-profile" src={imgSrc} alt="User" />
      <p className="user-name">{userName}아초는 고양이</p>
      <div className="received-questions-container">
        <Message />
        <p>받은 질문</p>
        <span>{questions}개</span>
      </div>
    </StyledUserCard>
  );
}

export default UserCard;
