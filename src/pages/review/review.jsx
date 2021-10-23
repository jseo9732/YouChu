import React from 'react';
import * as style from './style';
import { useLocation } from 'react-router';

function YoutuberHeader({ data }) {
  return (
    <style.YoutuberContainer>
      <style.RcImg src={data.img} alt={data.channelName} title={data.channelName} />
      <style.YoutudberInfo>
        <style.YoutuberHeaderTitle>{data.channelName}</style.YoutuberHeaderTitle>
        <style.YoutuberSummaryContainer>
          <style.YoutuberSummaryRank>★</style.YoutuberSummaryRank>
          <style.YoutuberSummaryRankScore>{data.ratings}</style.YoutuberSummaryRankScore>
          <style.YoutuberSummartRankReviewCount>
            ({data.reviewCount})개 리뷰
          </style.YoutuberSummartRankReviewCount>
        </style.YoutuberSummaryContainer>
      </style.YoutudberInfo>
    </style.YoutuberContainer>
  );
}

function YoutuberDetail({ data }) {
  console.log(data);
  return (
    <style.YoutuberDetailContainer>
      <style.YoutuberDetailTitle>{data.channelName} 소개</style.YoutuberDetailTitle>

      <style.YoutuberDetailContent>
        <style.YoutuberDetailGray>홈페이지</style.YoutuberDetailGray>
        <a href="https://www.youtube.com/channel/UCRnoBo60_joBvIQCoAiNCqg">
          https://www.youtube.com/channel/UCRnoBo60_joBvIQCoAiNCqg
        </a>
      </style.YoutuberDetailContent>

      <style.YoutuberDetailContent>
        <style.YoutuberDetailGray>구독자수</style.YoutuberDetailGray>
        <style.YoutuberDetailSubcribe>{data.subscriberCount}</style.YoutuberDetailSubcribe>
      </style.YoutuberDetailContent>

      <style.YoutuberDetailContent>
        {temp}
        <br />
        <br />
        {temp2}
      </style.YoutuberDetailContent>
    </style.YoutuberDetailContainer>
  );
}

function CategoryYoutuberCard() {
  return (
    <style.CategoryCardContainer>
      <style.CategoryImg
        src="/images/딩고 뮤직.jpg"
        alt="딩고 뮤직 / dingo music"
        title="딩고 뮤직 / dingo music"
      />
      <style.CategoryCardDetail>
        <span>딩고 뮤직</span>
        <style.CategoryTag>음악</style.CategoryTag>
      </style.CategoryCardDetail>
    </style.CategoryCardContainer>
  );
}

const temp =
  '月刊 尹鍾信 [월간 윤종신]은 프로듀서 윤종신을 주축으로 한 독자적인 매체이자 기획 전문 집단이다.2010년 3월 두 곡의 음원을 발표하는 것으로 시작된 [월간 윤종신]은 매월 음원과 뮤직비디오를 제작하는 것에서 한걸음 더 나아가 2012 년부터는 디지털 매거진을 발행하고 있으며, 2013 년부터는 음악 뿐만 아니라 문학, 영화, 사진, 미술, 게임 등 다양한 예술 분야와의 콜라보레이션을 진행하고 있다. 음원, 음반, 그림, 사진, 도서, 전시 등 콜라보레이션에 따른 다양한 형태의 결과물을 직접 기획 및 제작하고 있으며, 그것을 누구나 쉽게 즐길 수 있도록 온오프라인을 통해 홍보하고 있다. 2016 년 11 월부터는 서울 한남동에 새롭게 문을 연 스튜디오를 중심으로 보다 전방위적인 콜라보레이션 활동을 이어나갈 예정이다.';
const temp2 =
  '[MONTHLY YOONJONGSHIN] is an independent media and a project group, led by a producer Yoon Jongshin. Started by releasing two songs in March 2010, [MONTHLY YOONJONGSHIN] has been releasing the songs and music videos every month. Furthermore, [MONTHLY YOONJONGSHIN] has been publishing digital magazines since 2012, not only producing the music but also collaborating with a variety of parts of arts such as literature, movie, photograph, painting, game and so on. They do plan and produce all the songs, albums, arts, photographs, books, exhibitions by themselves, based on the collaboration';

export default function Review() {
  const location = useLocation();
  return (
    <>
      <style.GrayBar />
      <style.Contatiner>
        <style.YoutuberHeaderContainer>
          <YoutuberHeader data={location.state} />
        </style.YoutuberHeaderContainer>
        <style.YoutuberContainer>
          <YoutuberDetail data={location.state} />
          <style.CategoryLikeContainer>
            <style.CategoryTitle>{location.state.category} 유튜버</style.CategoryTitle>
            <CategoryYoutuberCard />
            <CategoryYoutuberCard />
            <CategoryYoutuberCard />
            <CategoryYoutuberCard />
          </style.CategoryLikeContainer>
        </style.YoutuberContainer>
      </style.Contatiner>
    </>
  );
}
