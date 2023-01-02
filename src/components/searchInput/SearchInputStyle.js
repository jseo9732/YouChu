import styled from 'styled-components';

export const SearchBox = styled.div`
  position: relative;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: ${({ page }) =>
    page === 'header' ? '350px' : page === 'registration' ? '380px' : '100%'};
  height: ${({ page }) => (page === 'header' ? '38px' : '40px')};
  border: 1px solid #dedede;
  border-radius: ${({ page }) =>
    page === 'header' ? '0' : page === 'registration' ? '5px' : '2px'};
  padding: ${({ page }) => (page === 'registration' ? '0 3px' : 0)};
  margin-bottom: ${({ page }) => (page === 'registration' ? '30px' : 0)};
  &:focus-within {
    border: 1px solid #3ea6ff;
  }
  @media ${(props) => props.theme.tablet} {
    border: ${({ page }) => (page === 'header' ? 'none' : '')};
    width: ${({ page }) =>
      page === 'header' ? '18px' : page === 'registration' ? '100%' : ''};
    height: ${({ page }) => (page === 'header' ? '30px' : '')};
    padding: ${({ page }) => (page === 'header' ? '0' : '')};
  }
`;

export const SearchImg = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-left: 20px;
  @media ${(props) => props.theme.tablet} {
    margin-left: 0;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  padding: ${({ page }) =>
    page === 'header'
      ? '0 20px'
      : page === 'registration'
      ? '0 15px'
      : '0 16px'};

  text-align: left;
  font-family: ${({ page }) => (page === 'registration' ? 'SHSN-L' : 'SHSN-M')};
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  letter-spacing: 0px;
  ::placeholder {
    color: #94969b;
  }
  :focus {
    outline: none;
  }
  @media ${(props) => props.theme.tablet} {
    display: ${({ page }) => (page === 'header' ? 'none' : '')};
  }
`;
