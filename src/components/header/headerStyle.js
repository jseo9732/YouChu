import styled from 'styled-components';
import { Button, Input } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BarIcon = styled(FontAwesomeIcon)`
  color: white;
  position: relative;
  top: 1px;
  right: 2px;
  font-size: 14px;
`;

export const Logo = styled.button`
  font-family: 'SCD-9';
  font-size: 29px;
  margin-right: 47px;
  background-color: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

// export const HeaderContainer = styled.div`
//   width: 100%;
// `;

export const Positioner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 0px;
  margin: 0px 35px;
  z-index: 2;
  background-color: #ffffff;
`;

export const Background = styled.div`
  width: 1100px;
  height: 60px;
  margin: 0px auto;
  background: white;
  display: flex;
  padding: 10px 0px;
`;

export const HeaderButton = styled(Button)`
  font-family: 'SHSN-M';
  &&& {
    font-size: 12px;
    margin-left: 20px;
    border-radius: 0px;
    width: 80px;
    height: 38px;
  }
`;

export const LoginButton = styled(HeaderButton)`
  &&& {
    background-color: white;
    border: 1px solid #efefef;
    font-weight: 600;
  }
`;

export const ReviewButton = styled(HeaderButton)`
  &&& {
    margin-left: 0px;
    margin-right: 22px;
    width: 140px;
  }
`;
export const RegisterButton = styled(HeaderButton)`
  &&& {
    margin-left: 26px;
    width: 100px;
  }
`;

export const Search = styled(Input)`
  width: 350px;
  margin-left: 210px;
  &&& > input {
    border-radius: 40px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const BottomBorderBar = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  /* height: 1px; */
  width: 100%;
  top: 60px;
  /* background-color: tomato; */
  position: fixed;
`;

export const SearchImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 38px;
  margin-left: 210px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

export const InputYoutuber = styled.input`
  border: none;
  width: 100%;
  margin-left: 20px;
  &:focus {
    outline: none;
  }
`;
