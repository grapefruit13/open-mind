import styled from 'styled-components';
import Logo from '../../../assets/svgComponents/Logo';
import UserProfileImg from '../userInfo/UserProfileImg';
import UserName from '../userInfo/UserName';
import ButtonShare from '../button/ButtonShare';

const Container = styled.div`
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  padding-top: 5rem;
`;

function UserProfile({ userName, userProfileImg }) {
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
      <ButtonShare />
    </Container>
  );
}

export default UserProfile;
