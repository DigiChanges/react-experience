import RoleActionsCell from "./RoleActionsCell"

const ListRolesTemplateColumns =
	[
		{
			name: "Name",
			selector: "name",
			sortable: true,
		},
		{
			name: "Slug",
			selector: "slug",
			sortable: true,
		},
		{
			name: "Actions",
			selector: "",
			sortable: true,
			cell: RoleActionsCell
		},
	];

export default ListRolesTemplateColumns;
