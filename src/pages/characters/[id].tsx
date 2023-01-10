import { useRouter } from 'next/router';

const Page = () => {
	const { query } = useRouter();

	return <div>Character: {query.id}</div>;
};

export default Page;
