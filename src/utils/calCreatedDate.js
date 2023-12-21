export default function calCreatedAt(createdAt) {
  const splited = createdAt?.split('.').slice(0, 1);
  const createdDate = new Date(splited[0]);
  const now = new Date();

  const diffMSec = now.getTime() - createdDate.getTime();
  const MIN = 1000 * 60;
  const HOUR = MIN * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 30;

  const calTime = time => Math.floor(diffMSec / time);

  const minutes = calTime(MIN);
  const hours = calTime(HOUR);
  const days = calTime(DAY);
  const months = calTime(MONTH);

  if (months >= 12) {
    return `${months / 12}년 전`;
  }
  if (days > 30) {
    return `${months}달 전`;
  }
  if (days <= 30 && days > 0) {
    return `${days}일 전`;
  }
  if (hours >= 24) {
    return '1일 전';
  }
  if (hours <= 23 && hours > 0) {
    return `${hours}시간 전`;
  }
  if (minutes >= 60) {
    return '1시간 전';
  }
  if (minutes <= 59) {
    return `${minutes}분 전`;
  }
  if (minutes < 2) {
    return '1분 전';
  }
  return 'nothing';
}
