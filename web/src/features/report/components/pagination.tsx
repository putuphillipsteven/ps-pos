import React, { useEffect, useState } from 'react';
import { Box, Flex, HStack, Icon, Input, Text, useTheme } from '@chakra-ui/react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';

export default function Pagination() {
	const theme = useTheme();
	const [searchParams, setSearchParams] = useSearchParams();
	const [page, setPage] = useState<number>(parseInt(searchParams.get('page') || '1'));
	const totalPages = 30;
	const buttonsToShow = 5;
	const defaultStartPage = 1;
	const defaultEndPage = 5;
	const handleNext = () => {
		if (page < totalPages) {
			setSearchParams({ page: (page + 1).toString() });
		}
	};

	const handlePrevious = () => {
		if (page > 1) {
			setSearchParams({ page: (page - 1).toString() });
		}
	};

	const handlePageClick = (pageNumber: number) => {
		if (pageNumber !== page) {
			setSearchParams({ page: pageNumber.toString() });
			setPage(pageNumber);
		}
	};

	const pagination: number[] = [];

	const counter = defaultEndPage - 5;
	for (let i = defaultEndPage; i > counter; i--) {
		pagination.unshift(i);
	}

	const visiblePages = [1, 2, 3, 4, 5];

	useEffect(() => {
		setPage(parseInt(searchParams.get('page') || '1'));
	}, [searchParams]);

	return (
		<Box
			w={'fit-content'}
			p={'.5em'}
			border={`1px solid ${theme.colors.border}`}
			display={'flex'}
			columnGap={'1em'}
			alignItems={'center'}
		>
			<Text>Page</Text>
			<Icon
				as={MdOutlineKeyboardArrowLeft}
				fontSize={'xl'}
				onClick={handlePrevious}
				_hover={{ cursor: 'pointer' }}
				visibility={page > 1 ? 'visible' : 'hidden'}
			/>
			<HStack spacing={'2em'} align={'center'}>
				{pagination.map((pageNumber) => (
					<Flex
						alignItems={'center'}
						justifyContent={'center'}
						key={pageNumber}
						w={'2em'}
						borderRadius={'.25em'}
						h={'2em'}
						border={`1px solid ${theme.colors.border}`}
						bgColor={pageNumber === page ? 'secondary' : 'transparent'}
						_hover={{ cursor: 'pointer', fontWeight: 'medium' }}
						onClick={() => handlePageClick(pageNumber)}
						fontWeight={pageNumber === page ? 'medium' : 'normal'}
					>
						<Text>{pageNumber}</Text>
					</Flex>
				))}
			</HStack>
			<Icon
				as={MdOutlineKeyboardArrowRight}
				fontSize={'xl'}
				onClick={handleNext}
				_hover={{ cursor: 'pointer' }}
				visibility={page < totalPages ? 'visible' : 'hidden'}
			/>
			<Input w={'1em'} h={'2em'} />
			<Text fontSize={'sm'}>of {totalPages} items</Text>
		</Box>
	);
}
