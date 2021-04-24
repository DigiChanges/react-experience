import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { ADMIN } from "../config/permissions";

interface HasPermissionProps extends PropsWithChildren<any> {
  permission: string
}

const HasPermission : React.FC<HasPermissionProps> = ({children, permission}) => {
  const { userPermissions, user } = useSelector((store) => store.Auth) || {};

  const shouldRender = () =>
  (userPermissions && user?.roles && userPermissions.includes(permission)) ||
  user?.roles.find((role) => role.slug === ADMIN);

  return (
    shouldRender()
    ?
    <>
      {children}
    </>
    :
    null
  )
}

export default HasPermission