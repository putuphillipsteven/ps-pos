import { Box, Heading, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function MainReport() {
	return (
		<Box p={'.5em'}>
			<Heading as={'h2'} fontSize={'2xl'}>
				Report
			</Heading>
			<Box bgColor={'red.100'}>
				<Text>P</Text>
				<Outlet />
			</Box>
		</Box>
	);
}
