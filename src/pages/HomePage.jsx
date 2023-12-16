<<<<<<< HEAD
function HomePage() {
  return <div>HomePage</div>;
}

export default HomePage;
=======
import styled from 'styled-components';
import logo from '../../public/assets/logo.svg';
import ButtonBox from '../components/common/button/ButtonBox';
import ArrowRight from '../assets/svgComponents/ArrowRight';
import talk from '../../public/assets/talk.png';
import InputField from '../components/home/InputField';

const ButtonWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 13rem;
`;

const LogoImage = styled.img`
  display: block;
  margin: 16rem auto 2.4rem;
`;

const TalkImgWrapper = styled.div`
  width: 100%;
  height: 23.4rem;
  background: url(${talk}) center bottom/cover no-repeat;
`;

const UserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 40rem;
  height: 17.2rem;
  margin: 0 auto;
  padding: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 1.6rem;
  background: var(--grayscale-10);
`;

export default function HomePage() {
  return (
    <div>
      <ButtonWrapper>
        <ButtonBox outline="outline">
          답변하러 가기
          <ArrowRight />
        </ButtonBox>
      </ButtonWrapper>
      <LogoImage src={logo} alt="Logo" />
      <UserInfoContainer>
        <InputField />
        <ButtonBox style={{ width: ' 100%' }}>질문 하기</ButtonBox>
      </UserInfoContainer>
      <TalkImgWrapper />
    </div>
  );
}
>>>>>>> 5e745e2 (InputText,Modal,Homepage변경사항)
