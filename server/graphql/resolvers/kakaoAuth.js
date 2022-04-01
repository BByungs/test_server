const { default: axios } = require('axios');
const KakaoAuth = require('../../models/kakaoAuth.js');

const resolvers = {
  Mutation: {
    async kakaoAuth(_, args) {
      try {
        const { code } = args;
        const url = 'https://kauth.kakao.com/oauth/token';
        const data = {
          grant_type: 'authorization_code',
          client_id: '90419f00e4d2c484541a8d3f8edaa7f3',
          // client_secret: 'nwjOR3o7VcxZXhTsVrYHIwyAJqhEXfBh',
          redirect_uri: 'http://localhost:3000/auth/kakao',
          code: code.code,
        };

        const queryStringBody = Object.keys(data)
          .map((k) => encodeURIComponent(k) + '=' + encodeURI(data[k])) // ['grant_type=authorization_code', 'client_id=90419f00e4d2c484541a8d3f8edaa7f3', ....]
          .join('&'); // 'gran_type=authorization_code&client_id=90419f00e4d2c484541a8d3f8edaa7f3.....'

        const getAccessToken = await axios.post(url, queryStringBody, {
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        });

        const getUserData = await axios.get(
          'https://kapi.kakao.com/v2/user/me',
          {
            headers: {
              authorization: `Bearer ${getAccessToken.data.access_token}`,
            },
          }
        );

        // USER_DB 에서 로그인한 유저 데이터의 Email을 비교해서
        //              일반 사용자(Collection1) / 시설 관리자(Collection2)
        //              사용자 { 시설관리자냐?: true } Ref ->
        // 존재한다면 true , 아니라면 false값 반환

        console.log(getUserData.data, getUserData.data.kakao_account);

        return code;
      } catch (err) {
        console.log('error:', err);
      }
    },
  },
};

module.exports = resolvers;
