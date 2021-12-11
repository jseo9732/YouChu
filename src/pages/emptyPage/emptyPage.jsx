import { Link } from 'react-router-dom';
import * as style from './style';

export default function EmptyPage() {
  return (
    <style.EmptyPageContainer>
      <style.Img src="/images/empty_page.png" alt="empty image" />
      <Link to="/">
        <style.Message>잘못된 접근입니다! 홈으로 가볼까요?</style.Message>
      </Link>
    </style.EmptyPageContainer>
  );
}
