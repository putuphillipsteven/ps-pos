import { Box, Flex, HStack, Text, useTheme } from '@chakra-ui/react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { checkLocation } from '../../utils/routing';

export default function MainReport() {
	const theme = useTheme();
	const location = useLocation().pathname;
	return (
		<Box w={'100%'} h={'100%'}>
			<Flex w={'100%'} h={'100%'} flexDir={'column'}>
				<HStack spacing={'2em'}>
					<Link to={'transaction'} style={{ height: '100%' }}>
						<Box
							pb={'.3em'}
							borderBottom={
								checkLocation(location, '/dashboard/report/transaction')
									? `2px solid ${theme.colors.border}`
									: 'none'
							}
						>
							<Text
								fontWeight={location === '/dashboard/report/transaction' ? 'medium' : 'normal'}
								color={
									location === '/dashboard/report/transaction' ? 'primary' : 'muted-foreground'
								}
							>
								Transaction
							</Text>
						</Box>
					</Link>
					<Link to={'#'} style={{ height: '100%' }}>
						<Text
							fontWeight={location === '/dashboard/report/sales' ? 'medium' : 'normal'}
							color={location === '/dashboard/report/sales' ? 'primary' : 'muted-foreground'}
						>
							Sales
						</Text>
					</Link>
				</HStack>
				<Box py={'.3em'} h={'100%'}>
					<Outlet />
				</Box>
			</Flex>
		</Box>
	);
}
