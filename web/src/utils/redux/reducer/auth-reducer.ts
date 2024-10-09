import axios from 'axios';
import { User as UserEntities } from '../../../entities/user';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

type User = Omit<
	UserEntities,
	| 'phone_number'
	| 'second_phone_number'
	| 'password'
	| 'gender_id'
	| 'created_at'
	| 'updated_at'
	| 'deleted_at'
>;

interface InitialStateAuthReducer {
	user: User;
	isLogin: boolean;
}
const initialState: InitialStateAuthReducer = {
	user: {
		id: null,
		first_name: '',
		last_name: '',
		avatar_url: '',
		email: '',
		role_id: null,
	},
	isLogin: false,
};

export const AuthReducer = createSlice({
	name: 'AuthReducer',
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { avatar_url, email, first_name, id, last_name, role_id }: User = action.payload;

			state.user = {
				avatar_url,
				email,
				first_name,
				id,
				last_name,
				role_id,
			};
		},
		loginSuccess: (state) => {
			state.isLogin = true;
		},
		logoutSuccess: (state) => {
			state.isLogin = false;
			localStorage.removeItem('token');
		},
		keepLoginSuccess: (state) => {
			state.isLogin = true;
		},
	},
});

interface LoginAuthReducerProps {
	email: string;
	password: string;
}

export const login = ({ email, password }: LoginAuthReducerProps) => {
	return async (dispatch: AppDispatch) => {
		try {
			console.log(`LOGIN JALAN | ${import.meta.env.VITE_APP_API_URL}`);
			const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/login`, {
				email,
				password,
			});
			localStorage.setItem('token', res?.data?.data?.token);
			console.log(res.data?.data?.token);
			console.log(res.data?.data);
			dispatch(setUser(res?.data?.data?.user));
			dispatch(loginSuccess());
		} catch (error) {
			throw error;
		}
	};
};

export const keepLogin = () => {
	return async (dispatch: AppDispatch) => {
		try {
			const token = localStorage.getItem('token');

			if (token) {
				const res = await axios.get(`${import.meta.env.VITE_API_URL}auth/keep-login`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				dispatch(setUser(res?.data?.data));
				dispatch(keepLoginSuccess());
			}
		} catch (error) {
			localStorage.removeItem('token');
			throw error;
		}
	};
};
export const { loginSuccess, logoutSuccess, setUser, keepLoginSuccess } = AuthReducer.actions;

export default AuthReducer.reducer;
