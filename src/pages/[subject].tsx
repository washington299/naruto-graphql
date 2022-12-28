import Head from 'next/head';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { Person, MapsHomeWork, Diversity3 } from '@mui/icons-material';

import { firstLetterUppercase } from 'utils/FirstLetterUppercase';

import { Container } from 'components/Container';

type MenuItemIconsProps = {
	[key: string]: JSX.Element;
};

export default function Page() {
	const { query, isReady } = useRouter();

	const subject = query.subject as string;

	const menuItemIcons: MenuItemIconsProps = {
		characters: <Person fontSize="large" sx={{ marginLeft: 1 }} />,
		villages: <MapsHomeWork fontSize="large" sx={{ marginLeft: 1 }} />,
		clans: <Diversity3 fontSize="large" sx={{ marginLeft: 1 }} />,
	};

	if (!isReady) return <div>Loading...</div>;

	return (
		<>
			<Head>
				<title>Naruto - {subject}</title>
			</Head>
			<Container>
				<Typography
					component="h1"
					variant="h4"
					sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
				>
					{firstLetterUppercase(subject)} {menuItemIcons[subject]}
				</Typography>
			</Container>
		</>
	);
}
