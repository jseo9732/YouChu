import * as style from './style';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SearchInput from 'components/searchInput/SearchInput';

export default function Search({ setIsShow }) {
  // esc 키 누르면 뒤로가기
  const history = useHistory();
  const escFunction = (e) => {
    if (e.keyCode === 27) {
      history.goBack();
    }
  };

  // Header, Footer 안 보이게 하는 코드 + keydown 인식
  useEffect(() => {
    setIsShow(false);
    document.addEventListener('keydown', escFunction);
    return () => {
      setIsShow(true);
      document.removeEventListener('keydown', escFunction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <style.SearchPageContainer>
      <style.HeaderBox>
        <style.SearchFlex>
          <SearchInput page={'search'} />
        </style.SearchFlex>
        <style.Xmark
          src={require('assets/images/xmark.svg').default}
          onClick={() => {
            history.goBack();
          }}
        />
      </style.HeaderBox>
    </style.SearchPageContainer>
  );
}
