import * as queryString from "querystring";
import {ParsedUrlQuery} from "querystring";

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

	static getPath(userFilterQueryParam: ParsedUrlQuery, nextQueryParamsPagination: string): string
	{
		const filterSort = userFilterQueryParam ? queryString.stringify(userFilterQueryParam) : '';
		
		const result = filterSort &&
			nextQueryParamsPagination && 
			!nextQueryParamsPagination.includes(filterSort)
			? `${nextQueryParamsPagination}&${filterSort}`
			: nextQueryParamsPagination;

		return result;
	}
}

export default FilterFactory;
