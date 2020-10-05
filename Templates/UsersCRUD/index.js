import * as React from "react";

function Index() {
  function createData(firstName, lastName, email, roles) {
    return { firstName, lastName, email, roles };
  }

  const customData = require("../../data/userdata.json");
  console.log(customData);
  const rows = [
    createData(
      customData.data.user.firstName,
      customData.data.user.lastName,
      customData.data.user.email,
      customData.data.user["roles"][0].name
    ),
  ];
  console.log(rows[0]);
  return (
    <React.Fragment>
      <div className="text-gray-700 body-font bg-gray-900 h-screen flex justify-center">
        <div className="mt-10 mb-10">
          <div className="bg-gray-700">
            <h1 className="text-6xl text-center text-gray-200">Users</h1>
          </div>

          <table class="shadow-lg bg-white">
            <thead>
              <tr>
                <th class="bg-gray-200 border text-left px-32 py-4">
                  First Name
                </th>
                <th class="bg-gray-200 border text-left px-32 py-4">
                  Last Name
                </th>
                <th class="bg-gray-200 border text-left px-32 py-4">Email</th>
                <th class="bg-gray-200 border text-left px-32 py-4">Roles</th>
                <th class="bg-gray-200 border text-left px-16 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((user, id) => {
                return (
                  <tr key={id}>
                    <th class="border px-4 py-3">{user.firstName}</th>
                    <th class="border px-4 py-3">{user.lastName}</th>
                    <th class="border px-4 py-3">{user.email}</th>
                    <th class="border px-4 py-3">{user.roles}</th>
                    <th class="border px-4 py-3">aca van botones</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <button className="flex ml-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Add User
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
