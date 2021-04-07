import React from "react";
import Select from "react-select";
import { FieldProps } from "formik";

interface OwnProps {
  className: any;
  items: any;
  isMulti: boolean;
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
}

const MultiSelect: React.FC<OwnProps & FieldProps> = ({
  className,
  items,
  isMulti,
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
  ...selectProps
}) => {
  const onChange = (value) => {
    selectProps.form.setFieldValue(selectProps.field.name, value);
  };


  return (
    <Select
      {...selectProps.field}
      //instanceId="" agregar user id para solucionar problema de error
      className={className}
      options={items}
      isMulti={isMulti}
      onChange={onChange}
      closeMenuOnSelect={!isMulti}
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

export default MultiSelect;
