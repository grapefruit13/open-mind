import styled from 'styled-components';

const Container = styled.div`
  width: ${props => props.size};
  height: auto;
  margin: ${props => props.margin || '0'};

  img {
    width: 100%;
    border-radius: 136px;
  }
`;

function UserProfileImg({ src, alt, size, $margin }) {
  return (
    <Container size={size} margin={$margin}>
      <img src={src} alt={alt} />
    </Container>
  );
}

export default UserProfileImg;
