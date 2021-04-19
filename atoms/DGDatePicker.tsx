import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {FieldProps, useField} from "formik";
import moment from "moment";

interface DGDatePickerProps extends FieldProps
{
		dateFormatUI: string;
		dateFormatValue: string;
}

const DGDatePicker: React.FC<DGDatePickerProps & any> = ({dateFormatUI, dateFormatValue, ...props}) =>
{
  const [field, meta] = useField(props);
	const { value } = meta;

	const setValue = date => props.form.setFieldValue(props.field.name, moment(date).format(dateFormatValue).toString());
	const setDate = () => value[props.field.name] !== '' ? moment(value[props.field.name], dateFormatValue).toDate() : '';

  return (
			<DatePicker
				{...field}
				{...props}
				dateFormat={dateFormatUI}
				name={props.field.name}
				selected={setDate()}
				onChange={setValue}
			/>
  );
}

export default DGDatePicker;
