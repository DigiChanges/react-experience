import React  from "react";
import {useRouter} from "next/router";
import UserUpdate from "../../../templates/users/UserUpdate";

const IndexPage = (props): any =>
{
    const router = useRouter()
    const { userId } = router.query
console.log({userId})
    return (
        <UserUpdate />
    )
};

export default IndexPage;
