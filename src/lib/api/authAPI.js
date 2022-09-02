import axios from './config';

const authAPI = {
  // 로그인
  postLogin(data) {
    return axios.post('/login', data);
  },
  // 엑세스토큰 만료 시 토큰 재요청
  postRefresh() {
    const refreshToken = localStorage.getItem('refreshToken');
    return axios.post(
      '/refresh',
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );
  },
  // 회원가입
  putSignup(data) {
    return axios.put('/register', data);
  },
};

export default authAPI;
