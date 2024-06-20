import { User, UserQuery } from '../query/userQuery';
import { exclude } from '../utils/excludePassword';

export class UserService {
	private userQuery: UserQuery;
	constructor() {
		this.userQuery = new UserQuery();
	}

	public async createUser(user: User) {
		try {
			const check = await this.userQuery.prisma.user.findUnique({
				where: {
					email: user.email,
				},
			});
			if (check) throw new Error('Email is already registered');
			const res = await this.userQuery.createUser(user);
			return exclude(res, ['password']);
		} catch (err) {
			throw err;
		}
	}
}
