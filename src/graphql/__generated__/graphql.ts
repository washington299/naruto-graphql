/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Change = {
  __typename?: 'Change';
  key: Scalars['String'];
  newValue: Scalars['String'];
};

export type Character = {
  __typename?: 'Character';
  _id: Scalars['ID'];
  age?: Maybe<Scalars['Int']>;
  avatarSrc?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  drafts?: Maybe<Array<CharacterDraft>>;
  firstAnimeAppearance?: Maybe<Scalars['String']>;
  firstMangaAppearance?: Maybe<Scalars['String']>;
  history?: Maybe<Array<CharacterHistory>>;
  name: Scalars['String'];
  nameMeaning?: Maybe<Scalars['String']>;
  notableFeatures?: Maybe<Scalars['String']>;
  notableQuotes?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['String']>;
  village?: Maybe<Scalars['String']>;
};

export type CharacterDraft = {
  __typename?: 'CharacterDraft';
  changes: Array<Change>;
  timeStamp: Scalars['String'];
};

export type CharacterHistory = {
  __typename?: 'CharacterHistory';
  _id: Scalars['ID'];
  age?: Maybe<Scalars['Int']>;
  avatarSrc?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  firstAnimeAppearance?: Maybe<Scalars['String']>;
  firstMangaAppearance?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameMeaning?: Maybe<Scalars['String']>;
  notableFeatures?: Maybe<Scalars['String']>;
  notableQuotes?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['String']>;
  timeStamp: Scalars['String'];
  village?: Maybe<Scalars['String']>;
};

export type CharacterInput = {
  name?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Array<Scalars['String']>>;
  village?: InputMaybe<Array<Scalars['String']>>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Character>>;
};

export type Clan = {
  __typename?: 'Clan';
  _id: Scalars['ID'];
  avatarSrc: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  signatureAbilities?: Maybe<Scalars['String']>;
  village?: Maybe<Scalars['String']>;
};

export type Clans = {
  __typename?: 'Clans';
  info?: Maybe<Info>;
  results?: Maybe<Array<Clan>>;
};

export type Info = {
  __typename?: 'Info';
  count: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  pages: Scalars['Int'];
  prev?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateCharacter: Character;
};


export type MutationUpdateCharacterArgs = {
  data: UpdateCharacterInput;
};

export type Query = {
  __typename?: 'Query';
  character: Character;
  characters: Characters;
  clan: Clan;
  clans: Clans;
  village: Village;
  villages: Villages;
};


export type QueryCharacterArgs = {
  id: Scalars['String'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<CharacterInput>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryClanArgs = {
  id: Scalars['String'];
};


export type QueryClansArgs = {
  page?: InputMaybe<Scalars['Int']>;
  village?: InputMaybe<Scalars['String']>;
};


export type QueryVillageArgs = {
  id: Scalars['String'];
};


export type QueryVillagesArgs = {
  page?: InputMaybe<Scalars['Int']>;
};

export type UpdateCharacterInput = {
  _id: Scalars['ID'];
  age?: InputMaybe<Scalars['Int']>;
  avatarSrc?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  firstAnimeAppearance?: InputMaybe<Scalars['String']>;
  firstMangaAppearance?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nameMeaning?: InputMaybe<Scalars['String']>;
  notableFeatures?: InputMaybe<Scalars['String']>;
  notableQuotes?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Scalars['String']>;
  village?: InputMaybe<Scalars['String']>;
};

export type Village = {
  __typename?: 'Village';
  _id: Scalars['ID'];
  name: Scalars['String'];
};

export type Villages = {
  __typename?: 'Villages';
  info?: Maybe<Info>;
  results?: Maybe<Array<Village>>;
};

export type GetCharacterQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCharacterQuery = { __typename?: 'Query', character: { __typename?: 'Character', name: string, firstAnimeAppearance?: string | null, firstMangaAppearance?: string | null, age?: number | null, avatarSrc?: string | null, description?: string | null, rank?: string | null, village?: string | null, id: string } };

export type GetCharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
}>;


export type GetCharactersQuery = { __typename?: 'Query', characters: { __typename?: 'Characters', info?: { __typename?: 'Info', count: number, pages: number, prev?: number | null, next?: number | null } | null, results?: Array<{ __typename?: 'Character', name: string, age?: number | null, avatarSrc?: string | null, rank?: string | null, id: string }> | null } };

export type GetClansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClansQuery = { __typename?: 'Query', clans: { __typename?: 'Clans', results?: Array<{ __typename?: 'Clan', _id: string, name: string }> | null } };

export type GetVillagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVillagesQuery = { __typename?: 'Query', villages: { __typename?: 'Villages', results?: Array<{ __typename?: 'Village', _id: string, name: string }> | null } };


export const GetCharacterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCharacter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"character"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"firstAnimeAppearance"}},{"kind":"Field","name":{"kind":"Name","value":"firstMangaAppearance"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"village"}}]}}]}}]} as unknown as DocumentNode<GetCharacterQuery, GetCharacterQueryVariables>;
export const GetCharactersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCharacters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"characters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}}]}}]} as unknown as DocumentNode<GetCharactersQuery, GetCharactersQueryVariables>;
export const GetClansDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getClans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetClansQuery, GetClansQueryVariables>;
export const GetVillagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getVillages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"villages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetVillagesQuery, GetVillagesQueryVariables>;