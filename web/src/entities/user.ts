export class User {
	constructor(
		public id: number | null,
		public first_name: string,
		public last_name: string | null,
		public phone_number: string,
		public second_phone_number: string | null,
		public avatar_url: string | null,
		public email: string,
		public password: string | null,
		public role_id: number | null,
		public gender_id: number,
		public created_at: Date,
		public updated_at: Date | null,
		public deleted_at: Date | null,
	) {}
}
