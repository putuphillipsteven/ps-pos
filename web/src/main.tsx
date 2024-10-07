import ReactDOM from 'react-dom/client';
import { ChakraProvider, Text } from '@chakra-ui/react';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import theme from './theme/theme.ts';
import MainReport from './features/report/main-report.tsx';
import MainTransaction from './features/report/components/main-transaction.tsx';
import LandingPage from './ui/(landing-page)/landing-page.tsx';
import Dashboard from './dashboard.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/' element={<LandingPage />} />
			<Route path='/dashboard' element={<Dashboard />}>
				<Route path='/dashboard/report' element={<MainReport />}>
					<Route path='transaction' element={<MainTransaction />} />
				</Route>
			</Route>
		</Route>,
	),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<RouterProvider router={router} />
	</ChakraProvider>,
);
