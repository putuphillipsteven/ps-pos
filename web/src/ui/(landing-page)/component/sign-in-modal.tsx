import {
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
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
	VStack,
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
					<form>
						<VStack px={'1em'} align={'stretch'}>
							<FormControl>
								<FormLabel>User Name</FormLabel>
								<Input
									w={'100%'}
									type='text'
									focusBorderColor={`${theme.colors.primary}`}
									border={`1px solid ${theme.colors.input}`}
									shadow={`0 4px 0 ${theme.colors.input}`}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Password</FormLabel>
								<Input
									w={'100%'}
									type='password'
									focusBorderColor={`${theme.colors.primary}`}
									border={`1px solid ${theme.colors.input}`}
									shadow={`0 4px 0 ${theme.colors.input}`}
								/>
							</FormControl>
						</VStack>
					</form>
					<ModalCloseButton />
					<ModalFooter>
						<Button
							onClick={onOpen}
							bgColor={theme.colors.background}
							border={`2px solid ${theme.colors.primary}`}
							shadow={`0 4px 0 ${theme.colors.primary}`}
						>
							Sign In
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
