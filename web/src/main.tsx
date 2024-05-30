import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, Text } from '@chakra-ui/react';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import theme from './theme/theme.ts';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route path='/dashboard' element={<Text>Test</Text>} />
		</Route>,
	),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<RouterProvider router={router} />
	</ChakraProvider>,
);
