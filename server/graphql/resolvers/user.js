const User = require('../../models/user');

const resolvers = {
  Mutation: {
    createUser(_, args) {
      const user = new User({
        ...args.userInput,
      });
      return user.save();
    },
  },
};

module.exports = resolvers;
