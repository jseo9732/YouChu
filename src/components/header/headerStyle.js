import styled from 'styled-components';
import { Button, Input } from 'semantic-ui-react';

export const Logo = styled.span`
  font-family: 'SCD-9';
  font-size: 29px;
  padding: 10px 5px;
  margin-right: 20px;
`;

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  margin: 0px 35px;
  width: 100%;
  z-index: 1;
`;

export const Background = styled.div`
  background: white;
  justify-content: left;
  display: flex;
  height: auto;
  padding: 10px 0px;
`;

export const LoginButton = styled(Button)`
  font-family: 'SHSN-M';
  &&& {
    font-size: 12px;
    margin-left: 20px;
    border-radius: 0px;
    width: 80px;
    height: 38px;
  }
`;

export const ReviewButton = styled(LoginButton)`
  &&& {
    margin-left: 15px;
    width: 140px;
  }
`;
export const RegisterButton = styled(LoginButton)`
  &&& {
    margin-left: 26px;
    width: 100px;
  }
`;

export const Search = styled(Input)`
  width: 350px;
  margin-left: 190px;
  &&& > input {
    border-radius: 40px;
  }
`;
