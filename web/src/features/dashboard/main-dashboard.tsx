import { Box, Heading } from '@chakra-ui/react';

export default function MainDashboard() {
	return (
		<Box h={'100%'} w={'100%'} overflow={'hidden'}>
			<Heading as={'h2'} fontSize={'2xl'}>
				Overview
			</Heading>
		</Box>
	);
}
