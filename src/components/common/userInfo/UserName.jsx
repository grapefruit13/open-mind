import styled from 'styled-components';

const Div = styled.div`
  color: var(--grayscale-60);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: ${props => props.size};
  font-weight: 400;
  line-height: 2.4rem;
`;

function UserName({ userName, size }) {
  return <Div size={size}>{userName}</Div>;
}

export default UserName;
