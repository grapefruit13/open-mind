import styled from 'styled-components';
import Message from '../../assets/svgComponents/Message';
import CloseSvg from '../../assets/svgComponents/CloseSvg';
import UserProfileImg from '../common/userInfo/UserProfileImg';
import InputTextarea from '../common/InputTextarea';
import ButtonBox from '../common/button/ButtonBox';

const StyledModal = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledPopup = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 61.2rem;
  height: 45.4rem;
  margin: auto;
  padding: 4rem 4rem 7rem;
  border-radius: 2.4rem;
  background: var(--grayscale-10, #fff);
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);

  @media (max-width: 375px) {
    width: 32.7rem;
    height: 56.8rem;
    padding: 2.4rem;
  }
`;

const CloseBtn = styled.button`
  width: 2.8rem;
  height: 2.8rem;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 0.8rem;
    color: var(--grayscale-60, #000);
    font-size: 2.4rem;
    line-height: 125%;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const RecipientContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  margin-top: 4rem;

  span.sender {
    color: var(--grayscale-60, #000);
    font-size: 1.8rem;
  }

  span.userName {
    color: var(--grayscale-60, #000);
    font-size: 1.6rem;
  }
`;

const InputTextareaWrapper = styled.div`
  margin: 1.2rem 0 0.8rem;
  height: 100%;

  @media (max-width: 375px) {
    margin: 1.5rem 0 0.8rem;
  }
`;

function Modal({ user }) {
  console.log(user);

  return (
    <StyledModal>
      <StyledPopup>
        <PopupHeader>
          <Left>
            <Message size="2.8rem" color="#000" />
            <p>질문을 작성하세요</p>
          </Left>
          <CloseBtn>
            <CloseSvg />
          </CloseBtn>
        </PopupHeader>
        <RecipientContainer>
          <span className="sender">To. </span>
          <UserProfileImg
            src={user.imageSource}
            alt={UserProfileImg}
            size="2.8rem"
          />
          <span className="userName">{user.name}</span>
        </RecipientContainer>
        <InputTextareaWrapper>
          <InputTextarea height="14.8rem" type="질문" />
        </InputTextareaWrapper>
        <ButtonBox disabled>질문 보내기</ButtonBox>
      </StyledPopup>
    </StyledModal>
  );
}

export default Modal;
