import {
	Box,
	Flex,
	HStack,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useTheme,
	VStack,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoAddCircleOutline } from 'react-icons/io5';

export const ProfileModal = () => {
	const theme = useTheme();
	return (
		<Menu autoSelect={false}>
			<MenuButton>
				<Flex
					border={`2px solid ${theme.colors.border}`}
					w={'2em'}
					h={'2em'}
					borderRadius={'50%'}
					overflow={'hidden'}
				>
					<Image objectFit={'contain'} maxW={'100%'} height={'auto'} src='ck-logo.png' />
				</Flex>
			</MenuButton>
			<MenuList marginTop={'1em'} display={'flex'} flexDir={'column'}>
				<MenuItem>
					<Flex w={'100%'} justifyContent={'flex-end'} columnGap={'1em'}>
						<VStack alignItems={'end'} spacing={'0'}>
							<Text fontWeight={'medium'} fontSize={{ base: '.75em' }}>
								Name
							</Text>
							<Text fontWeight={'medium'} fontSize={{ base: '.75em' }}>
								email@gmail.com
							</Text>
						</VStack>
						<Flex
							border={`2px solid ${theme.colors.border}`}
							w={'2em'}
							h={'2em'}
							borderRadius={'50%'}
							overflow={'hidden'}
						>
							<Image objectFit={'contain'} maxW={'100%'} height={'auto'} src='ck-logo.png' />
						</Flex>
					</Flex>
				</MenuItem>
				<MenuItem>
					<Flex w={'100%'} justifyContent={'flex-end'}>
						<Text>My Profile</Text>
					</Flex>
				</MenuItem>
				<MenuItem>
					<Flex w={'100%'} justifyContent={'flex-end'}>
						<Text>Log Out</Text>
					</Flex>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
