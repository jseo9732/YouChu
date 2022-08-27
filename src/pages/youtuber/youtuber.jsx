import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as style from './style';
import YoutuberHeader from './youtuberHeader/YoutuberHeader';
import YoutuberIntro from './infoContainer/YoutuberIntro';
import YoutuberReview from './infoContainer/YoutuberReview';
import YoutuberVideos from './infoContainer/YoutuberVideos';
import RecommendYoutuber from 'components/recommendYoutuber/RecommendYoutuber';
import youtuberAPI from 'lib/api/youtuberAPI';

export default function Youtuber() {
  const { channel_id } = useParams();
  const [youtuberInfo, setYoutuberInfo] = useState({
    id: '',
    title: '',
    description: '',
    category: 0,
    thumbnail: '',
    backgroundImage: '',
    subscribes: 0,
    reviews: 0,
    rating: 0,
  });

  useEffect(() => {
    youtuberAPI
      .getYoutuber(channel_id)
      .then((res) => {
        setYoutuberInfo(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel_id]);

  return (
    <style.YoutuberContainer>
      {youtuberInfo.backgroundImage ? (
        <style.YoutuberBanner
          src={youtuberInfo.backgroundImage}
          alt="YoutuberBanner"
        />
      ) : (
        <style.GrayBar />
      )}
      <style.InfoContatiner>
        <YoutuberHeader youtuberInfo={youtuberInfo} />
        <style.MainInfoContainer>
          <style.LeftInfoContainer>
            <YoutuberIntro youtuberInfo={youtuberInfo} />
            <YoutuberReview youtuberInfo={youtuberInfo} />
            <YoutuberVideos youtuberInfo={youtuberInfo} M_display={'none'} />
          </style.LeftInfoContainer>
          <style.RightInfoContainer>
            <RecommendYoutuber category={youtuberInfo.category} />
            <RecommendYoutuber />
          </style.RightInfoContainer>
        </style.MainInfoContainer>
      </style.InfoContatiner>
    </style.YoutuberContainer>
  );
}
