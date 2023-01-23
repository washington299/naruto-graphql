/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n\tquery getCharacter($id: String!) {\n\t\tcharacter(id: $id) {\n\t\t\tid: _id\n\t\t\tname\n\t\t\tfirstAnimeAppearance\n\t\t\tfirstMangaAppearance\n\t\t\tage\n\t\t\tavatarSrc\n\t\t\tdescription\n\t\t\trank\n\t\t\tvillage\n\t\t}\n\t}\n": types.GetCharacterDocument,
    "\n\tquery getCharacters($page: Int, $name: String) {\n\t\tcharacters(page: $page, filter: { name: $name }) {\n\t\t\tinfo {\n\t\t\t\tcount\n\t\t\t\tpages\n\t\t\t\tprev\n\t\t\t\tnext\n\t\t\t}\n\t\t\tresults {\n\t\t\t\tid: _id\n\t\t\t\tname\n\t\t\t\tage\n\t\t\t\tavatarSrc\n\t\t\t\trank\n\t\t\t}\n\t\t}\n\t}\n": types.GetCharactersDocument,
    "\n\tquery getClans {\n\t\tclans {\n\t\t\tresults {\n\t\t\t\t_id\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n": types.GetClansDocument,
    "\n\tquery getVillages {\n\t\tvillages {\n\t\t\tresults {\n\t\t\t\t_id\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n": types.GetVillagesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery getCharacter($id: String!) {\n\t\tcharacter(id: $id) {\n\t\t\tid: _id\n\t\t\tname\n\t\t\tfirstAnimeAppearance\n\t\t\tfirstMangaAppearance\n\t\t\tage\n\t\t\tavatarSrc\n\t\t\tdescription\n\t\t\trank\n\t\t\tvillage\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getCharacter($id: String!) {\n\t\tcharacter(id: $id) {\n\t\t\tid: _id\n\t\t\tname\n\t\t\tfirstAnimeAppearance\n\t\t\tfirstMangaAppearance\n\t\t\tage\n\t\t\tavatarSrc\n\t\t\tdescription\n\t\t\trank\n\t\t\tvillage\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery getCharacters($page: Int, $name: String) {\n\t\tcharacters(page: $page, filter: { name: $name }) {\n\t\t\tinfo {\n\t\t\t\tcount\n\t\t\t\tpages\n\t\t\t\tprev\n\t\t\t\tnext\n\t\t\t}\n\t\t\tresults {\n\t\t\t\tid: _id\n\t\t\t\tname\n\t\t\t\tage\n\t\t\t\tavatarSrc\n\t\t\t\trank\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getCharacters($page: Int, $name: String) {\n\t\tcharacters(page: $page, filter: { name: $name }) {\n\t\t\tinfo {\n\t\t\t\tcount\n\t\t\t\tpages\n\t\t\t\tprev\n\t\t\t\tnext\n\t\t\t}\n\t\t\tresults {\n\t\t\t\tid: _id\n\t\t\t\tname\n\t\t\t\tage\n\t\t\t\tavatarSrc\n\t\t\t\trank\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery getClans {\n\t\tclans {\n\t\t\tresults {\n\t\t\t\t_id\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getClans {\n\t\tclans {\n\t\t\tresults {\n\t\t\t\t_id\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery getVillages {\n\t\tvillages {\n\t\t\tresults {\n\t\t\t\t_id\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getVillages {\n\t\tvillages {\n\t\t\tresults {\n\t\t\t\t_id\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;