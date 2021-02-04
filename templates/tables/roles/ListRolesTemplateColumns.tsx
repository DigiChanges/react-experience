// import UserStateCell from "./UserStateCell"
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
		// {
		//   name: "State",
		//   selector: "",
		//   sortable: true,
		//   cell: UserStateCell,
		// },
		{
			name: "Actions",
			selector: "",
			sortable: true,
			cell: RoleActionsCell
		},
	];

export default ListRolesTemplateColumns;
