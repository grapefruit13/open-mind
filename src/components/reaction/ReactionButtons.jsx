import { useState } from 'react';
import styled, { css } from 'styled-components';
import LikeIcon from '../../assets/svgComponents/LikeIcon';
import DislikeIcon from '../../assets/svgComponents/DislikeIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ReactButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  // font
  color: var(--grayscale-40, #818181);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`;

const LikeButton = styled(ReactButton)`
  margin-right: 3.2rem;

  ${props =>
    props.$isLike &&
    css`
      color: var(--blue-50, #1877f2);
    `}
`;

const DislikeButton = styled(ReactButton)`
  ${props =>
    props.$isDislike &&
    css`
      color: var(--grayscale-60, #000);
    `}
`;

const Counter = styled.div``;

function ReactionButtons() {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const onClickLikeButton = () => {
    if (isDislike) setIsDislike(prev => !prev);
    setIsLike(prev => !prev);
  };

  const onClickDislikeButton = () => {
    if (isLike) setIsLike(prev => !prev);
    setIsDislike(prev => !prev);
  };

  return (
    <Container>
      <LikeButton $isLike={isLike} onClick={onClickLikeButton}>
        <LikeIcon />
        <p>좋아요</p>
        <Counter>1</Counter>
      </LikeButton>
      <DislikeButton $isDislike={isDislike} onClick={onClickDislikeButton}>
        <DislikeIcon />
        <p>싫어요</p>
        <Counter>1</Counter>
      </DislikeButton>
    </Container>
  );
}

export default ReactionButtons;
