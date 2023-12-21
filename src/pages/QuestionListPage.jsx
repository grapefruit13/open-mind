import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ButtonBox from '../components/common/button/ButtonBox';
import Dropdown from '../components/list/dropdown/Drodown';
import UserCard from '../components/list/UserCard';
import ArrowRight from '../assets/svgComponents/ArrowRight';
import Logo from '../components/common/Logo';
import Pagenation from '../components/list/Pagenation';
import ButtonLogout from '../components/common/button/ButtonLogout';

const Container = styled.div``;

const Nav = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 5rem 0rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (max-width: 767px) {
    padding: 2.4rem;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 2rem;
  }
`;

const LogoAndLogout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoutContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (min-width: 768px) {
    align-items: center;
  }
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  margin: 4rem auto 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 767px) {
    width: 100%;
    max-width: 50.4rem;
    min-width: 32.7rem;
    margin: 0;
    padding: 5.4rem 2.4rem 1.8rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
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
  padding: 0rem 3.2rem 10rem;

  @media (min-width: 768px) and (max-width: 868px) {
    gap: 6.1rem;
  }

  @media (max-width: 767px) {
    gap: 3.1rem;
    padding: 0rem 2.4rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template: repeat(2, 1fr) / repeat(4, minmax(18.6rem, 22rem));

  @media (min-width: 768px) and (max-width: 868px) {
    grid-template: repeat(2, 1fr) / repeat(3, 18.6rem);
  }
  @media (max-width: 767px) {
    grid-template: repeat(3, 16.8rem) / repeat(2, minmax(18.6rem, 22rem));
    gap: 1.6rem;
  }
`;

const PageNationContainer = styled.div`
  display: inline-flex;
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  cursor: ${({ $isClicked }) => ($isClicked ? 'pointer' : 'default')};
`;

const PageNums = styled.p`
  display: flex;
  width: 4rem;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Actor;
  color: var(--Grayscale-40, #818181);
`;

function QuestionListPage() {
  const [selectedMenuState, setSelectedMenuState] = useState('time');
  const [userId, setUserId] = useState('null');
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(8);
  const [list, setList] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPageBlock, setCurrentPageBlock] = useState(0);
  const [totalPageBlock, setTotalPageBlock] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  async function getDataByLimit(limit, offset, sort) {
    try {
      const response = await axios.get(
        `https://openmind-api.vercel.app/2-2/subjects/?limit=${limit}&offset=${offset}&sort=${sort}`,
      );
      return response.data;
    } catch (e) {
      throw Error(`getData에서 ${e} 발생`);
    }
  }

  const handleMouseEnter = () => {
    setIsClicked(true);
  };

  const handleMouseLeave = () => {
    setIsClicked(false);
  };

  const handleSize = () => {
    setPageWidth(window.innerWidth);
  };

  const handleNextPageBlock = () => {
    if (totalPageBlock > currentPageBlock + 1) {
      const updatedState = currentPageBlock + 1;
      setCurrentPageBlock(updatedState);
      setPage(updatedState * 5 + 1);
    }
  };

  const handlePrevPageBlock = () => {
    if (currentPageBlock > 0) {
      const updatedState = currentPageBlock - 1;
      setCurrentPageBlock(updatedState);
      setPage(updatedState * 5 + 1);
    }
  };

  const handleLastPage = () => {
    if (page !== totalPage) {
      setPage(totalPage);
      setCurrentPageBlock(totalPageBlock - 1);
    }
  };

  const handleFirstPage = () => {
    if (page !== 1) {
      setPage(1);
      setCurrentPageBlock(0);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem('userData');
    const parsedId = JSON.parse(id);
    setUserId(parsedId?.id);

    window.addEventListener('resize', handleSize);
    if (pageWidth <= 868) {
      setWidth(6);
    } else {
      setWidth(8);
    }
    if (pageWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [pageWidth]);

  useEffect(() => {}, [page]);

  useEffect(() => {
    const getListData = async (limit, offset, sort) => {
      const cardListData = await getDataByLimit(limit, offset, sort);
      setList({ ...cardListData });
      setTotalPage(Math.ceil(cardListData.count / limit));
    };
    getListData(width, (page - 1) * width, selectedMenuState);
  }, [selectedMenuState, page, width, currentPageBlock]);

  useEffect(() => {
    setPage(1);
  }, [selectedMenuState]);

  useEffect(() => {
    setTotalPageBlock(Math.ceil(totalPage / 5));
  }, [totalPage]);

  return (
    <Container>
      <Nav>
        {isMobile ? (
          <LogoAndLogout>
            <div style={{ width: '7.239rem' }} />
            <Logo width="14.6rem" height="5.7rem" />
            <div style={{ width: '7.239rem' }}>
              <Link to="/">
                <ButtonLogout small={isMobile} />
              </Link>
            </div>
          </LogoAndLogout>
        ) : (
          <Logo width="14.6rem" height="5.7rem" />
        )}
        <LogoutContainer>
          {userId ? (
            <Link to={`/post/${userId}/answer`}>
              <ButtonBox small={isMobile} outline="outline">
                답변하러 가기
                <ArrowRight />
              </ButtonBox>
            </Link>
          ) : (
            <Link to="/">
              <ButtonBox small={isMobile} outline="outline">
                답변하러 가기
                <ArrowRight />
              </ButtonBox>
            </Link>
          )}
          {!isMobile && (
            <Link to="/">
              <ButtonLogout small={isMobile} />
            </Link>
          )}
        </LogoutContainer>
      </Nav>
      <Flex>
        <Header>
          <Title>누구에게 질문할까요?</Title>
          <Dropdown
            page={page}
            setSelectedMenuState={setSelectedMenuState}
            $isClicked={isClicked}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Header>
      </Flex>
      <Main>
        <CardsContainer>
          {list?.results.map(item => (
            <Link to={`/post/${item.id}`} key={`key_${item.id}`}>
              <UserCard
                imgSrc={item.imageSource}
                userName={item.name}
                questions={item.questionCount}
              />
            </Link>
          ))}
        </CardsContainer>
        <PageNationContainer
          $isClicked={isClicked}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <PageNums onClick={handleFirstPage}>{'<<'}</PageNums>
          <PageNums onClick={handlePrevPageBlock}>{'<'}</PageNums>
          <Pagenation
            currentPageBlock={currentPageBlock}
            setCurrentPageBlock={setCurrentPageBlock}
            totalPageBlock={totalPageBlock}
            totalPage={totalPage}
            setPage={setPage}
            page={page}
          />
          <PageNums onClick={handleNextPageBlock}>{'>'}</PageNums>
          <PageNums onClick={handleLastPage}>{'>>'}</PageNums>
        </PageNationContainer>
      </Main>
    </Container>
  );
}

export default QuestionListPage;
