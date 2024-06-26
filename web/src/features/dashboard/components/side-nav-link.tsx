import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { checkLink } from '../../../utils/routing';

interface SideNavLinkProps {
	sideNavDisplay: boolean;
	to: string;
	icon: React.ReactElement;
	text: string;
}

export const SideNavLink = ({ icon, text, to, sideNavDisplay }: SideNavLinkProps) => {
	const pathname = useLocation().pathname;
	const theme = useTheme();
	return (
		<Link to={to} style={{ width: '100%' }}>
			<Flex
				w={'100%'}
				h={'2.5em'}
				borderRadius={'0em'}
				columnGap={'1em'}
				alignItems={'center'}
				border={checkLink(to, pathname) ? `1px solid ${theme.colors.border}` : 'transparent'}
				background={checkLink(to, pathname) ? `secondary` : 'transparent'}
				_hover={{
					border: `1px solid ${theme.colors.border}`,
					background: 'secondary',
					'& > div > div': {
						color: 'base-content',
					},
				}}
				justifyContent={sideNavDisplay ? 'start' : 'center'}
				p={'.65em'}
				cursor={'pointer'}
				overflow={'hidden'}
			>
				<Box color={checkLink(to, pathname) ? `primary` : `muted-foreground`}>{icon}</Box>
				<Box display={sideNavDisplay ? 'flex' : 'none'}>
					<Text
						color={checkLink(to, pathname) ? `primary` : `muted-foreground`}
						fontWeight={checkLink(to, pathname) ? `medium` : `normal`}
					>
						{text}
					</Text>
				</Box>
			</Flex>
		</Link>
	);
};
