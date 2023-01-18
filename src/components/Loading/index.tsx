import { Box, CircularProgress } from '@mui/material';

export const Loading = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
			<CircularProgress />
		</Box>
	);
};
