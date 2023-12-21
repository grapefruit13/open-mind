import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import UserProfileImg from '../userInfo/UserProfileImg';
import UserName from '../userInfo/UserName';
import DatesAgo from './DatesAgo';
import AnswerContent from './AnswerContent';
import InputTextarea from '../InputTextarea';
import ButtonBox from '../button/ButtonBox';
import AnswerRejected from './AnswerRejected';
import { UserContext } from '../../../utils/contexts/UserProvider';
import { FeedCardContext } from '../../../utils/contexts/FeedCardProvider';

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

export default function AnswerSection({ answer, path, editMode, datesAgo }) {
  const { user, handleUserData } = useContext(UserContext);

  const params = useParams();
  const subjectId = params.id;

  const { inputTextarea, setInputTextarea, isCompleted, setIsCompleted } =
    useContext(FeedCardContext);

  const handleClickButtonBox = state => {
    if (editMode) {
      setIsCompleted({ editCompleted: state });
    } else {
      setIsCompleted({ answerCompleted: state });
    }
  };

  const handletextareaInput = state => {
    setInputTextarea(state);
  };

  useEffect(() => {
    handleUserData(subjectId);
  }, []);

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
          <DatesAgo text={datesAgo} />
        </FlexRow>
        {!answer && path === 'answer' && !isCompleted.answerCompleted && (
          <>
            <InputTextarea
              type="답변"
              height="18.6rem"
              marginbottom="0.8rem"
              onChangeInput={handletextareaInput}
            />
            {inputTextarea ? (
              <ButtonBox onClickButton={handleClickButtonBox}>
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
              onChangeInput={handletextareaInput}
            />
            {inputTextarea ? (
              <ButtonBox onClickButton={handleClickButtonBox}>
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
