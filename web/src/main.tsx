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
import MainDashboard from './features/dashboard/main-dashboard.tsx';
import MainReport from './features/report/main-report.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route path='dashboard' element={<MainDashboard />} />
			<Route path='dashboard/report' element={<MainReport />}>
				<Route path='transaction' element={<Text>Transaction</Text>} />
			</Route>
		</Route>,
	),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<RouterProvider router={router} />
	</ChakraProvider>,
);
