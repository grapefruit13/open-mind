import styled from 'styled-components';
import Message from '../../assets/svgComponents/Message';
import CloseSvg from '../../assets/svgComponents/CloseSvg';
// import sampleProfile from '../../../public/assets/sampleProfile.png';
import InputTextarea from '../../../src/components/common/InputTextarea';
import ButtonBox from '../../../src/components/common/button/ButtonBox';

const StyledPopup = styled.div`
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
function Popup() {
  return (
    <StyledPopup>
      <PopupHeader>
        <Left>
          <Message width={28} />
          <p>질문을 작성하세요</p>
        </Left>
        <CloseSvg />
      </PopupHeader>
      {/* <RecipientContainer>
        <span>To.</span>
        <ProfileImage src={sampleProfile} alt="profile" />
        <span>{}</span>
      </RecipientContainer> */}
      <InputTextarea />
      <ButtonBox />
    </StyledPopup>
  );
}

export default Popup;
