import * as style from './styles/CardStyle';
import { useHistory } from 'react-router-dom';
import StarRating from './StarRating';

export default function RecommendCard({ id, imgUrl, channelName, ratings, reviewCount, category }) {
  /* TODO 서지수 삭제하기 */
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
    <style.RcmdContainer onClick={handleClick}>
      <style.RcmdImg src={imgUrl} alt={channelName} />
      <style.Info>
        <style.Group>
          <style.RcmdChannelName>{channelName}</style.RcmdChannelName>
        </style.Group>
        <style.Group>
          <StarRating ratings={ratings} margins={'0 5px 6px 0'} />
          <style.RcmdRatings>{ratings}</style.RcmdRatings>
          <style.RcmdReviewCount>({reviewCount}개 리뷰)</style.RcmdReviewCount>
        </style.Group>
        <style.Group>
          <style.Category>{category}</style.Category>
        </style.Group>
      </style.Info>
    </style.RcmdContainer>
  );
}
