import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  width: 260px;
  height: 288px;
  margin-right: 20px;
`;

const Img = styled.img.attrs(props => ({
  src : props.src,
  alt : props.alt,
  title : props.title
}))`
  display: block;
  width: 130px;
  height: 130px;
  border: 1px solid #DEDEDE;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const Info = styled.div`
  margin: 5px;
`;

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const Category = styled.div`
  background: #F2F2F2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  color: #808084;
  font-size: 11px;
  padding: 6px 8px;
  margin-bottom: 5px;
`;

const ChannelName = styled.div`
  width: 130px;
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  padding: 5px 5px 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SubscriberCount = styled.div`
  font-size: 14px;
  color: #94969b;
  padding-bottom: 5px;
`;

const StarRatings = styled.div`
  position: relative;
  padding: 0px 5px 15px 0;
`;

const StarBase = styled.div`
  color: #D8D8D8;
  z-index: 0;
`;

const StarFill = styled.div`
  color: #F8D26A;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${props => props.ratings + '%'};
`;

const Ratings = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 0px 5px 15px 0;
`;

const ReviewCount = styled.div`
  font-size: 14px;
  color: #94969b;
  padding-bottom: 15px;
`;

const BestReviewTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const BestReview = styled.div`
  width: 250px;
  font-size: 12px;
  font-weight: lighter;
  color: #808084;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default function ReviewCard({
  category,
  channelName,
  subscriberCount,
  reviewCount,
  ratings,
  bestReview,
}) {
  const per = ratings * 20;
  return (
    <Container>
      <Img 
        src={require('./img/월간윤종신.jpg').default}
        alt={channelName}
        title={channelName}
      />
      <Info>
        <Group>
          <Category>{category}</Category>
        </Group>
        <Group>
          <ChannelName>{channelName}</ChannelName>
          <SubscriberCount>구독자 {subscriberCount} 명</SubscriberCount>
        </Group>
        <Group>
          <StarRatings>
              <StarBase>★★★★★</StarBase>
              <StarFill ratings={per}>★★★★★</StarFill>
          </StarRatings>
          <Ratings>{ratings}</Ratings>
          <ReviewCount>({reviewCount}개 리뷰)</ReviewCount>
        </Group>
        <Group>
          <BestReviewTitle>Best Review</BestReviewTitle>
          <BestReview>{bestReview}</BestReview>
        </Group>
      </Info>
    </Container>
  );
}
