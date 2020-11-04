import React from "react";
import Select from "react-select";
import { FieldProps } from "formik";

interface OwnProps {
  items: any;
  isMulti: boolean;
}

const MultiSelectTwo: React.FC<OwnProps & FieldProps> = ({
  items,
  isMulti,
  ...selectProps
}) => {
  console.log(selectProps);
  //Para que el componente sea multiSelect declarar en props isMulti
  const onChange = (value) => {
    selectProps.form.setFieldValue(selectProps.field.name, value);
  };

  return (
    <Select
      {...selectProps.field}
      //instanceId="" agregar user id para solucionar problema de error
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
          primary25: "#4a5568",
          primary: "#667eea",
          neutral0: "#2d3748",
          neutral20: "#4a5568",
          neutral50: "#a0aec0",
          neutral70: "orange ",
          neutral80: "#fff",
          neutral10: "#4a5568",
          neutral30: "#667eea",
          primary50: "#718096",
          danger: "#a0aec0",
          dangerLight: "#1a202c",
        },
      })}
    />
  );
};

export default MultiSelectTwo;
