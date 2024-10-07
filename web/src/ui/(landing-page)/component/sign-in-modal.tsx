import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
	useTheme,
} from '@chakra-ui/react';

export default function SignInModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const theme = useTheme();
	return (
		<>
			<Button
				onClick={onOpen}
				bgColor={theme.colors.background}
				border={`2px solid ${theme.colors.primary}`}
				shadow={`0 4px 0 ${theme.colors.primary}`}
			>
				Sign In
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent w={'100%'} mx={'1em'}>
					<ModalHeader>Sign In</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, veniam.
						</Text>
					</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
