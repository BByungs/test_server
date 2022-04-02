const Content = require('../../models/content');

const resolvers = {
  Query: {
    async fetchContents() {
      return await Content.find();
    },
  },
  Mutation: {
    createContent(_, args) {
      const content = new Content({
        ...args.contentInput,
      });
      return content.save();
    },
    async deleteContent(_, args) {
      const { id } = args;
      return await Content.findByIdAndDelete(id);
    },
    async updateContent(_, args) {
      const { id, contentInput } = args;
      return await Content.findByIdAndUpdate(id, contentInput, {
        new: true,
      });
    },
  },
};

module.exports = resolvers;
