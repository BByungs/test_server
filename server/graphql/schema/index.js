const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    fetchContents: [Content]
  }
  type Mutation {
    createContent(contentInput: ContentInput): Content!
    deleteContent(id: ID!): Content!
    updateContent(id: ID!, contentInput: ContentInput): Content!
  }
  input ContentInput {
    content: String
  }
  type Content {
    id: ID
    content: String
    createdAt: String
  }
`;

module.exports = typeDefs;
