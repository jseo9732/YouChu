import * as style from './SearchInputStyle';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
// import listAPI from 'lib/api/listAPI';
import RelatedSearch from 'components/relatedSearch/RelatedSearch';

export default function SearchInput() {
  // 화면 넓이 1170px 이하되면 연관검색어 종료
  const handleWindowResize = () => {
    if (window.innerWidth < 1170) {
      setIsSearch(false);
    }
  };
  // esc 키 누르면 연관검색어 종료
  const escFunction = (event) => {
    if (event.keyCode === 27) {
      setIsSearch(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    document.addEventListener('keydown', escFunction);
  }, []);

  // 등록된 유튜버 검색 api
  // TODO 서지수 api 완성 시 주석 제거
  // const [searchResults, setSearchResults] = useState([]);
  // const getSearchResult = async () => {
  //   await listAPI
  //     .getYoutuber(searchValue, 90, 5)
  //     .then((res) => {
  //       setSearchResults(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // 유추에 등록된 유튜버 검색 api
  const history = useHistory();
  const onSearch = (e) => {
    e.preventDefault();
    if (window.innerWidth > 1170) {
      history.push({
        pathname: '/youtubers',
        state: {
          searchValue: searchValue,
        },
      });
      setSearchValue('');
      setAutoSearchValue('');
      setIsSearch(false);
    } else {
      history.push({
        pathname: '/search',
        state: {
          searchValue: searchValue,
        },
      });
    }
  };

  // 검색어 외 영역 클릭에 따른 연관검색어 표시 여부
  const inputRef = useRef();
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    const handleCloseSearch = (e) => {
      if (
        isSearch &&
        (!inputRef.current || !inputRef.current.contains(e.target))
      ) {
        setIsSearch(false);
      }
    };
    window.addEventListener('click', handleCloseSearch);
    return () => {
      window.removeEventListener('click', handleCloseSearch);
    };
  }, [isSearch]);

  // 검색어
  const [searchValue, setSearchValue] = useState('');
  const onSearchValueChange = (e) => {
    if (autoSearchValue) {
      setAutoSearchValue(e.target.value);
    } else {
      setSearchValue(e.target.value);
    }
    if (e.target.value) {
      // 검색어가 있으면 연관검색어 표시
      setIsSearch(true);
      // getSearchResult(); TODO 서지수 api 완성 시 주석 제거
    } else {
      // 검색어가 없으면 연관검색어 미표시
      setIsSearch(false);
    }
  };

  // 위, 아래 키보드 입력 시 자동 완성
  const autoRef = useRef(null);
  const [index, setIndex] = useState(-1);
  const [keyIndex, setKeyIndex] = useState(-1);
  const [autoSearchValue, setAutoSearchValue] = useState(null);
  const handleKeyArrow = (e) => {
    if (searchValue.length > 0) {
      switch (e.key) {
        case 'ArrowDown': //키보드 down 키
          setIndex(index + 1);
          setKeyIndex(index + 1);
          if (autoRef.current?.childElementCount === index + 1) {
            setIndex(0);
            setKeyIndex(0);
          }
          break;
        case 'ArrowUp': //키보드 up 키
          setIndex(index - 1);
          setKeyIndex(index - 1);
          if (index <= 0) {
            setIndex(-1);
            setKeyIndex(-1);
          }
          break;
        default:
      }
    }
  };
  useEffect(() => {
    if (keyIndex >= 0) {
      setIsSearch(true);
      setAutoSearchValue(
        autoRef.current?.children[keyIndex].children[1].innerText,
      );
    } else {
      setIsSearch(false);
      setAutoSearchValue(null);
    }
  }, [keyIndex]);

  // useEffect(() => {
  //   console.log('searchValue: ', searchValue);
  //   console.log('auto: ', autoSearchValue);
  //   console.log('index: ', index);
  //   console.log('keyIndex: ', keyIndex);
  //   console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
  // }, [autoSearchValue, index, keyIndex, searchValue]);

  return (
    <>
      <style.SearchForm
        ref={inputRef}
        onSubmit={onSearch}
        onKeyDown={handleKeyArrow}
      >
        <style.SearchImg
          src={require('assets/images/searchIcon.svg').default}
          onClick={onSearch}
        />
        <style.SearchInput
          placeholder="유튜버 이름으로 검색하세요!"
          value={autoSearchValue ? autoSearchValue : searchValue}
          onChange={onSearchValueChange}
          onClick={() => {
            if (searchValue) setIsSearch(!isSearch);
          }}
        />
      </style.SearchForm>
      {isSearch && (
        <RelatedSearch
          page={'header'}
          // searchResults={searchResults} TODO 서지수 api 완성 시 주석 제거
          setSearchValue={setSearchValue}
          setAutoSearchValue={setAutoSearchValue}
          setIsSearch={setIsSearch}
          autoRef={autoRef}
          index={index}
          setIndex={setIndex}
          setKeyIndex={setKeyIndex}
        />
      )}
    </>
  );
}
