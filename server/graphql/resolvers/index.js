const contentResolvers = require('./content');
const kakaoAuthResolvers = require('./kakaoAuth');

const resolvers = {
  Query: {
    ...contentResolvers.Query,
  },
  Mutation: {
    ...contentResolvers.Mutation,
    ...kakaoAuthResolvers.Mutation,
  },
};

module.exports = resolvers;
