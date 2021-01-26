import { Fragment, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import AssignRoleSchema from "../../SchemaValidations/AssignRoleSchema";
import Router from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { assignRole, unselectedRole } from '../../redux/roles/actions'
import Title from "../../atoms/Title"
import Button from "../../atoms/Button"
import ErrorForm from "../../atoms/ErrorForm"
import Label from "../../atoms/Label";

const AssignRole = (): any => {

  const { roleSelected } = useSelector( state => state.Roles )
  const dispatch = useDispatch()

  useEffect(() => {
    //unmount component
    return () => {
      dispatch( unselectedRole() )
    }
  }, [])

  return (
    <Fragment>
      <section className="text-gray-500 body-font bg-gray-900 w-128 flex ">
        <div className="w-full">
          <div className="text-4xl mb-2">
            <Title titleType="h1" className="noClass">
              Change Role
            </Title>
          </div>
          <div className="bg-gray-800 p-6  border-teal border-t-12  mb-6 rounded-lg shadow-lg ">
            <Formik
              initialValues={{
                name: "",
                slug: "",
              }}
              validationSchema={ AssignRoleSchema }
              onSubmit={async (values) => {
                if (roleSelected && roleSelected.id) {
                  const { name, slug } = values
                  dispatch( 
                    assignRole(
                      roleSelected.id, 
                      name, 
                      slug
                    ) 
                  )
                }
              }}
            >
              {(
                { errors, touched }
              ) => (
                <Form>
                  <div className="flex flex-col  bg-gray-800 rounded-lg border-teal border-t-12 shadow-lg">
                    <div className="mb-4">
                      <Label htmlFor="roleName" className="font-bold text-grey-darker block mb-2">
                        Role Name
                      </Label>
                      <Field
                        name="name"
                        type="text"
                        id="name"
                        className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                        placeholder="Role Name"
                      />
                      {errors.name && touched.name ? (
                        <ErrorForm className="text-red-500 p-2" >{errors.name}</ErrorForm>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <Label htmlFor="roleLevel" className="font-bold text-grey-darker block mb-2">
                        Role Slug
                      </Label>
                      <Field
                        name="slug"
                        type="text"
                        id="slug"
                        className="w-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-indigo-500 text-base  hover:border-grey px-2 py-2 rounded shadow"
                        placeholder="Role Slug"
                      />
                      {errors.slug && touched.slug ? (
                        <ErrorForm className="text-red-500 p-2" >{errors.slug}</ErrorForm>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-evenly mt-8">
                    <Button className="flex shadow-kx1 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg text-center"
                      buttonType="button" buttonClick={() => Router.push("/roles")}>
                    Back
                    </Button>
                    <Button className="flex shadow-kx1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                      buttonType="submit" buttonClick="none">
                      Save
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AssignRole;
