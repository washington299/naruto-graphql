import Head from 'next/head';
import { useRouter } from 'next/router';
import { Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Person from '@mui/icons-material/Person';
import MapsHomeWork from '@mui/icons-material/MapsHomeWork';
import Diversity3 from '@mui/icons-material/Diversity3';

import { firstLetterUppercase } from 'utils/FirstLetterUppercase';

import { Container } from 'components/Container';
import { CharacterCard } from 'components/CharacterCard';

type MenuItemIconsProps = {
	[key: string]: JSX.Element;
};

export default function Page() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('lg'));
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
					gutterBottom
					component="h1"
					variant="h4"
					sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
				>
					{firstLetterUppercase(subject)} {menuItemIcons[subject]}
				</Typography>

				<Grid container spacing={matches ? 1 : 4}>
					<Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
						<CharacterCard
							id="any_id"
							avatarSrc="https://narutoql.s3.amazonaws.com/Kimimaro.jpg"
							name="(Kaguya) Kimimaro"
							age={15}
							rank="Unknown (Potential Jounin)"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
						<CharacterCard
							id="any_id"
							avatarSrc="https://narutoql.s3.amazonaws.com/YoroiMember.jpg"
							name="Akadou Yoroi"
							age={23}
							rank="Genin"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
						<CharacterCard
							id="any_id"
							avatarSrc="https://narutoql.s3.amazonaws.com/Hoshikage.jpg"
							name="Akahoshi"
							age={null}
							rank="Unknown (Probably Jounin)"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
						<CharacterCard
							id="any_id"
							avatarSrc="https://narutoql.s3.amazonaws.com/AkameIwana.jpg"
							name="Akame Iwana"
							age={32}
							rank="Chuunin"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
						<CharacterCard
							id="any_id"
							avatarSrc="https://narutoql.s3.amazonaws.com/Choji.jpg"
							name="Akimichi Chouji"
							age={16}
							rank="Chuunin - Team 10"
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
