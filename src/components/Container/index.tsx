import { Box } from '@mui/material';

type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return <Box sx={{ padding: { xs: 3, sm: 4 } }}>{children}</Box>;
};
