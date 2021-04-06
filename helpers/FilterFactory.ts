
interface IFilter
{
	search: string;
	filterBy: string;
	orderBy: string;
	sort: 'asc' | 'desc';
}

class FilterFactory
{
	static getUriParam(filter: IFilter)
	{
		const {search, filterBy, orderBy, sort} = filter;
		const order =  orderBy.length <= 0 ? filterBy : orderBy;

		return `filter[${filterBy}]=${search}&sort[${order}]=${sort}`;
	}

	static getPath(query: any)
	{
		console.log("getPath query", query);

		let pathQuery = '';

		for (const key in query)
		{
			if (Object.prototype.hasOwnProperty.call(query, key)) {
				console.log(query[key]);
				console.log(query[key]);
			}
		}
		// const order =  orderBy.length <= 0 ? filterBy : orderBy;

		// return `filter[${filterBy}]=${search}&sort[${order}]=${sort}`;
		return `filter`;
	}
}

export default FilterFactory;
