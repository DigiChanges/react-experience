import React, {PropsWithChildren} from "react";
import ErrorForm from "../atoms/ErrorForm";
import {FormikErrors, FormikTouched, FormikValues} from "formik";

interface ErrorFormikFormProps extends PropsWithChildren<any>
{
		errors: FormikErrors<FormikValues>;
		touched: FormikTouched<FormikValues>;
		field: string;
}

const ErrorFormikForm: React.FC<ErrorFormikFormProps> = ({ errors, touched, field, className = "" }) => (
  errors[field] && touched[field]
		? <ErrorForm className={className}>{errors[field]}</ErrorForm>
		: null
);

export default ErrorFormikForm;
