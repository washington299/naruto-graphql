import { useState } from 'react';
import NextLink from 'next/link';
import {
	AppBar,
	Toolbar,
	Typography,
	Avatar,
	Box,
	Link,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
} from '@mui/material';
import { Menu, Person, MapsHomeWork, Diversity3 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

type MenuItemIconsProps = {
	[key: string]: JSX.Element;
};

const menuItems = ['Characters', 'Villages', 'Clans'];
const menuItemIcons: MenuItemIconsProps = {
	Characters: <Person />,
	Villages: <MapsHomeWork />,
	Clans: <Diversity3 />,
};

export const Header = () => {
	const [menuMobileOpen, setMenuMobileOpen] = useState(false);

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	const toggleMenuMobile = () => setMenuMobileOpen((previousState: boolean) => !previousState);

	return (
		<AppBar color="default">
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				{!matches && (
					<IconButton onClick={toggleMenuMobile}>
						<Menu />
					</IconButton>
				)}
				<Drawer
					anchor="left"
					open={menuMobileOpen}
					onClose={toggleMenuMobile}
					ModalProps={{ keepMounted: true }}
				>
					<Box width={300}>
						<List>
							{menuItems.map((item) => (
								<Link
									key={item}
									component={NextLink}
									href={`/${item.toLowerCase()}`}
									underline="none"
								>
									<ListItem sx={{ padding: 0 }}>
										<ListItemButton>
											<ListItemIcon sx={{ minWidth: 40, height: 25 }}>
												{menuItemIcons[item]}
											</ListItemIcon>
											<ListItemText sx={{ color: 'black', fontWeight: 500 }}>{item}</ListItemText>
										</ListItemButton>
									</ListItem>
								</Link>
							))}
						</List>
					</Box>
				</Drawer>
				<Box
					component="nav"
					sx={{
						display: 'flex',
						flex: 1,
						justifyContent: { xs: 'center', sm: 'normal' },
					}}
				>
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
							}}
						/>
						{matches && (
							<Typography component="span" variant="h5" color="black" fontWeight={500} ml={1}>
								Naruto
							</Typography>
						)}
					</Link>
				</Box>

				{matches && (
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						{menuItems.map((item) => (
							<Link
								key={item}
								component={NextLink}
								href={`/${item.toLowerCase()}`}
								underline="hover"
								marginX={2}
								color="black"
							>
								<Typography fontWeight={500}>{item}</Typography>
							</Link>
						))}
					</Box>
				)}
			</Toolbar>
		</AppBar>
	);
};
