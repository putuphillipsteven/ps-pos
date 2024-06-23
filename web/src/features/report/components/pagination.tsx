import React, { useEffect, useState } from 'react';
import { Box, HStack, Icon, Input, Text, useTheme } from '@chakra-ui/react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';

export default function Pagination() {
	const theme = useTheme();
	const [searchParams, setSearchParams] = useSearchParams();
	const [page, setPage] = useState<number>(parseInt(searchParams.get('page') || '1'));
	const totalPages = 30;
	const visiblePagesCount = 5; // Number of visible pages in the pagination
	const [startPage, setStartPage] = useState<number>(1);

	useEffect(() => {
		setPage(parseInt(searchParams.get('page') || '1'));
	}, [searchParams]);

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

	const visiblePages = [1, 2, 3, 4, 5];
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
				{visiblePages.map((pageNumber) => (
					<Box
						key={pageNumber}
						w={2}
						h={'full'}
						_hover={{ cursor: 'pointer', fontWeight: pageNumber === page ? 'medium' : 'normal' }}
						onClick={() => handlePageClick(pageNumber)}
					>
						<Text>{pageNumber}</Text>
					</Box>
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
