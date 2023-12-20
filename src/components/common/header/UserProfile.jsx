import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../../assets/svgComponents/Logo';
import UserProfileImg from '../userInfo/UserProfileImg';
import UserName from '../userInfo/UserName';
import ButtonShare from '../button/ButtonShare';
import { BASE_URL } from '../../../utils/constants/apiUrl';

const Container = styled.div`
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  padding-top: 5rem;
`;

export default function UserProfile({ userName, userProfileImg }) {
  const [shareIconClicked, setShareIconClicked] = useState(false);
  const { pathname } = useLocation();

  const handleCopyClipBoard = async text => {
    if (!shareIconClicked) return;
    console.log('복사');
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      throw new Error(e);
    }
  };
  const handleShareIconClicked = () => {
    setShareIconClicked(true);
  };

  useEffect(() => {
    handleCopyClipBoard(`${BASE_URL}${pathname}`);
  }, [shareIconClicked]);

  return (
    <Container>
      <Logo />
      <UserProfileImg
        src={userProfileImg}
        size="13.6rem"
        alt="userProfileImage"
        $margin="1.2rem auto"
      />
      <UserName userName={userName} size="3.2rem" />
      <ButtonShare onClickIcon={handleShareIconClicked} />
    </Container>
  );
}
