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
  className?: string;
  placeholder?: string;
  name?: string;
  primary25: any;
  primary: any;
  neutral0: any;
  neutral20: any;
  neutral50: any;
  neutral80: any;
  neutral10: any;
  neutral30: any;
  primary50: any;
  danger: any;
  dangerLight: any;
  neutral70: any;
  borderWidth: any;
  handleChange: any;
}

const SimpleSelect: React.FC<OwnProps & FieldProps> = ({
  options,
	id,
	field,
  form,
  primary25,
  primary,
  neutral0,
  neutral20,
  neutral50,
  neutral80,
  neutral10,
  neutral30,
  primary50,
  danger,
  dangerLight,
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

  return (
			<Select
				{...props}
				id={id}
				name={field.name}
				value={getValue()}
				onChange={onChange}
				options={options}
				theme={(theme) => ({
					...theme,
					borderWidth: 6,
					multiValue: {
						borderRadius: 30,
					},
					colors: {
						...theme.colors,
						primary25: primary25,
						primary: primary,
						neutral0: neutral0,
						neutral20: neutral20,
						neutral50: neutral50,
						neutral80: neutral80,
						neutral10: neutral10,
						neutral30: neutral30,
						primary50: primary50,
						danger: danger,
						dangerLight: dangerLight,
					},
      })}
			/>
  );
};

export default SimpleSelect;
