import React  from "react";
import {useRouter} from "next/router";
import UserUpdate from "../../../templates/users/UserUpdate";

const IndexPage = (props): any =>
{
    const router = useRouter()
    const { userId } = router.query

    return (
        <UserUpdate />
    )
};

export default IndexPage;
