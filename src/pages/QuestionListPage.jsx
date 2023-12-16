import { useState } from 'react';
import styled from 'styled-components';
import ButtonBox from '../components/common/button/ButtonBox';
import Dropdown from '../components/list/dropdown/Drodown';
import UserCard from '../components/list/UserCard';
import ArrowRight from '../assets/svgComponents/ArrowRight';
import logo from '../../public/assets/logo.svg';

const Container = styled.div`
  height: 100vh;
  background: var(--Grayscale-20, #f9f9f9);
`;
const Nav = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 5rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    padding: 4rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const Logo = styled.img`
  width: 14.6rem;
  height: 5.7rem;
`;

const ButtonSizingDiv = styled.div`
  width: 16.3rem;
  height: 4.6rem;

  @media (max-width: 767px) {
    width: 16.3rem;
    height: 4.6rem;
  }
`;

const Header = styled.header`
  margin: 4rem auto 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 767px) {
    margin: 0rem;
    padding: 5.2rem 2.4rem 1.6rem;

    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  color: var(--Grayscale-60, #000);
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) and (max-width: 868px) {
    font-size: 4rem;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (min-width: 768px) and (max-width: 868px) {
    gap: 6.1rem;
  }

  @media (max-width: 767px) {
    gap: 3.1rem;
    padding: 0rem 2.4rem;
  }
`;

const CardsContainer = styled.div`
  margin: 0rem 3.2rem;
  display: grid;
  gap: 2rem;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);

  @media (min-width: 768px) and (max-width: 868px) {
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  }
`;

const PageNation = styled.div`
  display: inline-flex;

  color: var(--Grayscale-40, #818181);
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 767px) {
  }
`;

const PageNums = styled.p`
  display: flex;
  width: 4rem;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function QuestionListPage() {
  const [selectedMenuState, setSelectedMenuState] = useState('이름순');

  return (
    <Container>
      <Nav>
        <Logo src={logo} />
        <ButtonSizingDiv>
          <ButtonBox outline="outline">
            답변하러 가기
            <ArrowRight />
          </ButtonBox>
        </ButtonSizingDiv>
      </Nav>
      <Header>
        <Title>누구에게 질문할까요?</Title>
        <Dropdown setSelectedMenuState={setSelectedMenuState} />
      </Header>
      <Main>
        <CardsContainer>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </CardsContainer>
        <PageNation>
          <PageNums>{'<'}</PageNums>
          <PageNums>1</PageNums>
          <PageNums>1</PageNums>
          <PageNums>1</PageNums>
          <PageNums>1</PageNums>
          <PageNums>{'>'}</PageNums>
        </PageNation>
      </Main>
    </Container>
  );
}

export default QuestionListPage;