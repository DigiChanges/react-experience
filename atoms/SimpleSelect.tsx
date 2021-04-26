import React from "react";
import Select from "react-select";
import {FieldProps} from "formik";

interface Option {
  label: string;
  value: string;
}

interface OwnProps {
  id: string;
  options: any;
  selectStyle: any,
}

const SimpleSelect: React.FC<OwnProps & FieldProps> = ({
  options,
	id,
	field,
  form,
  selectStyle,
  ...props
}) => {

  const onChange = (option: Option) =>
	{
		form.setFieldValue(field.name, option.value);
  };

  const getValue = () =>
	{
		return options ? options.find(option => option.value === field.value) : '';
  }

//   const customStyles = {
//   control: () => ({
//     width: 'auto',
//       minWidth: 75,
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';
//
//     return { ...provided, opacity, transition };
//   }
// }
  return (
			<Select
				{...props}
				id={id}
				name={field.name}
				value={getValue()}
				onChange={onChange}
				options={options}
				theme={(theme) => (selectStyle ? selectStyle(theme) : theme)}
			/>
  );
}

export default SimpleSelect;
