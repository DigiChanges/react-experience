// import UserStateCell from "./UserStateCell"
import UserActionsCell from "./UserActionsCell"

const ListUsersTemplateColumns =
	[
		{
			name: "First Name",
			selector: "firstName",
			sortable: true,
		},
		{
			name: "Last Name",
			selector: "lastName",
			sortable: true,
		},
		{
			name: "Email",
			selector: "email",
			sortable: true,
		},
		{
			name: "Roles",
			selector: "rolesData",
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
			cell: UserActionsCell
		},
	];

export default ListUsersTemplateColumns;
