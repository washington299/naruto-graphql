import { ChangeEvent, useState } from 'react';
import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

import { useDebounce } from 'hooks/useDobounce';

const Search = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	maxWidth: 400,
	paddingLeft: theme.spacing(2),
	marginBottom: theme.spacing(3),
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
	name: string;
	handleNameChange: (name: string) => void;
};

export const SearchField = ({ disabled = false, name, handleNameChange }: SearchFieldProps) => {
	const [value, setValue] = useState(name);

	const debounce = useDebounce(handleNameChange, 500);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(e.target.value);

		debounce(e.target.value);
	};

	return (
		<Search>
			<StyledInputBase
				placeholder="Search character..."
				inputProps={{ 'aria-label': 'search' }}
				disabled={disabled}
				value={value}
				onChange={handleChange}
			/>
		</Search>
	);
};
