import * as queryString from "querystring";

interface IFilter
{
	search: string;
	filterBy: string;
	orderBy: string;
	sort: 'asc' | 'desc';
}

class FilterFactory
{
	static getUriParam(filter: IFilter): string
	{
		const {search, filterBy, orderBy, sort} = filter;
		const order =  orderBy.length <= 0 ? filterBy : orderBy;

		return `filter[${filterBy}]=${search}&sort[${order}]=${sort}`;
	}

	static getPath(query: any | null): string | null
	{
		console.log('getPath', queryString.stringify(query));
		return query ? queryString.stringify(query) : null;
	}
}

export default FilterFactory;
