import styled from 'styled-components';
import UserProfile from './UserProfile';

const Container = styled.div`
  background: url('/assets/talk.png') no-repeat center center;
  background-size: cover;
  height: 23.4rem;
  margin-bottom: ${props => props.$marginBottom};
`;

export default function Header({ $marginBottom }) {
  return (
    <Container $marginBottom={$marginBottom}>
      <UserProfile />
    </Container>
  );
}
