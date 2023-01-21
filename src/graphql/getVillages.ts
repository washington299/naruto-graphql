import { useQuery } from '@apollo/client';

import { gql } from 'graphql/__generated__/gql';

export const GET_VILLAGES = gql(`
	query getVillages {
		villages {
			results {
				_id
				name
			}
		}
	}
`);

export const useGetVillages = () => useQuery(GET_VILLAGES);
