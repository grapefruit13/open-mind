import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonBox from './ButtonBox';

const Container = styled.div``;

export default function ButtonLogout({ small }) {
  const [isLogined, setIsLogined] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsLogined(false);
  };

  useEffect(() => {
    const id = localStorage.getItem('userData');
    if (id) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, []);

  return (
    <Container>
      {isLogined && (
        <ButtonBox small={small} onClickButton={handleLogout}>
          로그아웃
        </ButtonBox>
      )}
    </Container>
  );
}
