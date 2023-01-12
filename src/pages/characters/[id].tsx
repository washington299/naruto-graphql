import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Box, CircularProgress } from '@mui/material';

import { client } from 'graphql/client';
import { GET_CHARACTER } from 'graphql/getCharacter';
import { Character } from 'graphql/__generated__/graphql';

import { Container } from 'components/Container';

type CharacterProps = {
	character: Character;
};

const Page = ({ character }: CharacterProps) => {
	const { isFallback } = useRouter();

	if (isFallback) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<>
			<Head>
				<title>Character - {character.name}</title>
			</Head>

			<Container>
				<div>washington: {character?.name}</div>
			</Container>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
	const { data } = await client.query({
		query: GET_CHARACTER,
		variables: { id: ctx.params?.id as string },
	});

	return {
		revalidate: 60, // One minute
		props: {
			character: data.character,
		},
	};
};

export default Page;
