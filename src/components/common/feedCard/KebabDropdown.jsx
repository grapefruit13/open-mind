import styled from 'styled-components';
import KebabDropdownButton from './KebabDropdownButton';

const Container = styled.div`
  display: flex;
  width: 10.3rem;
  padding: 0.5rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 6rem;
  box-shadow: var(--shadow-1pt);
  border-radius: 5px;
`;

export default function KebabDropdown({ question }) {
  return (
    <Container>
      {question.answer && <KebabDropdownButton>수정하기</KebabDropdownButton>}
      <KebabDropdownButton>삭제하기</KebabDropdownButton>
      <KebabDropdownButton>거절하기</KebabDropdownButton>
    </Container>
  );
}
