const { default: axios } = require('axios');
const Users = require('../../models/user');

const resolvers = {
  Mutation: {
    async kakaoAuth(_, args) {
      try {
        const { code } = args;
        const url = 'https://kauth.kakao.com/oauth/token';
        const data = {
          grant_type: 'authorization_code',
          client_id: '90419f00e4d2c484541a8d3f8edaa7f3',
          redirect_uri: 'http://localhost:3000/auth/kakao',
          code: code.code,
          // client_secret: 'nwjOR3o7VcxZXhTsVrYHIwyAJqhEXfBh',
        };

        const queryStringBody = Object.keys(data)
          .map((k) => encodeURIComponent(k) + '=' + encodeURI(data[k]))
          .join('&');

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

        let isExist = false;
        const users = await Users.find();
        const user = await Users.findOne({
          email: getUserData.data.kakao_account.email,
        });
        users.forEach((user) => {
          if (user.email === getUserData.data.kakao_account.email) {
            isExist = true;
          }
        });
        console.log('userTest', getUserData, isExist, user);
        if (isExist) {
          return {
            data: user,
            joined: true,
          };
        } else {
          return {
            data: {
              email: getUserData.data.kakao_account.email,
              isAdmin: false,
              phoneNumber: '',
              profile: {
                nickname: getUserData.data.properties.nickname,
                profile_image_url: getUserData.data.properties.profile_image,
                thumbnail_image_url:
                  getUserData.data.properties.thumbnail_image,
              },
            },
            joined: false,
          };
        }
      } catch (err) {
        console.log('error :', err);
      }
    },
  },
};

module.exports = resolvers;
