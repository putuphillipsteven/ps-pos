import {
	Box,
	Flex,
	Grid,
	HStack,
	Icon,
	Input,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useTheme,
} from '@chakra-ui/react';
import { TfiStatsUp } from 'react-icons/tfi';
import { TfiStatsDown } from 'react-icons/tfi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
export default function MainTransaction() {
	const theme = useTheme();
	return (
		<Box w={'100%'} h={'100%'} py={'.5em'} display={'flex'} flexDir={'column'} rowGap={4}>
			<Grid
				columnGap={2}
				templateColumns='repeat(4, minmax(10em, 1fr))'
				templateRows={'1'}
				h={'fit'}
			>
				<Box border={`2px solid ${theme.colors.border}`} p={'.5em'}>
					<Text fontWeight={'bold'}>Total Transaction Today</Text>
					<Text fontWeight={'medium'}>10</Text>
					<HStack>
						<Icon as={TfiStatsUp} color={'primary'} />
						<Text fontSize={'xs'}>+10 from yesterday</Text>
					</HStack>
				</Box>
				<Box border={`2px solid ${theme.colors.border}`} p={'.5em'}>
					<Text fontWeight={'bold'}>Total Transaction Today</Text>
					<Text fontWeight={'medium'}>10</Text>
					<HStack>
						<Icon as={TfiStatsDown} color={'destructive'} />
						<Text color={'destructive'} fontSize={'xs'}>
							-10 from yesterday
						</Text>
					</HStack>
				</Box>
				<Box border={`2px solid ${theme.colors.border}`} p={'.5em'}>
					<Text fontWeight={'bold'}>Total Transaction Today</Text>
					<Text fontWeight={'medium'}>10</Text>
					<HStack>
						<Icon as={TfiStatsUp} color={'primary'} />
						<Text fontSize={'xs'}>+10 from yesterday</Text>
					</HStack>
				</Box>
				<Box border={`2px solid ${theme.colors.border}`} p={'.5em'}>
					<Text fontWeight={'bold'}>Total Transaction Today</Text>
					<Text fontWeight={'medium'}>10</Text>
					<HStack>
						<Icon as={TfiStatsDown} color={'destructive'} />
						<Text color={'destructive'} fontSize={'xs'}>
							-10 from yesterday
						</Text>
					</HStack>
				</Box>
			</Grid>
			<Box
				flex={1}
				w={'100%'}
				h={'100%'}
				border={`2px solid ${theme.colors.border}`}
				p={'.5em'}
				display={'flex'}
				flexDir={'column'}
				rowGap={2}
			>
				<Flex columnGap={2} justifyContent={'space-between'} h={'fit'}>
					<Input
						placeholder='Select date and time'
						size='md'
						type='date'
						w={'fit'}
						p={'.5em'}
						border={`1px solid ${theme.colors.border}`}
						focusBorderColor={'transparent'}
						_focus={{ border: `1px solid ${theme.colors.ring}`, outline: 'none' }}
						outline={'none'}
						_hover={{ border: `1px solid ${theme.colors.ring}` }}
						borderRadius={0}
					/>
					<Input
						placeholder='Input text...'
						size='md'
						type='text'
						w={'fit'}
						p={'.5em'}
						border={`1px solid ${theme.colors.border}`}
						focusBorderColor={'transparent'}
						_focus={{ border: `1px solid ${theme.colors.ring}`, outline: 'none' }}
						outline={'none'}
						_hover={{ border: `1px solid ${theme.colors.ring}` }}
						borderRadius={0}
					/>
				</Flex>
				<Box
					flex={1}
					display={'flex'}
					flexDir={'column'}
					w={'100%'}
					columnGap={2}
					justifyContent={'space-between'}
				>
					<Table variant={`customStripped`}>
						<Thead>
							<Tr>
								<Th>Transaction No</Th>
								<Th>Name</Th>
								<Th>Date</Th>
								<Th>Payment</Th>
								<Th>Amount</Th>
								<Th>Cashier</Th>
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>#1234</Td>
								<Td>John Doe</Td>
								<Td>Thu, 16 Nov 2023</Td>
								<Td>Qris</Td>
								<Td>Rp. 20.000</Td>
								<Td>Jane Doe</Td>
								<Td>Details</Td>
							</Tr>
							<Tr>
								<Td>#1234</Td>
								<Td>John Doe</Td>
								<Td>Thu, 16 Nov 2023</Td>
								<Td>Qris</Td>
								<Td>Rp. 20.000</Td>
								<Td>Jane Doe</Td>
								<Td>Details</Td>
							</Tr>
							<Tr>
								<Td>#1234</Td>
								<Td>John Doe</Td>
								<Td>Thu, 16 Nov 2023</Td>
								<Td>Qris</Td>
								<Td>Rp. 20.000</Td>
								<Td>Jane Doe</Td>
								<Td>Details</Td>
							</Tr>
							<Tr>
								<Td>#1234</Td>
								<Td>John Doe</Td>
								<Td>Thu, 16 Nov 2023</Td>
								<Td>Qris</Td>
								<Td>Rp. 20.000</Td>
								<Td>Jane Doe</Td>
								<Td>Details</Td>
							</Tr>
							<Tr>
								<Td>#1234</Td>
								<Td>John Doe</Td>
								<Td>Thu, 16 Nov 2023</Td>
								<Td>Qris</Td>
								<Td>Rp. 20.000</Td>
								<Td>Jane Doe</Td>
								<Td>Details</Td>
							</Tr>
							<Tr>
								<Td>#1234</Td>
								<Td>John Doe</Td>
								<Td>Thu, 16 Nov 2023</Td>
								<Td>Qris</Td>
								<Td>Rp. 20.000</Td>
								<Td>Jane Doe</Td>
								<Td>Details</Td>
							</Tr>
							<Tr>
								<Td>#1234</Td>
								<Td>John Doe</Td>
								<Td>Thu, 16 Nov 2023</Td>
								<Td>Qris</Td>
								<Td>Rp. 20.000</Td>
								<Td>Jane Doe</Td>
								<Td>Details</Td>
							</Tr>
						</Tbody>
					</Table>
					<Box
						w={'fit-content'}
						p={'.5em'}
						border={`1px solid ${theme.colors.border}`}
						display={'flex'}
						columnGap={'1em'}
						alignItems={'center'}
					>
						<Text>Page</Text>
						<HStack spacing={'2em'} align={'center'}>
							<Text>1</Text>
							<Text>2</Text>
							<Text>3</Text>
							<Text>4</Text>
							<Text>5</Text>
						</HStack>
						<Icon as={MdOutlineKeyboardArrowRight} fontSize={'xl'} />
						<Input w={'1em'} h={'2em'} />
						<Text fontSize={'sm'}>of 30 items</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
