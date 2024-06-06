import { Box, Flex, HStack, Icon, Image, Text } from '@chakra-ui/react';
import { RiNotification3Fill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
interface NavBarProps {
	toggleSideNavDisplay: VoidFunction;
}
export default function NavBar({ toggleSideNavDisplay }: NavBarProps) {
	return (
		<Flex w={'100%'} h={'3em'} alignItems={'center'} justifyContent={'space-between'}>
			<Flex alignItems={'center'} justifyContent={'center'} columnGap={4}>
				<Icon
					as={GiHamburgerMenu}
					width={6}
					height={6}
					cursor={'pointer'}
					onClick={toggleSideNavDisplay}
				/>
				<HStack spacing={'.5em'}>
					<Text as={'b'}>12:00</Text>
					<Text fontWeight={'medium'}>Friday, 16 November 2023</Text>
				</HStack>
			</Flex>
			<HStack spacing={'.5em'}>
				<Flex
					justifyContent={'center'}
					alignItems={'center'}
					borderRadius={'50%'}
					bgColor={'#FAFAFA'}
					boxSize={'2em'}
				>
					<RiNotification3Fill />
				</Flex>
				<Box overflow={'hidden'}>
					<Image
						src={`${
							import.meta.env.VITE_APP_API_IMAGE_URL
						}/profile/product_2023_10_19_logo ratan.png`}
						borderRadius={'50%'}
						boxSize={'2em'}
					/>
				</Box>
			</HStack>
		</Flex>
	);
}
