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

function UserProfile() {
  const userProfileImgSrc = '/assets/sampleProfile.png';

  return (
    <Container>
      <Logo />
      <UserProfileImg
        src={userProfileImgSrc}
        size="13.6rem"
        alt="userProfileImage"
        margin="1.2rem auto"
      />
      <UserName userName="아초는고양이" size="32" />
      <ButtonShare />
    </Container>
  );
}

export default UserProfile;
