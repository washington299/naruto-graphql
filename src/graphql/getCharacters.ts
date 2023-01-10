import { gql } from 'graphql/__generated__/gql';

export const GET_CHARACTERS = gql(`
	query getCharacters($page: Int) {
		characters(page: $page) {
			info {
				count
				pages
				prev
				next
			}
			results {
				id: _id
				name
				age
				avatarSrc
				rank
			}
		}
	}
`);
