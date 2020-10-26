import React  from "react";
import {useRouter} from "next/router";
import UserView from "../../../templates/users/UserView";

const IndexPage = (): any =>
{
    const router = useRouter()
    const { userId } = router.query

    return (
        <UserView />
    )
};

export default IndexPage;
