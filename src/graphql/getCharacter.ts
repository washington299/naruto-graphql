import { gql } from 'graphql/__generated__/gql';

export const GET_CHARACTER = gql(`
	query getCharacter($id: String!) {
		character(id: $id) {
			id: _id
			name
			firstAnimeAppearance
			firstMangaAppearance
			age
			avatarSrc
			description
			rank
			village
		}
	}
`);
