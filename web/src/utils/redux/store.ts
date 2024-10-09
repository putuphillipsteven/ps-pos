import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from './reducer/auth-reducer';

export const store = configureStore({
	reducer: {
		AuthReducer: AuthReducer.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
