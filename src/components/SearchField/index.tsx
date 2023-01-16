import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	maxWidth: 400,
	width: '100%',
	paddingLeft: theme.spacing(2),
	paddingRight: theme.spacing(1),
	marginBottom: 24,
	border: `1px solid ${theme.palette.grey[300]}`,
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.5),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.4),
	},
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	flex: 1,
	width: '100%',
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		transition: theme.transitions.create('width'),
	},
}));

type SearchFieldProps = {
	disabled?: boolean;
};

export const SearchField = ({ disabled = false }: SearchFieldProps) => {
	return (
		<Search>
			<StyledInputBase
				placeholder="Search…"
				inputProps={{ 'aria-label': 'search' }}
				disabled={disabled}
			/>
			<SearchIcon
				style={{
					marginTop: 1,
					fontSize: 28,
					cursor: 'pointer',
					pointerEvents: disabled ? 'none' : 'all',
				}}
				onClick={() => console.log('success')}
			/>
		</Search>
	);
};
