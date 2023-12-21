import { useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import LikeIcon from '../../assets/svgComponents/LikeIcon';
import DislikeIcon from '../../assets/svgComponents/DislikeIcon';
import { QUESTION_URL } from '../../utils/constants/apiUrl';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ReactionButton = styled.div`
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
  font-weight: 500;
  line-height: 1.8rem;

  ${props =>
    props.$isClicked &&
    css`
      cursor: default;
    `}
`;

const LikeButton = styled(ReactionButton)`
  margin-right: 3.2rem;

  ${props =>
    props.$isLike &&
    css`
      color: var(--blue-50);
    `}
`;

const DislikeButton = styled(ReactionButton)`
  ${props =>
    props.$isDislike &&
    css`
      color: var(--grayscale-60);
    `}
`;

const Counter = styled.div``;

export default function ReactionButtons({ question }) {
  const [reactionState, setReactionState] = useState(
    localStorage.getItem(`${question.id}Of${question.subjectId}`),
  );
  const [likeCount, setLikeCount] = useState(question.like);
  const [dislikeCount, setDislikeCount] = useState(question.dislike);

  const setReactStateInLocalStoraget = reactinType => {
    localStorage.setItem(
      `${question.id}Of${question.subjectId}`,
      `${reactinType}`,
    );
  };

  const updateReactionCount = async reactionType => {
    await axios.get(`${QUESTION_URL}${question.id}/`).then(data => {
      // console.log(data.data);
      if (reactionType === 'like') {
        setLikeCount(data.data.like);
      }
      if (reactionType === 'dislike') {
        setDislikeCount(data.data.dislike);
      }
    });
  };

  const handleReaction = async reactionType => {
    if (localStorage.getItem(`${question.id}Of${question.subjectId}`)) {
      return;
    }
    try {
      await axios.post(`${QUESTION_URL}${question.id}/reaction/`, {
        type: reactionType,
      });
      setReactStateInLocalStoraget(reactionType);
      setReactionState(
        localStorage.getItem(`${question.id}Of${question.subjectId}`),
      );
      updateReactionCount(reactionType);
    } catch (error) {
      throw Error(`Reactin ${error}`);
    }
  };

  return (
    <Container>
      <LikeButton
        $isLike={reactionState === 'like'}
        $isClicked={reactionState}
        onClick={() => handleReaction('like')}
      >
        <LikeIcon />
        <p>좋아요</p>
        <Counter>{likeCount}</Counter>
      </LikeButton>
      <DislikeButton
        $isDislike={reactionState === 'dislike'}
        $isClicked={reactionState}
        onClick={() => handleReaction('dislike')}
      >
        <DislikeIcon />
        <p>싫어요</p>
        <Counter>{dislikeCount}</Counter>
      </DislikeButton>
    </Container>
  );
}
