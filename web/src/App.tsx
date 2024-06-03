import { Outlet } from 'react-router-dom';

import { Box } from '@chakra-ui/react';
import SideNav from './features/dashboard/components/side-nav';

export default function App() {
	return (
		<Box maxW={'100vw'} minH={'100vh'} display={'flex'} alignItems={'stretch'}>
			<Box w={'14.75em'} backgroundColor={'base-100'}>
				<SideNav />
			</Box>
			<Box flex={1} backgroundColor={'base-content'}>
				<Outlet />
			</Box>
		</Box>
	);
}
