import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { css } from 'styled-components';
import Logo from '../components/common/Logo';
import ButtonBox from '../components/common/button/ButtonBox';
import ArrowRight from '../assets/svgComponents/ArrowRight';
import backgroundPc from '../../public/assets/backgroundPc.svg';
import backgroundTablet from '../../public/assets/backgroundTablet.svg';
import backgroundMobile from '../../public/assets/backgroundMobile.svg';
import InputField from '../components/home/InputField';
import { SUBJECT_URL } from '../utils/constants/apiUrl';
import ButtonLogout from '../components/common/button/ButtonLogout';

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${backgroundPc});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (max-width: 1199px) and (min-width: 769px) {
    background-image: url(${backgroundTablet});
  }

  @media (max-width: 768px) {
    background-image: url(${backgroundMobile});
  }
`;

const WrapperGrid = styled.div`
  @media (max-width: 767px) {
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
  align-items: center;
  gap: 2rem;
  margin-top: 4.5rem;
  margin-right: 13rem;

  @media (max-width: 768px) {
    margin-top: 4.4rem;
    margin-right: 5rem;
  }

  @media (max-width: 767px) {
    height: 3.4rem;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  width: 10.4rem;
  height: 4.6rem;
  ${props =>
    props.$mobile &&
    css`
      justify-self: end;
      align-self: end;
    `}
`;
const LogoImageContainer = styled.div`
  width: 456px;
  height: 180px;
  margin: 6.9rem auto 2.4rem;
  grid-area: logo;

  @media (max-width: 478px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 767px) {
    width: 24.8rem;
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

  @media (max-width: 767px) {
    height: 15.6rem;
    padding: 2.4rem;
  }
`;

export default function HomePage() {
  const [userName, setUserName] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  const navigate = useNavigate();

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
        localStorage.setItem('userData', JSON.stringify(data));
        navigate(`/post/${data.id}/answer`);
      })
      .catch(err => {
        throw Error(`Homepage의 handleQuestionButton에서 ${err}`);
      });
  };

  useEffect(() => {
    const loginedUser = JSON.parse(localStorage.getItem('userData'));

    if (loginedUser) {
      navigate('/list');
    }
  }, []);

  return (
    <Wrapper>
      <WrapperGrid>
        <ButtonWrapper>
          <Link to="/list">
            <ButtonBox outline small={isSmallScreen}>
              질문하러 가기
              <ArrowRight />
            </ButtonBox>
          </Link>
          {!isSmallScreen && <ButtonLogout />}
        </ButtonWrapper>
        <LogoImageContainer>
          <Logo width="100%" height="100%" />
        </LogoImageContainer>
        <UserInfoContainer>
          <InputField onChangeUserNameInput={handleUserNameInput} />
          <ButtonBox onClickButton={handleQuestionButton}>질문 하기</ButtonBox>
        </UserInfoContainer>
        {isSmallScreen && (
          <Container $mobile={isSmallScreen}>
            <ButtonLogout />
          </Container>
        )}
      </WrapperGrid>
    </Wrapper>
  );
}
