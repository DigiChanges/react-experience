import {Fragment}  from "react";
import UserUpdate from '../../Templates/Tables/UsersTable/UserUpdate';
import {useRouter} from "next/router";

const IndexPage = () => {
    const router = useRouter()
    const loginData = require("../../data/logindata.json");
    return (
        <Fragment>
            <UserUpdate userId={router.query.userId}/>
        </Fragment>
    )};

export default IndexPage;