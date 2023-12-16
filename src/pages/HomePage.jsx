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
import talkBg from '../../public/assets/talkbg.png';
import InputField from '../components/home/InputField';

const Wrapper = styled.div`
  height: 100vh;
  background: url(${talkBg}) center bottom/contain no-repeat;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4.5rem;
  margin-right: 13rem;
  grid-area: button;

  @media (max-width: 768px) {
    margin-top: 4.4rem;
    margin-right: 5rem;
  }
  @media (max-width: 375px) {
  }
`;

const LogoImage = styled.img`
  display: block;
  margin: 6.9rem auto 2.4rem;
  grid-area: logo;
`;

const UserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 40rem;
  height: 17.2rem;
  margin: 0 auto;
  padding: 3.2rem;
  flex-direction: column;
  gap: 1.6rem;
  border-radius: 1.6rem;
  background: var(--grayscale-10);
  grid-area: info;
`;

export default function HomePage() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
>>>>>>> 5e745e2 (InputText,Modal,Homepage변경사항)
