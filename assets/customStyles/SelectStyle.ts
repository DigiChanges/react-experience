
const SelectStyle = (theme) =>
{
	return {
		...theme,
		borderWidth: 0,
		multiValue: {
			borderRadius: 100,
		},
		colors: {
			...theme.colors,
			primary25: null,
      primary: "#667EEA",
      neutral0: "#181D24",
      neutral20: null,
      neutral50: "#99A6B8",
			neutral80: "#000000",
			neutral10: "#b400ff",
			neutral30: "#a0aec0",
			primary50: "#00ff9a",
			danger: "#00134b",
			dangerLight: "#103d00"
		}
	}
}

export default SelectStyle;
