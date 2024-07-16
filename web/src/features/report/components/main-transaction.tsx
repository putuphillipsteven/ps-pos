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
import Pagination from './pagination';
import { TransactionRepository } from '../../../repositories/transaction.repository';
import { TransactionInteractor } from '../../../interactor/transaction.interactor';
import { TransactionController } from '../../../controller/transaction.controller';
import { useEffect, useState } from 'react';
export default function MainTransaction() {
	const transactionRepository = new TransactionRepository();
	const transactionInteractor = new TransactionInteractor(transactionRepository);
	const transactionController = new TransactionController(transactionInteractor);

	const getTransactions = async () => {
		const transaction = await transactionController.onGetTransaction({
			endDate: '2024-06-30',
			page: '1',
			pageSize: '10',
			startDate: '2024-06-01',
		});
		return transaction;
	};

	const [transactions, setTransactions] = useState<any | undefined>([]);

	useEffect(() => {
		const fetchTransactions = async () => {
			const response = await getTransactions(); // getTransactions() returns a Promise<Transaction[] | undefined>
			setTransactions(response); // This line is correct
		};

		fetchTransactions();
	}, []);

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
					<Text fontWeight={'bold'}>Cash transaction</Text>
					<Text fontWeight={'medium'}>10</Text>
					<HStack>
						<Icon as={TfiStatsDown} color={'destructive'} />
						<Text color={'destructive'} fontSize={'xs'}>
							-10 from yesterday
						</Text>
					</HStack>
				</Box>
				<Box border={`2px solid ${theme.colors.border}`} p={'.5em'}>
					<Text fontWeight={'bold'}>Debit Transaction</Text>
					<Text fontWeight={'medium'}>10</Text>
					<HStack>
						<Icon as={TfiStatsUp} color={'primary'} />
						<Text fontSize={'xs'}>QRIS Transaction</Text>
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
							{transactions?.map((transaction: any) => {
								return (
									<Tr>
										<Td>00{transaction?.id}</Td>
										<Td>{transaction?.customer_name}</Td>
										<Td>{transaction?.date}</Td>
										<Td>{transaction?.payment_method?.method_name}</Td>
										<Td>{transaction?.payment_amount}</Td>
										<Td>{transaction?.user?.full_name}</Td>
									</Tr>
								);
							})}
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Box>
		</Box>
	);
}
