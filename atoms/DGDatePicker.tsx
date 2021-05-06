import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {FieldProps} from "formik";
import moment from "moment";

interface DGDatePickerProps extends FieldProps
{
    dateFormatUI: string;
    dateFormatValue: string;
}

const DGDatePicker: React.FC<DGDatePickerProps & any> = ({dateFormatUI, dateFormatValue, ...props}) =>
{
	const setValue = date => props.form.setFieldValue(props.field.name, moment(date).format(dateFormatValue).toString());
	const setDate = () => props.field.value !== '' ? moment(props.field.value, dateFormatValue).toDate() : '';

  return (
    <DatePicker
        {...props}
        dateFormat={dateFormatUI}
        name={props.field.name}
        selected={setDate()}
        onChange={setValue}
    />
  );
}

export default DGDatePicker;
