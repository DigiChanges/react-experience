import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import SearchInput from "../atoms/SearchInput";
import IconButtonActive from "../molecules/IconButtonActive";
import IconSortAscending from "../atoms/Icons/Stroke/IconSortAscending";
import IconSortDescending from "../atoms/Icons/Stroke/IconSortDescending";
import FilterSortSchema from "../SchemaValidations/FilterSortSchema";
import _ from "lodash";

const FilterSort = ({ actionFilter, filterButtonName = 'Filter', filterQuery = null, placeholder }): any => {
  const [filterFields, setFilterField] = useState({ search: "", filterBy: "" });
  const [sortFields, setSortField] = useState({ orderBy: "", sort: "asc", isSort: true });

  const onClickIsSortAsc = () => {
    setSortField({ ...sortFields, isSort: !sortFields.isSort });
  }

  useEffect(() => {
    for (const key in filterQuery) {
      if (Object.prototype.hasOwnProperty.call(filterQuery, key)) {
        const re = /(?<=\[).+?(?=\])/;
        const value = key.match(re);

        if (key.includes('filter')) {
          setFilterField({
            ...filterFields,
            search: filterQuery[key],
            filterBy: _.last(value)
          });
        }
        else if (key.includes('sort')) {
          setSortField({
            ...sortFields,
            orderBy: _.last(value),
            sort: filterQuery[key],
            isSort: filterQuery[key] === 'asc',
          });
        }
      }
    }
  }, [filterQuery]);


  const getSort = (isSortAsc: boolean) => (isSortAsc ? "asc" : "desc")

  return (
    <Formik initialValues={{
      search: filterFields.search,
      filterBy: filterFields.filterBy,
      orderBy: sortFields.orderBy,
      sort: sortFields.sort,
    }}
      enableReinitialize={true}
      validationSchema={FilterSortSchema}
      onSubmit={async (values) => {
        const { search, filterBy, orderBy } = values;
        actionFilter(search, filterBy, orderBy, getSort(sortFields.isSort));
      }}>
      {({ errors, touched }) => (
        <Form className="flex flex-col justify-between w-full text-main-gray-300 my-2">
          <Field
            name="search"
            type="search"
            id="search"
            placeholder={placeholder}
            component={SearchInput}
            className={`dg-form-field-full ${errors.search && touched.search ? 'border-red-500' : ''}`}
          />
          {/* todo add DROPDOWN to filter/sort opts */}
          <div className="flex flex-wrap justify-between my-6">
            <div className="flex-col w-full md:w-5/12">
              <Label htmlFor="roles" className="font-bold text-gray-400 block md:inline-block mr-2 w-16">
                Filter By
              </Label>
              <Field
                name="filterBy"
                type="text"
                id="filterBy"
                placeholder={"Filter by... "}
                className={`dg-form-field-quarter md:min-w-max  ${errors.filterBy && touched.filterBy ? 'border-red-500' : ''}`}
              />
            </div>
            <div className="flex-col w-full md:w-5/12">
              <Label htmlFor="roles" className="font-bold text-gray-400 block md:inline-block mr-2 w-16">
                Sort By
              </Label>
              <Field
                name="orderBy"
                type="text"
                id="orderBy"
                placeholder={"Sort by... "}
                className={`dg-form-field-quarter md:min-w-max ${errors.orderBy && touched.orderBy ? 'border-red-500' : ''}`}
              />
            </div>

            <div className="flex-col self-end md:self-center w-6 h-6 my-3 md:my-2 lg:my-0">
              <IconButtonActive
                classNameOnActive="text-white"
                onClick={onClickIsSortAsc}
                isActive={sortFields.isSort}
                iconEnable={IconSortAscending}
                iconDisable={IconSortDescending}
              />
            </div>
            <div className="flex-col self-center my-3 lg:my-0 mx-auto">
              <Button
                className="dg-main-button"
                buttonType="submit"
              >
                {filterButtonName}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FilterSort;
