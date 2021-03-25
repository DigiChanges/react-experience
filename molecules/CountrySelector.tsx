import React, { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const CountrySelector = ({
  className,
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
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    selectProps.form.setFieldValue(selectProps.field.name, value);
  };

  return <Select
    {...selectProps.field}
    className={className}
    options={options}
    onChange={changeHandler}
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
    })} />
}

export default CountrySelector;
