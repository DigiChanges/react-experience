import { IRoleApi } from "../role";

export interface IUserPayload
{
		email: string;
		firstName: string;
		lastName: string;
		birthday: string;
		documentType: string;
		documentNumber: string;
		gender: 'male | female | other';
		phone: string;
		country: string;
		address: string;
		permissions: string[];
		roles: string[];
		enable: boolean;
}

export interface IUserApi
{
		id: string;
		email: string;
		firstName: string;
		lastName: string;
		birthday: string;
		documentType: string;
		documentNumber: string;
		gender: 'male | female | other';
		phone: string;
		country: string;
		address: string;
		permissions: string[];
		roles: IRoleApi[];
		enable: boolean;
}
