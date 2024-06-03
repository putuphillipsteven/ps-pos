import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import theme from './theme/theme.ts';
import MainDashboard from './features/dashboard/main-dashboard.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route path='/dashboard' element={<MainDashboard />} />
		</Route>,
	),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<RouterProvider router={router} />
	</ChakraProvider>,
);
