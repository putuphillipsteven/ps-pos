import { Outlet } from 'react-router-dom';

import { Box } from '@chakra-ui/react';
import SideNav from './features/dashboard/components/side-nav';
import NavBar from './features/dashboard/components/nav-bar';
import { useState } from 'react';

export default function App() {
	const [sideNavDisplay, setSideNavDisplay] = useState(true);
	const toggleSideNav = () => {
		setSideNavDisplay(!sideNavDisplay);
	};

	return (
		<Box maxW={'100vw'} minH={'100vh'} display={'flex'} alignItems={'stretch'}>
			<Box
				w={sideNavDisplay ? '13.75em' : '3em'}
				minH={'100%'}
				backgroundColor={'base-100'}
				overflow={'hidden'}
				boxShadow={'md'}
			>
				<SideNav sideNavDisplay={sideNavDisplay} />
			</Box>
			<Box
				w={'100%'}
				minH={'100%'}
				p={'1em'}
				display={'flex'}
				flex={1}
				flexDir={'column'}
				rowGap={'3.25em'}
				backgroundColor={'base-content'}
			>
				<NavBar toggleSideNavDisplay={toggleSideNav} />
				<Outlet />
			</Box>
		</Box>
	);
}
