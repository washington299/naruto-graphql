import { QueryHookOptions, useQuery } from '@apollo/client';

import { gql } from 'graphql/__generated__/gql';
import { GetCharactersQuery, GetCharactersQueryVariables } from 'graphql/__generated__/graphql';

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

export const useGetCharacters = (
	options?: QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>
) => useQuery(GET_CHARACTERS, options);
