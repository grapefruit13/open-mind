import styled from 'styled-components';
import LinkIcon from '../../../assets/svgComponents/LinkIcon';
import KakaoIcon from '../../../assets/svgComponents/KakaoIcon';
import FacebookIcon from '../../../assets/svgComponents/FacebookIcon';

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

function ButtonShare({ onClickIcon }) {
  return (
    <Container>
      <Button
        type="button"
        onClick={() => {
          onClickIcon();
        }}
      >
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
