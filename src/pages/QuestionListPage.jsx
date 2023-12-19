import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ButtonBox from '../components/common/button/ButtonBox';
import Dropdown from '../components/list/dropdown/Drodown';
import UserCard from '../components/list/UserCard';
import ArrowRight from '../assets/svgComponents/ArrowRight';
import logo from '../../public/assets/logo.svg';
import Pagenation from '../components/list/Pagenation';

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
  padding: 0rem 3.2rem;

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
  color: var(--Grayscale-40, #818181);
`;

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

// async function getDataByUrl(url) {
//   try {
//     const response = await axios.get(
//       `https://openmind-api.vercel.app/2-2/subjects/${url}`,
//     );
//     return response.data;
//   } catch (e) {
//     throw Error(`getData에서 ${e} 발생`);
//   }
// }

function QuestionListPage() {
  const [selectedMenuState, setSelectedMenuState] = useState('name');
  const [userId, setUserId] = useState('null');
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(8);
  const [list, setList] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPageBlock, setCurrentPageBlock] = useState(0);
  const [totalPageBlock, setTotalPageBlock] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

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
      setCurrentPageBlock(currentPageBlock + 1);
      setPage((currentPageBlock + 1) * 5 + 1);
    }
  };

  const handlePrevPageBlock = () => {
    if (currentPageBlock > 0) {
      setCurrentPageBlock(currentPageBlock - 1);
      setPage((currentPageBlock - 1) * 5 + 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
      if ((currentPageBlock + 1) * 5 === page) {
        setCurrentPageBlock(currentPageBlock + 1);
      }
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      if (currentPageBlock * 5 + 1 === page) {
        setCurrentPageBlock(currentPageBlock - 1);
      }
    }
  };

  useEffect(() => {
    const id = localStorage.getItem('Id');
    setUserId(id);
    window.addEventListener('resize', handleSize);
    if (pageWidth <= 868) {
      setWidth(6);
    } else {
      setWidth(8);
    }

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [pageWidth]);

  useEffect(() => {
    const getListData = async (limit, offset, sort) => {
      const cardListData = await getDataByLimit(limit, offset, sort);
      setList({ ...cardListData });
      setTotalPage(Math.ceil(cardListData.count / limit));
    };
    getListData(width, (page - 1) * width, selectedMenuState);
  }, [selectedMenuState, page, width, currentPageBlock]);

  useEffect(() => {
    setTotalPageBlock(Math.ceil(totalPage / 5));
  }, [totalPage]);

  return (
    <Container>
      <Nav>
        <Logo src={logo} />
        <ButtonSizingDiv>
          {userId ? (
            <Link to={`/post/${userId}/answer`}>
              <ButtonBox outline="outline">
                답변하러 가기
                <ArrowRight />
              </ButtonBox>
            </Link>
          ) : (
            <Link to="/">
              <ButtonBox outline="outline">
                답변하러 가기
                <ArrowRight />
              </ButtonBox>
            </Link>
          )}
        </ButtonSizingDiv>
      </Nav>
      <Header>
        <Title>누구에게 질문할까요?</Title>
        <Dropdown
          setSelectedMenuState={setSelectedMenuState}
          $isClicked={isClicked}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Header>
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
          <PageNums onClick={handlePrevPageBlock}>{'<<'}</PageNums>
          <PageNums onClick={handlePrevPage}>{'<'}</PageNums>
          <Pagenation
            currentPageBlock={currentPageBlock}
            setCurrentPageBlock={setCurrentPageBlock}
            totalPageBlock={totalPageBlock}
            totalPage={totalPage}
            setPage={setPage}
            page={page}
          />
          <PageNums onClick={handleNextPage}>{'>'}</PageNums>
          <PageNums onClick={handleNextPageBlock}>{'>>'}</PageNums>
        </PageNationContainer>
      </Main>
    </Container>
  );
}

export default QuestionListPage;
