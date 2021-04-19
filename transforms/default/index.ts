
export class SelectTransform
{
	static getOptionsSimpleArray(items: string[])
	{
		return items && items.length > 0
      ? items.map((value) => ({ label: value, value }))
      : []
	}

	static getOptionsObjectArray(items: any[], label, value)
	{
		return items && items.length > 0
      ? items.map((item) => ({ label: item[label], value: item[value] }))
      : []
	}
}
