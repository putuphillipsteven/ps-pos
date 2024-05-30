import { Outlet } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

export default function App() {
	return (
		<Box maxW={'100vw'} maxH={'100vh'}>
			<Outlet />
		</Box>
	);
}
