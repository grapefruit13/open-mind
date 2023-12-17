import { useState } from 'react';
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
  const [userName, setUserName] = useState('');

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
      <ButtonWrapper>
        <ButtonBox outline>
          답변하러 가기
          <ArrowRight />
        </ButtonBox>
      </ButtonWrapper>
      <LogoImage src={logo} alt="Logo" />
      <UserInfoContainer>
        <InputField onChangeUserNameInput={handleUserNameInput} />
        <ButtonBox
          style={{ width: ' 100%' }}
          onClickQuestionButton={handleQuestionButton}
        >
          질문 하기
        </ButtonBox>
      </UserInfoContainer>
    </Wrapper>
  );
}
