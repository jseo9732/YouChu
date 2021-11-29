import RecommendCard from 'components/RecommendCard';
import ReviewCard from 'components/ReviewCard';
import * as style from './style';

export default function Home() {
  const slide_L = () =>
    document.getElementById('slider').scrollBy({
      top: 0,
      left: -280,
      behavior: 'smooth',
    });

  const slide_R = () =>
    document.getElementById('slider').scrollBy({
      top: 0,
      left: 280,
      behavior: 'smooth',
    });

  return (
    <style.HomeContainer>
      <style.BannerContainer>
        <style.TextField>
          여러분들만 아는 <br />
          <style.RedSpan>유튜버</style.RedSpan>들을 리뷰해봐요 👍
        </style.TextField>
        <style.BannerImg src='/images/banner.png' />
      </style.BannerContainer>
      <style.RowContainer>
        <style.RowTitle left='35px'>이번주 리뷰가 많은 유튜버 ✌</style.RowTitle>
        <style.RowDescription left='35px'>리뷰 보러 가보실까요?</style.RowDescription>
        <style.ReviewContainer>
          <style.HandleBtn onClick={slide_L}>
            <i className="fas fa-chevron-left"></i>
          </style.HandleBtn>
          <style.ReviewCardContainer id="slider">
            <ReviewCard
              img="월간 윤종신"
              category="음악"
              channelName="월간 윤종신"
              subscriberCount="22.5만"
              reviewCount="381"
              ratings="5.0"
              bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
            />
            <ReviewCard
              img="딩고 뮤직"
              category="엔터테이너"
              channelName="딩고 뮤직 / dingo music"
              subscriberCount="329만"
              reviewCount="500"
              ratings="3.3"
              bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
            />
            <ReviewCard
              img="고닝 gonying"
              category="여행"
              channelName="고닝 gonying"
              subscriberCount="21"
              reviewCount="2"
              ratings="5.0"
              bestReview="병맛이라 재밌어요 기대가 되는 채널이에요."
            />
            <ReviewCard
              img="월간 윤종신"
              category="음악"
              channelName="월간 윤종신"
              subscriberCount="22.5만"
              reviewCount="381"
              ratings="5.0"
              bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
            />
            <ReviewCard
              img="월간 윤종신"
              category="음악"
              channelName="월간 윤종신"
              subscriberCount="22.5만"
              reviewCount="381"
              ratings="5.0"
              bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
            />
            <ReviewCard
              img="월간 윤종신"
              category="음악"
              channelName="월간 윤종신"
              subscriberCount="22.5만"
              reviewCount="381"
              ratings="5.0"
              bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
            />
            <ReviewCard
              img="월간 윤종신"
              category="음악"
              channelName="월간 윤종신"
              subscriberCount="22.5만"
              reviewCount="381"
              ratings="5.0"
              bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
            />
            <ReviewCard
              img="월간 윤종신"
              category="음악"
              channelName="월간 윤종신"
              subscriberCount="22.5만"
              reviewCount="381"
              ratings="5.0"
              bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
            />
            <ReviewCard
              img="월간 윤종신"
              category="음악"
              channelName="월간 윤종신"
              subscriberCount="22.5만"
              reviewCount="381"
              ratings="5.0"
              bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
            />
            <ReviewCard
              img="월간 윤종신"
              category="음악"
              channelName="월간 윤종신"
              subscriberCount="22.5만"
              reviewCount="381"
              ratings="5.0"
              bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
            />
          </style.ReviewCardContainer>
          <style.HandleBtn onClick={slide_R}>
            <i className="fas fa-chevron-right"></i>
          </style.HandleBtn>
        </style.ReviewContainer>
      </style.RowContainer>
      <style.RowContainer width='1100px'>
        <style.RowTitle>맞춤 추천 💁</style.RowTitle>
        <style.RowDescription>여러분이 관심 있을 유튜버를 모아봤어요!</style.RowDescription>
        <style.RecommendCardContainer>
          <RecommendCard
            img="월간 윤종신"
            channelName="월간 윤종신"
            ratings="5.0"
            reviewCount="381"
            category="음악"
          />
          <RecommendCard
            img="딩고 뮤직"
            channelName="딩고 뮤직 / dingo music"
            ratings="4.0"
            reviewCount="500"
            category="엔터테이너"
          />
          <RecommendCard
            img="월간 윤종신"
            channelName="월간 윤종신"
            ratings="5.0"
            reviewCount="381"
            category="음악"
          />
          <RecommendCard
            img="월간 윤종신"
            channelName="월간 윤종신"
            ratings="5.0"
            reviewCount="381"
            category="음악"
          />
          <RecommendCard
            img="월간 윤종신"
            channelName="월간 윤종신"
            ratings="5.0"
            reviewCount="381"
            category="음악"
          />
          <RecommendCard
            img="월간 윤종신"
            channelName="월간 윤종신"
            ratings="5.0"
            reviewCount="381"
            category="음악"
          />
        </style.RecommendCardContainer>
      </style.RowContainer>
    </style.HomeContainer>
  );
}
