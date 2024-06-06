import { Box, Button, Flex, HStack, Heading, Text, useTheme } from '@chakra-ui/react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function MainReport() {
	const theme = useTheme();
	const location = useLocation().pathname;
	console.log(location);
	return (
		<Box p={'.5em'} w={'100%'} h={'100%'}>
			<Flex w={'100%'} h={'100%'} flexDir={'column'}>
				<HStack spacing={'2em'}>
					<Link to={'transaction'} style={{ height: '100%' }}>
						<Box
							p={'.25em'}
							borderBottom={
								location === '/dashboard/report/transaction'
									? `2px solid ${theme.colors.primary}`
									: 'none'
							}
						>
							<Text fontWeight={location === '/dashboard/report/transaction' ? 'bold' : 'normal'}>
								Transaction
							</Text>
						</Box>
					</Link>
					<Link to={'#'}>
						<Text>Sales</Text>
					</Link>
				</HStack>
				<Box p={'.25em'}>
					<Outlet />
				</Box>
			</Flex>
		</Box>
	);
}
