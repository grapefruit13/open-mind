import styled from 'styled-components';
import { useContext } from 'react';
import UserProfileImg from '../userInfo/UserProfileImg';
import UserName from '../userInfo/UserName';
import DatesAgo from './DatesAgo';
import AnswerContent from './AnswerContent';
import InputTextarea from '../InputTextarea';
import ButtonBox from '../button/ButtonBox';
import { DropdownContext } from '../../../utils/contexts/context';
import AnswerRejected from './AnswerRejected';

const Container = styled.div`
  display: flex;
  gap: 1.2rem;
  align-self: stretch;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1 0 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  flex: 1 0 0;
`;

// user 데이터를 끌고와야 함. 이 때, props drilling이 심하므로 contextAPI 도입 논의 필요
export default function AnswerSection({
  answer,
  user,
  path,
  editMode,
  onClickComplete,
}) {
  const { inputTextarea, isCompleted } = useContext(DropdownContext);

  // 답변 완료 버튼 누르면 clickedBtns에 answered: true 넣어줌
  const handleClickButtonBox = state => {
    if (editMode) {
      onClickComplete({ editCompleted: state });
    } else {
      onClickComplete({ answerCompleted: state });
    }
  };

  return (
    <Container>
      <UserProfileImg
        src={user.imageSource}
        alt="userProfileImg"
        size="4.8rem"
      />
      <FlexColumn>
        <FlexRow>
          <UserName userName={user.name} size="1.8rem" />
          {!path && <DatesAgo text="2주전" />}
        </FlexRow>
        {!answer && path === 'answer' && !isCompleted.answerCompleted && (
          <>
            <InputTextarea type="답변" height="18.6rem" marginbottom="0.8rem" />
            {inputTextarea ? (
              <ButtonBox onClickBtnInput={handleClickButtonBox}>
                답변 완료
              </ButtonBox>
            ) : (
              <ButtonBox disabled>답변 완료</ButtonBox>
            )}
          </>
        )}
        {answer && editMode && (
          <>
            <InputTextarea
              type="답변"
              height="18.6rem"
              marginbottom="0.8rem"
              content={answer.content}
            />
            {inputTextarea ? (
              <ButtonBox onClickBtnInput={handleClickButtonBox}>
                수정 완료
              </ButtonBox>
            ) : (
              <ButtonBox disabled>수정 완료</ButtonBox>
            )}
          </>
        )}
        {answer && !answer.isRejected && !editMode ? (
          <AnswerContent content={answer.content} />
        ) : (
          <AnswerContent content="" />
        )}
        {answer && answer.isRejected && <AnswerRejected />}
      </FlexColumn>
    </Container>
  );
}
