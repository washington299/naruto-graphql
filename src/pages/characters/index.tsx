import { useState } from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { Typography, Grid, Box, Pagination } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { GET_CHARACTERS } from 'graphql/getCharacters';

import { Container } from 'components/Container';
import { CharacterCard } from 'components/CharacterCard';
import { SearchField } from 'components/SearchField';
import { Loading } from 'components/Loading';

export default function Page() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('lg'));

	const [page, setPage] = useState(1);
	const [name, setName] = useState('');

	const { data, loading } = useQuery(GET_CHARACTERS, { variables: { page, name } });

	const handlePagination = (_e: React.ChangeEvent<unknown>, value: number) => {
		window.scrollTo(0, 0);
		setPage(value);
	};

	const searchCharacters = (newName: string) => setName(newName);

	return (
		<>
			<Head>
				<title>Naruto - Characters</title>
			</Head>

			<Container>
				<Typography gutterBottom component="h1" variant="h4" textAlign="center">
					Characters
				</Typography>

				<SearchField disabled={loading} name={name} searchCharacters={searchCharacters} />

				{loading ? (
					<Loading />
				) : (
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
				)}
			</Container>
		</>
	);
}
