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

	filter() {
		const queryCopy = { ...this.queryStr };
		//Remove fields from the query
		const removeFields = ['keyword', 'limit', 'page'];
		removeFields.forEach((el) => delete queryCopy[el]);

		//Advance Filter for Price rating....etc

		let qStr = JSON.stringify(queryCopy);
		qStr = qStr.replace(/\b(gt|gte|lt|lte)\b/g, (with$) => `$${with$}`);
		console.log(qStr);
		this.query = this.query.find(JSON.parse(qStr));
		return this;
	}

	paginate(perPage) {
		const currentPage = Number(this.queryStr.page) || 1;
		const skip = perPage * (currentPage - 1);
		// page=1 , skip=5*0=0
		// page=2 , skip=5*1=5
		this.query = this.query.limit(perPage).skip(skip);
		return this;
	}
}

export default QueryHelper;
