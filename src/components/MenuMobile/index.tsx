import { useState } from 'react';
import NextLink from 'next/link';
import {
	Box,
	Link,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import Menu from '@mui/icons-material/Menu';

import { menuItemIcons } from 'const';

import { menuItems } from 'components/Header';

export const MenuMobile = () => {
	const [menuMobileOpen, setMenuMobileOpen] = useState(false);

	const toggleMenuMobile = () => setMenuMobileOpen((previousState: boolean) => !previousState);

	return (
		<>
			<IconButton sx={{ display: { xs: 'block', sm: 'none' }, pb: 0 }} onClick={toggleMenuMobile}>
				<Menu />
			</IconButton>

			<Drawer
				anchor="left"
				open={menuMobileOpen}
				onClose={toggleMenuMobile}
				ModalProps={{ keepMounted: true }}
			>
				<Box width={250}>
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
		</>
	);
};
