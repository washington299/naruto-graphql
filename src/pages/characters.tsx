import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { GET_CHARACTERS } from 'graphql/getCharacters';

import { menuItemIcons } from 'const';

import { Container } from 'components/Container';
import { CharacterCard } from 'components/CharacterCard';

export default function Page() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('lg'));

	const { data, loading } = useQuery(GET_CHARACTERS);
	return (
		<>
			<Head>
				<title>Naruto - Characters</title>
			</Head>
			<Container>
				<Typography
					gutterBottom
					component="h1"
					variant="h4"
					sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
				>
					Characters {menuItemIcons['characters']}
				</Typography>

				{loading ? (
					<div>Loading...</div>
				) : (
					<Grid container spacing={matches ? 1 : 4}>
						{data?.characters?.results?.map(({ id, avatarSrc, name, age, rank }) => (
							<Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
								<CharacterCard id={id} avatarSrc={avatarSrc} name={name} age={age} rank={rank} />
							</Grid>
						))}
					</Grid>
				)}
			</Container>
		</>
	);
}
