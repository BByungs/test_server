const contentResolvers = require('./content');

const resolvers = {
  Query: {
    ...contentResolvers.Query,
  },
  Mutation: {
    ...contentResolvers.Mutation,
  },
};

module.exports = resolvers;
