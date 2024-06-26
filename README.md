<img src="https://github.com/teamyouchu/youchu-front/assets/79249376/1abc6433-f174-4f5c-8e2a-35d2c457d895" width="400" />
<img src="https://github.com/teamyouchu/youchu-front/assets/79249376/4fb04a10-4b43-4fee-af17-e6cb856cc9e4" width="400" />
<img src="https://github.com/teamyouchu/youchu-front/assets/79249376/e409010b-2784-4316-bab6-e70bc7d9e45e" width="400" />
<img src="https://github.com/teamyouchu/youchu-front/assets/79249376/f73197b6-0754-48c3-a233-504747685128" width="400" />

# 프로젝트 소개
❓ 유튜브 채널을 평가하고 코멘트를 남기며 자신의 취향에 맞는 채널을 추천 받을 수 있는 서비스

# 프로젝트 기획 배경
자신만 아는 유튜브 채널을 다른 사람에게 추천하고 나의 취향에 맞는 추천 받고 싶으신 적 있으신가요?  
유튜브 자체의 알고리즘을 통해 추천 받은 영상이 아닌 비슷한 취향을 가진 시청자의 리뷰와 평점을 보고 추천 받을 수 있는 서비스를 만들기 위해 기획하게 되었습니다.

# 프로젝트 상세 소개
## 💡 핵심 기능
- 회원가입 / 회원 정보 수정
- 구글 로그인/ 로그아웃 기능
- 유튜브 채널 등록
- 유튜브 채널 검색
- 유튜브 채널 평점 / 리뷰 남기기
- 유튜브 리뷰 좋아요 기능
- 유튜브 채널 맞춤 추천

## 🙋 타켓 유저
- 구독자가 적은 유튜브 채널을 추천하고 싶은 구독자
- 자신의 채널을 홍보하고 싶은 유튜버
- 자신과 취향이 비슷한 시청자들의 데이터를 기반으로 유튜브 채널을 추천 받고 싶은 사람
- 유튜브 채널에 대한 다른 사람의 평가를 보고 싶은 사람

## 🎈 기대 효과
- 구독자를 늘리고 싶은 유튜버의 홍보 효과를 얻을 수 있고 자신을 좋아할 시청자의 유입을 늘릴 수 있습니다.
- 자신의 취향에 맞는 유튜버를 추천 받아 콘텐츠의 접근성을 낮추고 재밌는 콘텐츠를 즐길 수 있습니다.

# 프로젝트 결과물
- 배포 링크  
    [YouChu](https://legacy.youchu.io)
    > 🔑 테스트용 계정  
    > 구글 계정으로 로그인 가능
- 깃허브 링크  
    [YouChu front Github](https://github.com/teamyouchu/youchu-front)
- XD 링크  
    [YouChu XD](https://xd.adobe.com/view/e05000c3-6a02-49a2-92ac-ae3bfa5a40b7-b503/)
- API 명세서  
    [Youchu API - Swagger UI](https://legacy-api.youchu.io/docs)

# 프로젝트 기간
2021년 10월 → 2022년 12월

# 프로젝트 팀원
- 기획 및 디자인 1명
- 프론트엔드 1명
- 백엔드 3명

# 사용한 기술 스택
`JavaScript` `React`  
`JWT` `Axios` `Context API` ~~`react-google-login`~~ → `react-oauth-goolgle`  
`styled-components` `MUI` `Semantic UI`

# 이슈 및 문제해결
<details>
    <summary>JWT Token을 이용한 자동 로그인 구현</summary>

### 상황
JWT Token의 로그인을 구현해야하는 상황
첫 로그인 구현으로 JWT 토큰에 대한 이해도 부족했으며 Access Token**과** Refresh Token을 어디에 저장해야하는지를 알지 못해서 구현에 어려움을 겪었다.

### 문제 1
JWT Token은 유효 기간이 정해져 있어 이 기간이 지나면 Token은 만료되어 로그인이 중단되어 사용자의 잦은 로그인이 필요해 사용성이 저하된다.
### 해결 1
Refresh Token을 함께 발급하여 Access Token이 만료되었을 때 Refresh Token을 사용하여 새로운 Access Token을 발급받는다.
  
### 문제2
Token 탈취 및 악용으로 인한 보안 문제
### 해결2
1. 모든 Token을 `Cookie`에 저장
  쿠키는 CSRF(Cross-Site Request Forgery) 공격에 취약하지만 HTTP Only, secure 등의 옵션으로 방지할 수 있다.
2. 모든 Token을 `Web Storage`에 저장
    쿠키는 4KB까지 밖에 저장공간을 가지지 못하지만 웹 스토리지는 약 5MB정도의 저장공간을 가질 수 있다.
    웹 스토리지는 자바스크립트로 제어 가능하여 XSS공격에 대한 위험이 있다.
    
    1. `Local Storage`
        로컬 스토리지(local storage)는 데이터를 브라우저에 반영구적으로 저장하며, 브라우저를 종료 후 재시작해도 데이터가 남아있습니다. 또한 다른 창과 브라우저를 통해서도 접근이 가능하다.
        자바스크립트를 통해 localstorage에 데이터를 저장 할 수 있다.
        
    2. `Session Storage`
        세션 스토리지(session storage)는 로컬 스토리지와 유사한 기능을 하고 있으나 브라우저가 닫히면 데이터는 사라지게 되며 다른 창과 브라우저로의 데이터 공유또한 불가능하다.
        

> 결정: 백엔드 개발자와 의논을 통해 API 응답에 Access Token과 ****Refresh Token을 보내주고 프론트엔드가 2-a번의 해결방안인 `Local Storage`에 저장하는 방식으로 로그인을 구현하기로 결정했다.

결정 이유: `Session Storage`에 저장하게되면 브라우저가 닫히면 데이터는 사라지게 되어 결국 사용자는 브라우저를 닫게되면 재로그인 해야한다는 점은 잦은 로그인이 필요하다는 점이 적절한 해결 방안이 아니라고 생각되었고 첫 로그인 구현으로 쿠키 방식보다는 비교적 쉽다고 판단되는 `Local Storage`에 저장하는 방식을 채택했다.
> 

### **아쉬운 점**
`Local Storage`에 저장하면 첫 로그인 구현인 나에게 구현이 비교적 쉽다는 장점이 있어서 이번 구현에서 채택을 했지만 XSS 공격에 취약하는 단점이 있다.


> **XSS란? (Cross Site Scripting)**  
공격자가 상대방의 브라우저에 스크립트가 실행되도록 해 사용자의 세션을 가로채거나, 웹사이트를 변조하거나, 악의적 콘텐츠를 삽입하거나, 피싱 공격을 진행하는 것
로그인 구현에서의 XSS의 위험성은 페이지 사용자의 Token을 가로채서 공격자가 불법적으로 정상 사용자인척 할 수 있다는 문제가 있다.


`Cookie`에 저장하게되면 HttpOnly 옵션을 백엔드에서 선택하여 XSS 공격을 방지할 수 있다는 장정이 있다. 하지만 CSRF 공격에 대비해야하는 문제가 있다.

> **CSRF란? (Cross-Site Request Forgery)**
사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(데이터 수정, 삭제, 등록 등)을 특정 웹사이트에 요청하게하는 공격
공격자는 사용자의 계정에 대한 완전한 제어권을 얻을 수도 있다는 문제가 있다.

이 보안 문제를 방지하기 위해서

- secure flag를 true로 설정하여 Https인 경우에만 브라우저에서 Cookie로 설정하여 활용하도록 한다.
- `SameSite=strict`로 설정한다.
만약 백엔드 서버와 프론트엔드 서버가 같은 site를 사용하지 못하는 경우에는 `SameSite=none`으로 설정하고 CORS Origin을 특정하여 다른 사이트에서의 요청이 불가능하도록 방지한다.

⇒ 다음 프로젝트에서는 `Local Storage`가 아닌 `Cookie`에 저장하여 보안문제에 최대한 대처할 수 있는 방식으로 구현하도록 할 예정.

적용한 프로젝트: [쿠키를 이용한 로그인 구현](https://www.notion.so/208eab1c724a4935951c89cf28d81bac?pvs=21) 

### 코드

```jsx
import axios from 'axios';

export const apiUrl = 'https://legacy-api.youchu.io/v1';

axios.defaults.baseURL = apiUrl;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

axios.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      // localStorage에 accessToken과 refreshToken가 있으면 (로그인 기록이 있으면)
      if (config.url === '/refresh') {
        // refreshToken 재발급 api는 Authorization에 refreshToken 삽입해서 요청
        config.headers.Authorization = `Bearer ${refreshToken}`;
      } else {
        // 나머지 api 요청은 Authorization에 accessToken 삽입해서 요청
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    // 로그인 기록이 없을 땐 config 수정없이 그냥 요청 보냄
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: {
        status,
        data: { type },
      },
    } = error;
    if (status === 401) {
      // 401 에러 중에서
      if (type === 'expired.access_token') {
        // accessToken 만료면 refreshToken 재발급 요청
        const originalRequest = config;
        const { data } = await axios.post('/refresh');
        // 성공적으로 재발급 받으면 데이터 저장
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          data;
        // localStorage에 새로 발급 받은 token 저장
        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        // 오류났던 api 요청 다시 재요청
        return axios(originalRequest);
      }
      if (type === 'expired.refresh_token') {
        // refreshToken 만료면 아예 로그아웃
        alert('인증 정보가 만료되었습니다. 다시 로그인 후 시도해 주세요.');
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
        // TODO 서지수 로그인화면으로 이동가능한지 확인
      }
    }
    return Promise.reject(error);
  },
);

export default axios;
```
</details>

<details>
    <summary>로그인한 유저만 접근 가능한 페이지 제한</summary>


### 상황

로그인 하지않은 사용자가 접근하면 안되는 페이지에 접근했을 때 로그인 페이지로 이동 시켰다가 로그인 또는 회원가입을 한 후에 처음 접근을 시도했던 페이지로 다시 리다이렉트 시켜야하는 상황

### 문제 1

UI/UX 혼란 - 잘못된 리다이렉트 로직으로 인해 사용자가 로그인 또는 회원가입 페이지로 계속 이동하여 루프가 발생할 수 있다.

### 해결 1

1. 직접 헤더에 있는 로그인 버튼을 클릭하여 로그인/회원가입을 시도한 경우 ‘로그인’버튼을 클릭한 페이지로 이동 시킨다.
2. 로그인이 필수적으로 필요한 페이지에 접근하여 로그인 페이지로 리다이렉트된 경우라면 로그인/회원가입 후 원래 접근하여던 페이지로 리다이렉트 시킨다.

위 두가지 방법으로 동작하도록 설계하여 혼란을 최대한 방지할 수 있도록 했다.

```jsx
if (from === 'button') {
  history.goBack();
} else {
  history.replace(`${from.pathname}`);
}
```

### 문제 2

리다이렉트 경로 관리 - 사용자가 로그인 또는 회원가입 후 원래 접근하려던 페이지로 리다이렉트 시키기 위해 접근한 페이지 경로를 저장해야한다.

### 해결 2

`react-router-dom`의 기능 중 다음으로 이동할 페이지에 상태값을 전달할 수 있는 `state props`을 이용하여 로그인 전 어느 페이지에서 왔는지를 전달하여 해결한다.

### 최종 해결

PrivateRoute 컴포넌트를 생성하여 `react-router-dom`의 `Redirect, Route`를 이용하여 `Local Storage`에 `Refresh Token`이 없다면 로그인 하지 않은 사용자, 있다면 로그인한 사용자로 판단하여 로그인을 한 사용자라면 원래 접근하려던 페이지로 가고 비로그인 사용자면 로그인 페이지로 리다이렉트 시키도록 했다.

### 아쉬운 점

로그인 여부를 판단하는 것이 단순히 `Local Storage`에 `Refresh Token` 존재 여부로만 판단한 것이 아쉽다. 또, 한 함수에 여러 기능을 하는 코드를 다 작성하지 않고 함수나 컴포넌트로 따로 분리해서 코드를 작성하고 싶다.

### 코드

```jsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('refreshToken') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
                msg1: '로그인이 필요한 서비스입니다.',
                msg2: '로그인 후 이용해주세요!',
              },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
```

```jsx
//로그인 성공했을 떄 처리 함수
  const successGoogle = async (res) => {
    await authAPI
      .postLogin({
        code: res.code,
        redirectUri: window.location.origin,
      })
      .then((res) => {
        localStorage.setItem('accessToken', res.data.authToken.accessToken);
        localStorage.setItem('refreshToken', res.data.authToken.refreshToken);
        if (res.data.isRegistered) {
          if (from === 'button') {
            history.goBack();
          } else {
            history.replace(`${from.pathname}`);
          }
          // 로그인 시 사용자 상태값 수정
          userAPI
            .getMe()
            .then(({ data }) => {
              setUserObj({
                ...userObj,
                isLogin: true,
                data,
              });
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          history.push({
            pathname: '/signup',
            state: { from: from },
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
```
</details>

# 리팩토링
<details>
    <summary>스켈레톤 도입</summary>

### 상황

사용자가 유튜버 목록, 유튜버 설명을 조회할 때 데이터를 받아오기 전까지 흰 화면이 보여지는게 사용자 경험이 떨어진다고 판단했다.

페이지가 렌더링될 때 스켈레톤을 먼저 보여주어 사용자에게 잘못된 접근이나 문제가 생긴 것이 아닌 데이터를 받아오는 상황이라는 의미를 전달해준다. 이를 통해서 사용자 경험을 개선하고 데이터를 받아온 뒤 그 데이터를 사용자에게 띄어주는 방식으로 개선했다.

### 해결

`useState`를 객체로 관리하여 `isLoading`이 처음에는 `false`였다가 데이터를 받아오면 `isLoading`을 `true`로 변경해준다.

`isLoading`이 `false`일 때는 스켈레톤을 보여주고 `true`일 때는 스켈레톤이 아닌 실제 데이터를 보여주는 방식으로 구현했다.

### 아쉬운 점

이런 방식으로는 처음 데이터를 불러올 때만 스켈레톤을 보여줄 수 있고 더 많은 데이터를 불러올 때는 스켈레톤을 보여줄 수 없다는 단점이 있다고 생각했다.

많은 양의 유튜버 목록을 불러올 때 무한 스크롤을 적용했는데 이미 불러온 데이터 + 스켈레톤(추가로 불러올 유튜버 목록)을 보여주는 방식을 고려해봐야할 것 같다.

### 코드

```jsx
const [bestYoutuber, setBestYoutuber] = useState({
  isLoading: false,
  data: [],
});
  
const getBestYoutuber = async () => {
  await youtuberAPI
    .getMostYoutubers()
    .then((res) => {
      setBestYoutuber({
        ...bestYoutuber,
        isLoading: true,
        data: res.data.data,
      });
    })
    .catch((err) => console.log(err));
};

useEffect(() => {
  getBestYoutuber();
  return () => {
    setBestYoutuber({
      ...bestYoutuber,
      isLoading: false,
      data: [],
    });
  };
}, []);
```
</details>

<details>
    <summary>구글 Oauth를 만료로 리팩토링</summary>

### 상황

처음 구현할 때 사용했던 라이브러리의 구글 Oauth 방식(Google 로그인 자바스크립트 라이브러리)이 구글에서 지원이 종료되었다.

[지원 중단 및 지원 종료  |  Authentication  |  Google for Developers](https://developers.google.com/identity/sign-in/web/deprecation-and-sunset?hl=ko)

### 문제

새로운 웹용 Google ID 서비스 SDK를 사용해야 하게 바뀌면서 구글 세션에 로그인된 기록이 존재하면 사용자의 개인화에 맞는 버튼을 보여주는 ‘개인화된 로그인 버튼’과 한 번의 클릭으로 신규 사용자를 등록 또는 로그인할 수 있는 ‘One tap’ 기능이 추가되면서 전에 구현했던 디자인이 아닌 구글에서 제공하는 디자인을 적용해야하는 것으로 보였다.

또한, 백엔드 코드가 구글에 로그인 요청을 보낸 뒤 구글로 부터 ‘코드’를 받으면 백엔드에게 넘겨주는 방식으로 구현되어 있는데 새로운 방식에서 ‘코드’를 받는 방식을 찾지 못했다.

### 해결

`react-oauth/google`라이브러리가 프론트엔드에서 로그인 요청을 보낸 뒤 코드를 제공 받을 수 있으며 로그인 버튼의 디자인도 원하는 방식으로 구현할 수 있어서 이 라이브러리를 선택하게 되었다.

### 코드

```jsx
import { useGoogleLogin } from '@react-oauth/google';

...

const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (codeResponse) => successGoogle(codeResponse.code),
    onError: (err) => console.log('Login Failed', err),
  });

  return (
    <>
      ...
          <button className="login_btn" onClick={login}>
            <div className="LoginLetter">
              <Image
                src={'/images/google logo.png'}
                alt={'Google logo'}
                width={18}
                height={18}
                style={{ position: 'absolute', left: '-32px', top: '0.5px' }}
              />
              구글로 로그인
            </div>
          </button>
      ...
		<>
```
</details>

# 회고
<details>
    <summary>KPT</summary>

### **Keep**

- 웹 개발에 대한 이론만 공부하다가 처음으로 프로젝트에 참여하여 기획자가 원하는 기능을 구현하는 경험을 할 수 있었다.
- 첫 협업이라 어디까지가 백엔드의 영역인지 나(프론트엔드)의 영역인지 구분하는 것이 어려웠지만 여러 번의 회의를 통해 구현해보고 싶은 방식으로 정하는 대신 자신이 중점적으로 담당을 하는 등의 방식이나 검색을 통해 대체적으로 담당하는 파트가 있는지 이유가 무엇인지 확인해보고 정하는 등의 방식으로 조율하여 원할하게 진행할 수 있었다.
- `styled-components`를 처음 공부하여 프로젝트에 적용하면서 CSS-in-JS에 대한 이해를 높이고 중복 class명 방지와 중복되는 디자인에 코드를 상속받아 재사용 및 활용하는 경험을 할 수 있었다.

### **Problem**

- 사용자의 정보 관리를 위해 상태 관리를 `Context API`로 사용하여 아쉬움이 남는다.
- 직접 프로젝트를 설계해본 적이 없어 요령이 없다보니 재사용될 코드인지 등을 고려하지 못하고 구현하는 대로 급하게 컴포넌트를 만들다 보니 지저분하게 구성한 것 같아서 아쉬움이 남는다.
- 한 파일에 비즈니스 로직과 뷰 로직을 분리하지 못하여 너무 많은 코드가 있어 유지보수에 적합하지 못하다는 생각이 들어 아쉽다.

### **Try**

- 상태관리 라이브러리를 공부하여 다음 프로젝트에서 적용 예정이다.
    
    ⇒ 이 후 여러 프로젝트에서 Recoil 공부 후 적용
    
- 재사용할 수 있는 코드를 고려하여 컴포넌트를 정리하고 중복되는 코드 최소화, 비즈니스 로직을 분리하여 유지보수에 용이한 코드로 리팩토링 예정이다.
- JWT 토큰을 `Local Storage`가 아닌 `Cookie`에 저장하여 보안문제에 최대한 방지할 수 있는 방식으로 구현하도록 할 예정이다.
    
    ⇒ 적용한 프로젝트: [쿠키를 이용한 로그인 구현](https://www.notion.so/208eab1c724a4935951c89cf28d81bac?pvs=21)

</details>
