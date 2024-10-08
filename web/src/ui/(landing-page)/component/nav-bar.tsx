import { Flex, Icon, useTheme } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SignInModal from './sign-in-modal';
interface NavBarProps {
	toggleSideNavDisplay: VoidFunction;
}
export default function NavBar({ toggleSideNavDisplay }: NavBarProps) {
	const theme = useTheme();
	return (
		<Flex
			w={'100%'}
			h={'fit-content'}
			p={'.5em'}
			justifyContent={'space-between'}
			rowGap={'.5em'}
			flexDir={{ base: 'column' }}
		>
			<Flex w={'100%'} justifyContent={'space-between'}>
				<Flex alignItems={'center'} justifyContent={'center'} columnGap={4}>
					<Icon
						as={GiHamburgerMenu}
						width={6}
						height={6}
						cursor={'pointer'}
						onClick={toggleSideNavDisplay}
					/>
				</Flex>
				<SignInModal />
				{/* <ProfileModal /> */}
			</Flex>
		</Flex>
	);
}
