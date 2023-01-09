import Person from '@mui/icons-material/Person';
import MapsHomeWork from '@mui/icons-material/MapsHomeWork';
import Diversity3 from '@mui/icons-material/Diversity3';

type MenuItemIconsProps = {
	[key: string]: JSX.Element;
};

export const menuItemIcons: MenuItemIconsProps = {
	Characters: <Person />,
	Villages: <MapsHomeWork />,
	Clans: <Diversity3 />,
};
