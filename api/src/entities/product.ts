export class Product {
	constructor(
		public readonly product_name: string,
		public readonly product_group_id: number,
		public readonly product_price: number,
		public readonly product_image: string,
		public readonly product_description: string,
		public readonly product_status_id: number,
	) {}
}
