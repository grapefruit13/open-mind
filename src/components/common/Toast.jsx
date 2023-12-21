import styled from 'styled-components';

const ToastAlert = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  bottom: 6rem;
  width: 16.7rem;
  height: 4.2rem;
  padding: 1.2rem 0;
  border-radius: 0.8rem;
  background: var(--grayscale-60);
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);

  p {
    margin-left: 0.4rem;
    text-align: center;
    color: var(--grayscale-10);
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`;

export default function ToastNotification() {
  return (
    <ToastAlert>
      <p>url이 복사되었습니다!</p>
    </ToastAlert>
  );
}
