import { gql } from 'graphql/__generated__/gql';

export const GET_CHARACTERS = gql(`
	query getCharacters($page: Int, $name: String) {
		characters(page: $page, filter: { name: $name }) {
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
