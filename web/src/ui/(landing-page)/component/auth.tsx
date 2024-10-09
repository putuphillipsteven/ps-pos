import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { keepLogin } from '../../../utils/redux/reducer/auth-reducer';
import { AppDispatch } from '../../../utils/redux/store';
const Auth = ({ children }: { children: any }) => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(keepLogin());
	}, [dispatch]);

	return <>{children}</>;
};

export default Auth;
