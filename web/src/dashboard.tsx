import { Outlet } from 'react-router-dom';

import { Box, Flex, useTheme } from '@chakra-ui/react';
import SideNav from './features/dashboard/components/side-nav';
import NavBar from './features/dashboard/components/nav-bar';
import { useState } from 'react';
import Auth from './ui/(landing-page)/component/auth';

export default function Dashboard() {
	const [sideNavDisplay, setSideNavDisplay] = useState(true);
	const toggleSideNav = () => {
		setSideNavDisplay(!sideNavDisplay);
	};

	const theme = useTheme();
	return (
		<Auth>
			<Box
				maxW={'100vw'}
				overflow={'hidden'}
				minH={'100vh'}
				display={'flex'}
				columnGap={1}
				alignItems={'stretch'}
			>
				<Box
					w={sideNavDisplay ? '13.75em' : '3em'}
					minH={'100%'}
					backgroundColor={'background'}
					// boxShadow={'md'}
				>
					<SideNav sideNavDisplay={sideNavDisplay} />
				</Box>
				<Box
					p={'1em'}
					overflow={'hidden'}
					w={'100%'}
					flex={1}
					display={'flex'}
					backgroundColor={'background'}
				>
					<Flex w={'100%'} h={'100%'} flexDir={'column'} rowGap={'1.5em'}>
						<NavBar toggleSideNavDisplay={toggleSideNav} />
						<Box
							w={'100%'}
							h={'100%'}
							overflow={'hidden'}
							py={'.3em'}
							px={'1em'}
							bgColor={'background'}
							border={`2px solid ${theme.colors.border}`}
						>
							<Outlet />
						</Box>
					</Flex>
				</Box>
			</Box>
		</Auth>
	);
}
