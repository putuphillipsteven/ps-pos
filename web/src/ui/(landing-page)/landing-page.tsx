import { useTheme, VStack } from '@chakra-ui/react';
import NavBar from './component/nav-bar';
import { useState } from 'react';

export default function LandingPage() {
	const theme = useTheme();
	const [sideNavDisplay, setSideNavDisplay] = useState(true);
	const toggleSideNav = () => {
		setSideNavDisplay(!sideNavDisplay);
	};
	return (
		<VStack
			spacing={'1em'}
			bgColor={theme.colors.bacgkround}
			borderBottom={`2px solid ${theme.colors.primary}`}
		>
			<NavBar toggleSideNavDisplay={toggleSideNav} />
		</VStack>
	);
}
