import * as Yup from 'yup';

export const SIGNINSCHEMA = Yup.object().shape({
	email: Yup.string().email('Email is invalid').required('Email is required'),
	password: Yup.string().required('Password is required'),
});
