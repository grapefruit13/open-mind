import styled from 'styled-components';
import LinkIcon from '../../assets/svgComponents/LinkIcon';
import KakaoIcon from '../../assets/svgComponents/KakaoIcon';
import FacebookIcon from '../../assets/svgComponents/FacebookIcon';

const Continaer = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 1.2rem;
`;

function ButtonShare() {
  return (
    <Continaer>
      <LinkIcon />
      <KakaoIcon />
      <FacebookIcon />
    </Continaer>
  );
}

export default ButtonShare;
