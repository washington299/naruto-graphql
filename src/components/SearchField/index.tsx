import { ChangeEvent, useState } from 'react';
import { InputBase, InputAdornment, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { styled, alpha } from '@mui/material/styles';

import { useDebounce } from 'hooks/useDobounce';

const Input = styled(InputBase)(({ theme }) => ({
	maxWidth: 400,
	width: '100%',
	paddingLeft: theme.spacing(2),
	marginBottom: theme.spacing(3),
	border: `1px solid ${theme.palette.grey[300]}`,
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.5),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.4),
	},
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

	const resetInput = () => {
		setValue('');
		debounce('');
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(e.target.value);
		debounce(e.target.value);
	};

	return (
		<Input
			placeholder="Search character..."
			inputProps={{ 'aria-label': 'search' }}
			endAdornment={
				<InputAdornment position="end">
					{value && (
						<IconButton onClick={resetInput}>
							<Close />
						</IconButton>
					)}
				</InputAdornment>
			}
			disabled={disabled}
			value={value}
			onChange={handleChange}
		/>
	);
};
