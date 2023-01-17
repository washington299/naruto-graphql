import { useState, FormEvent } from 'react';
import { InputBase, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	maxWidth: 400,
	paddingLeft: theme.spacing(2),
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
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		transition: theme.transitions.create('width'),
	},
}));

type SearchFieldProps = {
	disabled?: boolean;
};

export const SearchField = ({ disabled = false }: SearchFieldProps) => {
	const [value, setvalue] = useState('');

	const isInputEmpty = value.length === 0;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isInputEmpty) return;

		console.log(value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Search>
				<StyledInputBase
					placeholder="Search character..."
					inputProps={{ 'aria-label': 'search' }}
					disabled={disabled}
					value={value}
					onChange={(e) => setvalue(e.target.value)}
				/>
				<IconButton type="submit" sx={{ pointerEvents: disabled || isInputEmpty ? 'none' : 'all' }}>
					<SearchIcon style={{ marginTop: 1, fontSize: 28, cursor: 'pointer' }} />
				</IconButton>
			</Search>
		</form>
	);
};
