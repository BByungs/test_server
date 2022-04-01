const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    fetchContents: [Content]
  }
  type Mutation {
    createContent(contentInput: ContentInput): Content!
    deleteContent(id: ID!): Content!
    updateContent(id: ID!, contentInput: ContentInput): Content!
    kakaoAuth(code: CodeInput!): KakaoAuth_Return
    createUser(userInput: UserInput): User!
  }
  input ContentInput {
    content: String
  }
  input CodeInput {
    code: String
  }
  input UserInput {
    email: String
    isAdmin: Boolean
    phoneNumber: String
    profile: InputProfile
  }

  type User {
    email: String
    isAdmin: Boolean
    phoneNumber: String
    profile: Profile
  }

  input InputProfile {
    nickname: String
    thumbnail_image_url: String
    profile_image_url: String
  }

  type Profile {
    nickname: String
    thumbnail_image_url: String
    profile_image_url: String
  }

  type Content {
    id: ID
    content: String
    createdAt: String
  }

  type KakaoAuth_Data_Profile {
    nickname: String
    thumbnail_image_url: String
    profile_image_url: String
  }

  type KakaoAuth_Data {
    profile: KakaoAuth_Data_Profile
    email: String
    isAdmin: Boolean
    phoneNumber: String
  }

  type KakaoAuth_Return {
    data: KakaoAuth_Data
    joined: Boolean
  }
`;

module.exports = typeDefs;
