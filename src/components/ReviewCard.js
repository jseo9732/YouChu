import * as style from './styles/RVCardStyle';

export default function ReviewCard({
  margin,
  img,
  category,
  channelName,
  subscriberCount,
  reviewCount,
  ratings,
  bestReview,
}) {
  const per = ratings * 20;
  const imgUrl = '/images/' + img + '.jpg';
  return (
    <style.Container margin={margin}>
      <style.Img src={imgUrl} alt={channelName} title={channelName} />
      <style.Info>
        <style.Group>
          <style.Category>{category}</style.Category>
        </style.Group>
        <style.Group>
          <style.ChannelName>{channelName}</style.ChannelName>
          <style.SubscriberCount>구독자 {subscriberCount} 명</style.SubscriberCount>
        </style.Group>
        <style.Group>
          <style.StarRatings>
            <style.StarBase>★★★★★</style.StarBase>
            <style.StarFill ratings={per}>★★★★★</style.StarFill>
          </style.StarRatings>
          <style.Ratings>{ratings}</style.Ratings>
          <style.ReviewCount>({reviewCount}개 리뷰)</style.ReviewCount>
        </style.Group>
        <style.Group>
          <style.BestReviewTitle>Best Review</style.BestReviewTitle>
          <style.BestReview>{bestReview}</style.BestReview>
        </style.Group>
      </style.Info>
    </style.Container>
  );
}
