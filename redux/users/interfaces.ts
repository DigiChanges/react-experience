
export interface UserFilter
{
		search: string;
		filterBy: string;
		orderBy: string;
		sort: "asc" | "desc";
}

export interface UserEntity
{
		email: string;
		firstName: string;
		lastName: string;
}
