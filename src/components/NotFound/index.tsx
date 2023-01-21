import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Image = styled('img')(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: 300,
	},
	[theme.breakpoints.up('sm')]: {
		width: 400,
	},
}));

const Text = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		fontSize: 30,
		fontWeight: 300,
		color: 'gray',
		textAlign: 'center',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: 48,
		maxWidth: 300,
		marginLeft: theme.spacing(4),
	},
}));

export const NotFound = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: 4,
			}}
		>
			<Image src="/assets/images/not-found.png" alt="Not found image" />
			<Text>Character not found :(</Text>
		</Box>
	);
};
