import styled from 'styled-components';
import Message from '../../assets/svgComponents/Message';
import CloseSvg from '../../assets/svgComponents/CloseSvg';
import sampleProfile from '../../../public/assets/sampleProfile.png';
import InputTextarea from '../common/InputTextarea';
import ButtonBox from '../common/button/ButtonBox';

const StyledPopup = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
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
    font-family: Actor;
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
    font-family: Actor;
    font-size: 1.8rem;
  }

  span.userName {
    color: var(--grayscale-60, #000);
    font-family: Pretendard;
    font-size: 1.6rem;
  }
`;

const ProfileWrapper = styled.div`
  width: 2.8rem;
`;

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const InputTextareaWrapper = styled.div`
  margin: 1.2rem 0 0.8rem;
  height: 100%;

  @media (max-width: 375px) {
    margin: 1.5rem 0 0.8rem;
  }
`;

function Modal() {
  return (
    <StyledPopup>
      <PopupHeader>
        <Left>
          <Message width={28} />
          <p>질문을 작성하세요</p>
        </Left>
        <CloseBtn>
          <CloseSvg />
        </CloseBtn>
      </PopupHeader>
      <RecipientContainer>
        <span className="sender">To.</span>
        <ProfileWrapper>
          <ProfileImage src={sampleProfile} alt="profile" />
        </ProfileWrapper>
        <span className="userName">{}</span>
      </RecipientContainer>
      <InputTextareaWrapper>
        <InputTextarea />
      </InputTextareaWrapper>
      <ButtonBox disabled>질문 보내기</ButtonBox>
    </StyledPopup>
  );
}

export default Modal;
