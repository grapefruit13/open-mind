import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoIcon from '../../assets/svgComponents/LogoIcon';

const Container = styled.div`
  cursor: pointer;
`;

export default function Logo({ width, height }) {
  const loginedUser = JSON.parse(localStorage.getItem('userData'));

  const navigate = useNavigate();

  const handleRedirect = () => {
    if (loginedUser) navigate('/list');
    else navigate('/');
  };

  return (
    <Container onClick={() => handleRedirect()}>
      <LogoIcon width={width} height={height} />
    </Container>
  );
}
