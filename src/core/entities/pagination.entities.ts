export class PaginationResponseEntity<T> {
	constructor(
		public total: number,
		public totalPages: number,
		public currentPage: number,
		public nextPage: number | null | string,
		public prevPage: number | null | string,
		public results: T
	) {
	}
}
