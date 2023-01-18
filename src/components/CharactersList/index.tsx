import { Grid, Box, Pagination } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { GetCharactersQuery } from 'graphql/__generated__/graphql';

import { CharacterCard } from 'components/CharacterCard';

type CharactersListProps = {
	data: GetCharactersQuery | undefined;
	page: number;
	handlePageChange: (value: number) => void;
};

export const CharactersList = ({ data, page, handlePageChange }: CharactersListProps) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('lg'));

	const handlePagination = (_e: React.ChangeEvent<unknown>, value: number) => {
		window.scrollTo(0, 0);
		handlePageChange(value);
	};

	return (
		<Box>
			<Grid container spacing={matches ? 1 : 4}>
				{data?.characters?.results?.map(({ id, avatarSrc, name, age, rank }) => (
					<Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
						<CharacterCard id={id} avatarSrc={avatarSrc} name={name} age={age} rank={rank} />
					</Grid>
				))}
			</Grid>

			<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
				<Pagination
					color="primary"
					count={data?.characters?.info?.pages}
					page={page}
					siblingCount={0}
					onChange={handlePagination}
				/>
			</Box>
		</Box>
	);
};
