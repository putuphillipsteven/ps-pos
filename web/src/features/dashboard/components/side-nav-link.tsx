import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SideNavLinkProps {
	sideNavDisplay: boolean;
	to: string;
	icon: React.ReactElement;
	text: string;
}

export const SideNavLink = ({ icon, text, to, sideNavDisplay }: SideNavLinkProps) => {
	const pathname = useLocation().pathname;
	return (
		<Link to={to} style={{ width: '100%' }}>
			<Flex
				w={'100%'}
				h={'2.5em'}
				borderRadius={'0em'}
				columnGap={'1em'}
				alignItems={'center'}
				border={pathname === to ? '1px solid #E5E5E5' : 'transparent'}
				boxShadow={pathname === to ? 'xs' : 'none'}
				_hover={{
					border: '1px solid #E5E5E5',
					boxShadow: 'xs',
					'& > div > div': {
						color: 'base-content',
					},
				}}
				justifyContent={sideNavDisplay ? 'start' : 'center'}
				p={'.65em'}
				cursor={'pointer'}
				overflow={'hidden'}
			>
				<Box color={'primary'}>{icon}</Box>
				<Box display={sideNavDisplay ? 'flex' : 'none'}>
					<Text color={'primary'} as={'b'}>
						{text}
					</Text>
				</Box>
			</Flex>
		</Link>
	);
};
