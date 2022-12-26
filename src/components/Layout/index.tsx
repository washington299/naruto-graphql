import { Header } from 'components/Header';

type LayoutProps = {
	children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};
