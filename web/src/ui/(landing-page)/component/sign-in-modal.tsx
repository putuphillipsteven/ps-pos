import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
	useTheme,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { SIGNINSCHEMA } from '../../../utils/schema/sign-in-schema';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { login } from '../../../utils/redux/reducer/auth-reducer';
import { AppDispatch } from '../../../utils/redux/store';
import { useNavigate } from 'react-router-dom';

export default function SignInModal() {
	const [showPassword, setShowPassword] = useState(false);
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const theme = useTheme();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: SIGNINSCHEMA,
		onSubmit: async (values, { resetForm }) => {
			try {
				const dispatchLogin = await dispatch(login(values));
				console.log('dispatchLogin', dispatchLogin);
				console.log('LOGIN SUCCESS');
				navigate('/dashboard');
				resetForm({ values: { email: '', password: '' } });
			} catch (error: any) {
				const ERRORMESSAGE = error.response.data.errors.message;
				toast({
					duration: 2000,
					position: 'bottom',
					render: () => (
						<Box
							borderRadius={'lg'}
							bgColor={`${theme.colors.destructive}`}
							border={`2px solid ${theme.colors.primary}`}
							shadow={`0 4px 0 ${theme.colors.primary}`}
							p={'.5em 1em'}
						>
							<Text fontWeight={'bold'} color={`${theme.colors.background}`}>
								{ERRORMESSAGE}
							</Text>
						</Box>
					),
				});
			}
		},
	});

	const customOnClose = () => {
		formik.resetForm();
		onClose();
	};
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
			<Modal isOpen={isOpen} onClose={customOnClose} closeOnOverlayClick={false}>
				<ModalOverlay />
				<ModalContent w={'100%'} mx={'1em'}>
					<ModalHeader>Sign In</ModalHeader>
					<form onSubmit={formik.handleSubmit}>
						<VStack px={'1em'} align={'stretch'} spacing={'1em'}>
							<FormControl isInvalid={!!(formik.touched.email && formik.errors.email)}>
								<FormLabel>Email</FormLabel>
								<Input
									name='email'
									placeholder='Enter your email...'
									type='email'
									value={formik.values.email}
									onChange={formik.handleChange}
									w={'100%'}
									focusBorderColor={`${theme.colors.primary}`}
									_invalid={{
										bgColor: theme.colors.background,
										border: `2px solid ${theme.colors.destructive}`,
										shadow: `0 6px 0 ${theme.colors.destructive}`,
									}}
									border={`2px solid ${theme.colors.input}`}
									shadow={`0 6px 0 ${theme.colors.input}`}
									_focus={{
										bgColor: theme.colors.background,
										border: `2px solid ${theme.colors.primary}`,
										shadow: `0 6px 0 ${theme.colors.primary}`,
									}}
								/>
								{formik.touched.email && formik.errors.email && (
									<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
								)}
							</FormControl>
							<FormControl isInvalid={!!(formik.touched.password && formik.errors.password)}>
								<FormLabel>Password</FormLabel>
								<InputGroup position={'relative'}>
									<Input
										name='password'
										placeholder='Enter your password...'
										w={'100%'}
										type={showPassword ? 'text' : 'password'}
										onChange={formik.handleChange}
										value={formik.values.password}
										_invalid={{
											bgColor: theme.colors.background,
											border: `2px solid ${theme.colors.destructive}`,
											shadow: `0 6px 0 ${theme.colors.destructive}`,
										}}
										focusBorderColor={`${theme.colors.primary}`}
										border={`2px solid ${theme.colors.input}`}
										shadow={`0 6px 0 ${theme.colors.input}`}
										_focus={{
											bgColor: theme.colors.background,
											border: `2px solid ${theme.colors.primary}`,
											shadow: `0 6px 0 ${theme.colors.primary}`,
										}}
									/>
									<InputRightElement>
										<Button
											variant={'ghost'}
											onClick={() => setShowPassword((showPassword) => !showPassword)}
											backgroundColor={'transparent'}
											height={'64px'}
											_hover={''}
											_active={''}
											color={'#707070'}
										>
											{showPassword ? (
												<Icon as={IoEye} position={'absolute'} />
											) : (
												<Icon as={IoEyeOff} position={'absolute'} />
											)}
										</Button>
									</InputRightElement>
								</InputGroup>

								{formik.touched.password && formik.errors.password && (
									<FormErrorMessage>{formik.errors.password}</FormErrorMessage>
								)}
							</FormControl>
							<Text fontSize={'sm'} color={`${theme.colors.link}`} as={'u'}>
								Forgot Password?
							</Text>
							<Button
								type='submit'
								onClick={onOpen}
								bgColor={theme.colors.link}
								color={theme.colors.background}
								border={`2px solid ${theme.colors.primary}`}
								shadow={`0 6px 0 ${theme.colors.primary}`}
							>
								Sign In
							</Button>
							<Text align={'center'}>
								Dont have an account?{' '}
								<Text
									as={'span'}
									color={`${theme.colors.link}`}
									fontWeight={'bold'}
									textDecoration={'underline'}
								>
									Sign Up Here
								</Text>
							</Text>
						</VStack>
					</form>
					<ModalCloseButton />
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
