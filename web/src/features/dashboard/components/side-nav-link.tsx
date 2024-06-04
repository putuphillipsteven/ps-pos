import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SideNavLinkProps {
	to: string;
	icon: React.ReactElement;
	text: string;
}

export const SideNavLink = ({ icon, text, to }: SideNavLinkProps) => {
	const pathname = useLocation().pathname;
	return (
		<Box
			w={'10em'}
			h={'2.5em'}
			display={'flex'}
			flexDir={'row'}
			borderRadius={'0.5em'}
			transition={'transform .3s'}
			bgColor={pathname === to ? 'primary-content' : 'transparent'}
			boxShadow={pathname === to ? 'md' : 'none'}
			_hover={{
				bgColor: 'primary-content',
			}}
			cursor={'pointer'}
		>
			<HStack spacing={'1em'} w={'100%'} borderRadius={'.5em'} p={'.65em'} cursor={'pointer'}>
				<Box color={pathname === to ? 'primary' : 'text-primary'}>{icon}</Box>
				<Box color={pathname === to ? 'primary' : 'text-primary'}>
					<Link to={to}>
						<Text as={'b'}>{text}</Text>
					</Link>
				</Box>
			</HStack>
		</Box>
	);
};
