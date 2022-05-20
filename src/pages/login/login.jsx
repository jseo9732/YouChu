import * as style from './style';
import { GoogleLogin } from 'react-google-login';
import loginAPI from 'api/loginAPI';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const history = useHistory();

  //로그인 성공했을 떄 처리 함수 
  const successGoogle = (res) => {
    loginFunc(res.code);
  }

  const loginFunc = async (code) => {
    await loginAPI
      .postLogin({
        code: code
      })
      .then((res) => {
        localStorage.setItem('refreshToken', res.data.authToken.refreshToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.authToken.accessToken}`;
        if (res.data.isRegistered) {
          history.goBack();
        } else {
          history.push("/signup")
        }
      })
      .catch((err) => {
        console.error(err);
      })
  };

  //로그인 실패했을 때 처리 함수 
  const failGoogle = (res) => {
    alert("구글 로그인에 실패하였습니다");
  }
  return (
    <style.LoginContainer>
      <style.LoginBox>
        <style.Title>유튜버를 추천받고<br /> 유튜버 리뷰를 남겨보세요!</style.Title>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
              <style.LoginBtn onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <style.GoogleLogo />
                <style.LoginLetter>구글로 로그인</style.LoginLetter>
              </style.LoginBtn>
            )}
            onSuccess={successGoogle}
            onFailure={failGoogle}
            cookiePolicy={'single_host_origin'}
            responseType="code"
          />
      </style.LoginBox>
    </style.LoginContainer>
  );
}