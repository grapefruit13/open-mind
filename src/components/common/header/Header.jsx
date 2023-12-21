import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import ButtonLogout from '../button/ButtonLogout';

const Container = styled.div`
  background: url('/assets/talk.png') no-repeat center center;
  background-size: cover;
  height: 23.4rem;
  margin-bottom: ${props => props.$marginBottom};
  position: relative;
`;

const ButtonLogoutContainer = styled.div`
  position: absolute;
  right: 5rem;
  top: 3rem;
`;

export default function Header({ marginBottom, userName, userProfileImg }) {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  const handleSize = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);

    if (pageWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [pageWidth]);
  return (
    <Container $marginBottom={marginBottom}>
      <UserProfile userName={userName} userProfileImg={userProfileImg} />
      <ButtonLogoutContainer>
        <Link to="/">
          <ButtonLogout small={isMobile} />
        </Link>
      </ButtonLogoutContainer>
    </Container>
  );
}
