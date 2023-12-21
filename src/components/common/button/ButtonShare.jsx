import styled from 'styled-components';
import { useContext } from 'react';
import LinkIcon from '../../../assets/svgComponents/LinkIcon';
import KakaoIcon from '../../../assets/svgComponents/KakaoIcon';
import FacebookIcon from '../../../assets/svgComponents/FacebookIcon';
import { ShareButtonContext } from '../../../utils/contexts/ShareButtonProvider';

const Container = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 1.2rem;
`;

const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  margin: 0;
  padding: 0;
`;

function ButtonShare() {
  const { setShareButtonClicked } = useContext(ShareButtonContext);

  const handleSetTime = () => {
    setShareButtonClicked(true);
    setTimeout(() => {
      setShareButtonClicked(false);
    }, 5000);
  };

  return (
    <Container>
      <Button type="button" onClick={handleSetTime}>
        <LinkIcon />
      </Button>
      <Button type="button" disabled>
        <KakaoIcon />
      </Button>
      <Button type="button" disabled>
        <FacebookIcon />
      </Button>
    </Container>
  );
}

export default ButtonShare;
