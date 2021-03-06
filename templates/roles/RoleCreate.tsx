import React, {PropsWithChildren} from 'react';
import {Field, Form, Formik} from "formik";
import RoleSchema from "../../SchemaValidations/RoleSchema";
import Router from "next/router";
import Title from "../../atoms/Title"
import Label from "../../atoms/Label";
import ErrorFormikForm from '../../molecules/ErrorFormikForm';
import ButtonClose from '../../molecules/ButtonClose';
import ButtonConfirm from '../../molecules/ButtonConfirm';
import MultiSelect from '../../atoms/MultiSelect';
import { SelectTransform } from '../../transforms/default';
import SelectStyle from '../../assets/customStyles/SelectStyle';
import SimpleSelect from '../../atoms/SimpleSelect';
import {states} from "../../entities";

interface RoleCreateTemplateProps extends PropsWithChildren<any> {
  permissionsList: string[];
  createAction: any;
}

const RoleCreate: React.FC<RoleCreateTemplateProps> = ({permissionsList, createAction}): any =>
{
	return (
	  <section className="px-4">
      <div className="mb-2 ">
        <Title className="text-3xl font-bold" titleType="h1">
          Create Role
        </Title>
      </div>

      <Formik
        initialValues={{
          name: "",
          slug: "",
          permissions: [],
          enable: "",
        }}
        validationSchema={RoleSchema}
        onSubmit={async (values) => {
            createAction(values);
        }}
      >
        {({ errors, touched}) => (
          <Form>
            <div className="flex flex-wrap text-sm">
              <div className="dg-form-full-field-wrapper">
                <Label htmlFor="name" className="dg-form-label">
                  Name
                </Label>
                <Field
                  name="name"
                  type="text"
                  id="name"
                  className="dg-form-field-full"
                  placeholder="Enter name"
                />
                <ErrorFormikForm field="name" errors={errors} touched={touched}/>
              </div>
              <div className="dg-form-full-field-wrapper">
                <Label htmlFor="slug" className="dg-form-label">
                  Slug
                </Label>
                <Field
                  name="slug"
                  type="text"
                  id="slug"
                  className="dg-form-field-full"
                  placeholder="Enter slug"
                />
                <ErrorFormikForm field="slug" errors={errors} touched={touched}/>
              </div>
              <div className="dg-form-full-field-wrapper">
                <Label htmlFor="permissions" className="dg-form-label">
                  Permissions
                </Label>
                <Field
                  name="permissions"
                  id="permissions"
                  component={MultiSelect}
                  options={SelectTransform.getOptionsSimpleArray(permissionsList)}
                  isMulti
                  placeholder="Select permissions"
                  selectStyle={SelectStyle}
                />
                <ErrorFormikForm field="permissions" errors={errors} touched={touched}/>
              </div>
              <div className="dg-form-quarter-field-wrapper">
                <Label htmlFor="enable" className="dg-form-label">
                    Enable
                </Label>
                <Field
                    name="enable"
                    id="enable"
                    component={SimpleSelect}
                    selectStyle={SelectStyle}
                    options={states}
                />
                <ErrorFormikForm field="enable" errors={errors} touched={touched}/>
              </div>
              <div className="w-full mt-5 flex justify-end">
                <ButtonClose buttonType="button" onClick={() => Router.push("/roles")}>
                    Close
                </ButtonClose>
                <ButtonConfirm>Save</ButtonConfirm>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
	);
};

export default RoleCreate;
