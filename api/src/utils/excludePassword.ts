type UserWithNullableFields = {
	id: number;
	full_name: string | null;
	address: string | null;
	avatar: string | null;
	email: string;
	password: string;
	role_id: number | null;
	gender_id: number;
	branch_id: number | null;
};
export const exclude = (user: UserWithNullableFields, keys: string[]) => {
	return Object.fromEntries(Object.entries(user).filter(([key]) => !keys.includes(key)));
};
