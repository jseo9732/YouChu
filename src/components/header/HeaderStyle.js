import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 2;
  background-color: #ffffff;

  box-shadow: 0;
  transition: box-shadow 0.5s;
  &.scrolled {
    box-shadow: 0 0 15px #dedede;
    border: 1px solid #dedede;
  }
`;

export const HeaderBox = styled.div`
  width: 1100px;
  height: 80px;
  margin: 0px auto;
  display: flex;
  padding: 27px 0 13px 0;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 100%;
    padding: 24px 24px 20px 24px;
    align-items: flex-start;
  }
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    align-items: flex-start;
    flex-direction: ${(props) => props.direction || 'row'};
  }
`;

export const LogoLink = styled(Link)`
  height: 40px;
  margin-right: 80px;
  /* 로고 폰트로 하게되면 적용 */
  /* font-family: 'SCD-9';
  text-align: left;
  font-size: 29px;
  line-height: 34px;
  letter-spacing: 0px;
  color: #000000;
  &:hover {
    color: #000000;
  } */
  @media ${(props) => props.theme.tablet} {
    margin: 0 0 20px 0;
  }
`;

export const LogoImg = styled.img`
  width: 62px;
  height: 40px;
`;

export const HeaderNav = styled(NavLink)`
  font-family: 'SHSN-R';
  text-align: center;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-left: 40px;
  &:hover {
    color: #000000;
  }
  &.active {
    font-family: 'SHSN-B';
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
    line-height: 21px;
    margin: 0 20px 0 0;
  }
`;

export const SearchNav = styled(NavLink)`
  &.active {
    display: none;
  }
  cursor: default;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 350px;
  height: 38px;
  border: 1px solid #dedede;
  padding: 9px 20px;
  &:focus-within {
    border: 1px solid #3ea6ff;
  }

  @media ${(props) => props.theme.tablet} {
    border: none;
    width: 20px;
    height: 30px;
    padding: 0px;
    margin-right: 4px;
  }
`;

export const SearchImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  border: none;
  width: 248px;
  height: 18px;
  margin: 0 20px;

  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  &::placeholder {
    color: #94969b;
  }
  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

// 검색 드랍 다운
export const SearchDropdownContainer = styled.div`
  position: absolute;
  top: 69px;
  width: 350px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 15px #00000029;
  opacity: 1;
  padding: 10px 0;
`;

export const RelatedSearch = styled.div`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  padding: 5px 20px;
  color: #eb3323;
`;

export const SearchResult = styled(Link)`
  font-family: 'SHSN-R';
  display: block;
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  padding: 5px 20px;
  color: #000000;
  &:hover {
    background-color: #f9fafc;
    cursor: pointer;
    color: #000000;
  }
`;

export const HeaderButton = styled(Button)`
  font-family: 'SHSN-M';
  &&& {
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0px;
    border-radius: 0px;
    width: 80px;
    height: 38px;
    padding: 0;
    margin: 0;
  }
`;

export const RegisterButton = styled(HeaderButton)`
  &&& {
    margin-left: 10px;
    width: 100px;
  }

  @media ${(props) => props.theme.tablet} {
    &&& {
      width: 80px;
      height: 30px;
      font-size: 13px;
      line-height: 17px;
    }
  }
`;

export const LoginButton = styled(HeaderButton)`
  &&& {
    margin-left: 10px;
    background-color: #ffffff;
    border: 1px solid #dedede;
    color: #000000;
  }

  @media ${(props) => props.theme.tablet} {
    &&& {
      width: 80px;
      height: 30px;
      font-size: 13px;
      line-height: 17px;
    }
  }
`;

export const GoogleAvatar = styled.img`
  margin-left: 10px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #dedede;
`;
