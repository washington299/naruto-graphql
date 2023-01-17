import { useRef } from 'react';

export const useDebounce = (fn: (args: any) => void, delay: number) => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	function debounceFn(args: string) {
		clearTimeout(timeoutRef.current as NodeJS.Timeout);

		timeoutRef.current = setTimeout(() => {
			fn(args);
		}, delay);
	}

	return debounceFn;
};
