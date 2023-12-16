import { useState } from 'react';
import styled from 'styled-components';
import Message from '../../assets/svgComponents/Message';
import CloseSvg from '../../assets/svgComponents/CloseSvg';
import sampleProfile from '../../../public/assets/sampleProfile.png';
import InputTextarea from '../common/InputTextarea';
import ButtonBox from '../common/button/ButtonBox';

const StyleModal = styled.div`
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
  const [modalVisible, setModalVisible] = useState(true);
  const userNameData = '아초는 고양이';
  const handleClose = () => {
    setModalVisible(false);
  };

  const handleQuestionSubmit = async () => {
    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userNameData,
          // Add other question data as needed
        }),
      });

      if (response.ok) {
        // Handle success
        console.log('Question submitted successfully');
      } else {
        // Handle error
        console.error('Failed to submit question');
      }
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <StyleModal style={{ display: modalVisible ? 'block' : 'none' }}>
      <StyledPopup>
        <PopupHeader>
          <Left>
            <Message width={28} />
            <p>질문을 작성하세요</p>
          </Left>
          <CloseBtn onClick={handleClose}>
            <CloseSvg />
          </CloseBtn>
        </PopupHeader>
        <RecipientContainer>
          <span className="sender">To.</span>
          <ProfileWrapper>
            <ProfileImage src={sampleProfile} alt="profile" />
          </ProfileWrapper>
          <span className="userName">{userNameData}</span>
        </RecipientContainer>
        <InputTextareaWrapper>
          <InputTextarea />
        </InputTextareaWrapper>
        <ButtonBox disabled onClick={handleQuestionSubmit}>
          질문 보내기
        </ButtonBox>
      </StyledPopup>
    </StyleModal>
  );
}

export default Modal;
