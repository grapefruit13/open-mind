import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../../public/assets/logo.svg';
import ButtonBox from '../components/common/button/ButtonBox';
import ArrowRight from '../assets/svgComponents/ArrowRight';
import talkBg from '../../public/assets/talkbg.png';
import InputField from '../components/home/InputField';
// import useAxios from '../hooks/useAxios';
import { SUBJECT_URL } from '../constants/apiUrl';

const Wrapper = styled.div`
  height: 100vh;
  background: url(${talkBg}) center bottom/contain no-repeat;
  overflow: hidden;
`;

const WrapperGrid = styled.div`
  @media (max-width: 375px) {
    display: grid;
    padding: 0 3.5rem;
    grid-template-areas:
      'logo'
      'button'
      'info';
    grid-template-rows: auto auto auto;
    grid-template-columns: 100%;
    gap: 2.4rem;
  }
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
    height: 3.4rem;
    margin: 0 auto;
  }
`;

const LogoImage = styled.img`
  display: block;
  margin: 6.9rem auto 2.4rem;
  grid-area: logo;

  @media (max-width: 478px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 375px) {
    width: 24rem;
    height: 9.8rem;
    margin: 8rem auto 0;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 40rem;
  height: 17.2rem;
  margin: 0 auto;
  padding: 3.2rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.6rem;
  background: var(--grayscale-10);
  grid-area: info;

  @media (max-width: 375px) {
    height: 15.6rem;
    padding: 2.4rem;
  }
`;

export default function HomePage() {
  const [userName, setUserName] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 375);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 375);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleUserNameInput = inputValue => {
    setUserName(inputValue);
  };

  const handleQuestionButton = () => {
    axios
      .post(SUBJECT_URL, {
        name: userName,
        team: '2-2',
      })
      .then(({ data }) => {
        // console.log(data);
        localStorage.setItem('userData', JSON.stringify(data));
        navigate(`/post/${data.id}/answer`);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <Wrapper>
      <WrapperGrid>
        <ButtonWrapper>
          <ButtonBox outline small={isSmallScreen}>
            답변하러 가기
            <ArrowRight />
          </ButtonBox>
        </ButtonWrapper>
        <LogoImage src={logo} alt="Logo" />
        <UserInfoContainer>
          <InputField onChangeUserNameInput={handleUserNameInput} />
          <ButtonBox onClickQuestionButton={handleQuestionButton}>
            질문 하기
          </ButtonBox>
        </UserInfoContainer>
      </WrapperGrid>
    </Wrapper>
  );
}
