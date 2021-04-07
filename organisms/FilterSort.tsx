import {Field, Form, Formik } from "formik";
import React, {useState} from "react";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import SearchInput from "../atoms/SearchInput";
import IconButtonActive from "../molecules/IconButtonActive";
import IconSortAscending from "../atoms/Icons/Stroke/IconSortAscending";
import IconSortDescending from "../atoms/Icons/Stroke/IconSortDescending";
import FilterSortSchema from "../SchemaValidations/FilterSortSchema";
import ErrorForm from "../atoms/ErrorForm";

const FilterSort = ({actionFilter, filterButtonName = 'Filter'}): any =>
{
	const [isSortAsc, setIsSortAsc] = useState(true);

	const onClickIsSortAsc = () =>
	{
		setIsSortAsc(!isSortAsc);
	}

	const getSort = (isSortAsc: boolean) => (isSortAsc ? "asc" : "desc")

	return (
		<Formik initialValues={{
				search: "",
				filterBy: "",
				orderBy: "",
				sort: "asc",
			}}
			validationSchema={FilterSortSchema}
			onSubmit={async (values) => {
				const { search, filterBy, orderBy } = values;
				actionFilter(search, filterBy, orderBy, getSort(isSortAsc));
			}}>
			{({errors, touched}) => (
				<Form className="flex flex-col lg:flex-row justify-between space-x-5 w-full text-main-gray-300 cursor-pointer">
					<Field
						name="search"
						type="search"
						id="search"
						placeholder={"Search users... "}
						component={SearchInput}
						className={errors.search && touched.search ? 'border-red-500' : ''}
					/>
					<Label htmlFor="roles" className="font-bold text-gray-400 block pt-4 mb-2">
						Filter By
					</Label>
					<Field
						name="filterBy"
						type="text"
						id="filterBy"
						placeholder={"Filter by... "}
						className={errors.filterBy && touched.filterBy ? 'border-red-500' : ''}
					/>
					<Label htmlFor="roles" className="font-bold text-gray-400 block pt-4 mb-2">
						Sort By
					</Label>
					<Field
						name="orderBy"
						type="text"
						id="orderBy"
						placeholder={"Sort by... "}
						className={errors.orderBy && touched.orderBy ? 'border-red-500' : ''}
					/>
					<span className="w-6 pt-5">
						<IconButtonActive classNameOnActive="text-white" onClick={onClickIsSortAsc} isActive={isSortAsc} iconEnable={IconSortAscending} iconDisable={IconSortDescending} />
					</span>
					<Button
						className="shadow-kx1 button-primary text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
						buttonType="submit"
						buttonClick="none"
					>
						{filterButtonName}
					</Button>
				</Form>
			)}
		</Formik>
	)
}

export default FilterSort;