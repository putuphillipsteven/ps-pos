import { Outlet } from 'react-router-dom';

import { Box } from '@chakra-ui/react';
import SideNav from './features/dashboard/components/side-nav';
import NavBar from './features/dashboard/components/nav-bar';

export default function App() {
	return (
		<Box maxW={'100vw'} minH={'100vh'} display={'flex'} alignItems={'stretch'}>
			<Box w={'14.75em'} minH={'100%'} backgroundColor={'base-100'}>
				<SideNav />
			</Box>
			<Box
				w={'100%'}
				minH={'100%'}
				p={'1em'}
				display={'flex'}
				flex={1}
				flexDir={'column'}
				backgroundColor={'base-content'}
			>
				<NavBar />
				<Outlet />
			</Box>
		</Box>
	);
}
