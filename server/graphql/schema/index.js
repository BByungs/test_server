const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    fetchContents: [Content]
  }
  type Mutation {
    createContent(contentInput: ContentInput): Content!
    deleteContent(id: ID!): Content!
    updateContent(id: ID!, contentInput: ContentInput): Content!
    kakaoAuth(code: CodeInput!): KakaoAuth_Return!
  }
  input ContentInput {
    content: String
  }
  input CodeInput {
    code: String
  }

  type Content {
    id: ID
    content: String
    createdAt: String
  }

  type KakaoAuth_Return {
    code: String
  }
`;

module.exports = typeDefs;
