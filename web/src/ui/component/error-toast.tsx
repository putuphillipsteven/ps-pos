import { Box, Text, useTheme } from '@chakra-ui/react';

interface Props {
	message: string;
}
export default function ErrorToast({ message }: Props) {
	const theme = useTheme();
	return (
		<Box
			borderRadius={'lg'}
			bgColor={`${theme.colors.destructive}`}
			border={`2px solid ${theme.colors.primary}`}
			shadow={`0 4px 0 ${theme.colors.primary}`}
			p={'.5em 1em'}
		>
			<Text fontWeight={'bold'} color={`${theme.colors.background}`}>
				{message}
			</Text>
		</Box>
	);
}
