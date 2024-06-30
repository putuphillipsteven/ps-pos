export class Transaction {
	constructor(
		public readonly id: number,
		public readonly user_id: number,
		public readonly date: string,
		public readonly total_price: number,
		public readonly total_qty: number,
		public readonly payment_method_id: number,
		public readonly payment_amount: number,
		public readonly customer_name: string | 'Customer',
		public readonly payment_change: number,
		public readonly total_price_ppn: number,
	) {}
}
