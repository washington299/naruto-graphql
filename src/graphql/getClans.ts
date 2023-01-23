import { useQuery } from '@apollo/client';

import { gql } from 'graphql/__generated__/gql';

export const GET_CLANS = gql(`
	query getClans {
		clans {
			results {
				_id
				name
			}
		}
	}
`);

export const useGetClans = () => useQuery(GET_CLANS);
