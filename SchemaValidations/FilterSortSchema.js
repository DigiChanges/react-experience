import * as Yup from "yup";

const FilterSortSchema = Yup.object().shape({
  search: Yup.string()
      .required("Required"),
  filterBy: Yup.string().when('search',{
    is: true,
    then: Yup.string().required('This is a required field.')
  })
  .required("Required"),
  orderBy: Yup.string()
      .optional(),
  sort: Yup.string()
      .optional(),
});

export default FilterSortSchema;
