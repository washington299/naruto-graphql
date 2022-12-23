import NextLink from 'next/link';
import { Typography, Avatar, Link } from '@mui/material';

export const Logo = () => {
	const menuHamburguerSize = '24px';

	return (
		<Link
			component={NextLink}
			href="/"
			underline="none"
			sx={{ display: 'flex', alignItems: 'center' }}
		>
			<Avatar
				src="/assets/images/naruto.png"
				alt="Naruto face"
				sx={{
					width: { xs: 40, sm: 50 },
					height: { xs: 40, sm: 50 },
					transform: { xs: `translateX(-${menuHamburguerSize})`, sm: 'translateX(0)' },
				}}
			/>
			<Typography
				component="span"
				variant="h5"
				sx={{ color: 'black', fontWeight: 500, ml: 1, display: { xs: 'none', sm: 'block' } }}
			>
				Naruto
			</Typography>
		</Link>
	);
};
