import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';

import { Logo } from 'components/Logo';
import { MenuMobile } from 'components/MenuMobile';

export const menuItems = ['Characters', 'Villages', 'Clans'];

export const Header = () => {
	return (
		<AppBar color="default" position="static">
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<MenuMobile />

				<Box sx={{ display: 'flex', flex: 1, justifyContent: { xs: 'center', sm: 'normal' } }}>
					<Logo />
				</Box>

				<Box component="nav" sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
					{menuItems.map((item) => (
						<Link key={item} component={NextLink} href={`/${item.toLowerCase()}`} underline="hover">
							<Typography sx={{ marginX: 2, color: 'black', fontWeight: 500 }}>{item}</Typography>
						</Link>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};
