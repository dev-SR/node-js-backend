class QueryHelper {
	constructor(query, queryStr) {
		this.query = query;
		this.queryStr = queryStr;
	}
	search() {
		//{{DOMAIN}}/api/v1/products?keyword=Pizza
		const keyword = this.queryStr.keyword
			? {
					name: {
						$regex: this.queryStr.keyword,
						$options: 'i'
					}
			  }
			: {};
		console.log(keyword);
		this.query = this.query.find({ ...keyword });
		return this;
		//return Instance so that  ..new QH().search().filter().paginate()
		//chaining works
	}
}

export default QueryHelper;
