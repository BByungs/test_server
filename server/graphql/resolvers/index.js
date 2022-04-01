const contentResolvers = require('./content');
const kakaoAuthResolvers = require('./kakaoAuth');
const userResolvers = require('./user');

const resolvers = {
  Query: {
    ...contentResolvers.Query,
  },
  Mutation: {
    ...contentResolvers.Mutation,
    ...kakaoAuthResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};

module.exports = resolvers;
