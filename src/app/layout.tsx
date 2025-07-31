import { cookies, headers } from 'next/headers';
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head />
			<body>{children}</body>
		</html>
	);
}
