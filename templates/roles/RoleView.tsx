import React from "react";
import Router from "next/router";
import Title from "../../atoms/Title";
import { Field, Form, Formik } from "formik";
import ButtonClose from '../../molecules/ButtonClose';
import Label from '../../atoms/Label';
import MultiSelect from '../../atoms/MultiSelect';
import { SelectTransform } from '../../transforms/default';
import SelectStyle from '../../assets/customStyles/SelectStyle';
import SimpleSelect from '../../atoms/SimpleSelect';
import { states } from '../../entities';

const RoleView = ({roleSelected, permissionsList}) =>
{
  return (
    <section className="px-4">
      <div className="mb-2 ">
        <Title className="text-3xl font-bold" titleType="h1">
          View Role
        </Title>
      </div>
      {roleSelected ? (
        <Formik
          initialValues={{
            name: roleSelected.name,
            slug: roleSelected.slug,
            permissions: roleSelected.permissions,
            enable: roleSelected.enable,
          }}
          onSubmit={() => null}
        >
          {({ errors, touched }) => (
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
                    disabled
                  />
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
                    disabled
                  />
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
                    isDisabled={true}
                  />
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
                    isDisabled={true}
                  />
                </div>
                <div className="w-full mt-5 flex justify-end">
                  <ButtonClose buttonType="button" onClick={() => Router.push('/roles')}>
                    Close
                  </ButtonClose>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      ) : <p>No role selected</p>}
</section>
);
};

export default RoleView;
