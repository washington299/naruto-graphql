import { useState } from 'react';
import Head from 'next/head';
import { Typography } from '@mui/material';

import { useGetCharacters } from 'graphql/getCharacters';

import { Container } from 'components/Container';
import { SearchField } from 'components/SearchField';
import { Loading } from 'components/Loading';
import { CharactersList } from 'components/CharactersList';

export default function Page() {
	const [page, setPage] = useState(1);
	const [name, setName] = useState('');

	const { data, loading } = useGetCharacters({ variables: { page, name } });

	const handleNameChange = (newName: string) => {
		setPage(1);
		setName(newName);
	};
	const handlePageChange = (value: number) => setPage(value);

	return (
		<>
			<Head>
				<title>Naruto - Characters</title>
			</Head>

			<Container>
				<Typography gutterBottom component="h1" variant="h4" textAlign="center">
					Characters
				</Typography>

				<SearchField disabled={loading} name={name} handleNameChange={handleNameChange} />

				{loading ? (
					<Loading />
				) : (
					<CharactersList data={data} page={page} handlePageChange={handlePageChange} />
				)}
			</Container>
		</>
	);
}
