import * as style from './RelatedSearchStyle.js';
import { numToKorean } from 'lib/numberFomat.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RelatedSearch({
  page,
  searchResults,
  setSearchValue,
  setIsRelatedSearch,
  setChannel,
  setRistOpen,
  // autoRef,
  // index,
  // setIndex,
  // setKeyIndex,
}) {
  // useEffect(() => {
  //   return () => {
  //     setIndex(-1);
  //     setKeyIndex(-1);
  //   };
  // }, [setIndex, setKeyIndex]);

  const [index, setIndex] = useState(-1);

  return (
    <style.SearchDropdownContainer page={page}>
      {searchResults.length > 0 && page === 'header' && (
        <style.RelatedSearch>연관 검색어</style.RelatedSearch>
      )}
      <div /*ref={autoRef}*/>
        {searchResults.map((data, idx) => (
          <style.SearchResultBox
            key={data.id}
            className={index === idx ? 'item_over' : null}
            page={page}
            as={page !== 'registration' ? Link : null}
            to={`/youtubers/review/${data.id}`}
            onClick={() => {
              setIsRelatedSearch(false);
              if (page !== 'registration') {
                setSearchValue('');
              } else {
                setSearchValue(data.title);
                setChannel({ channel_id: data.id, isExist: data.isExist });
              }
            }}
            onMouseOver={() => {
              setIndex(idx);
            }}
          >
            <style.SearchResultImg src={data.thumbnail} alt={data.name} />
            <style.SearchResultName>{data.title}</style.SearchResultName>
            <style.SearchResultSubscribers>
              구독자 {numToKorean(data.subscribes)}명
            </style.SearchResultSubscribers>
          </style.SearchResultBox>
        ))}
      </div>
      {page !== 'registration' && (
        <style.Registration>
          찾는 유튜버가 없다면?&nbsp;&nbsp;&nbsp;&nbsp;
          <style.RedRegiText onClick={() => setRistOpen(true)}>
            유튜버 등록
          </style.RedRegiText>
        </style.Registration>
      )}
    </style.SearchDropdownContainer>
  );
}
