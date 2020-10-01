import React from "react";
import Link from 'next/link'
import Nav from '../../components/Nav';

const UsersPage = () => (
  <>
    <Nav />
    <p>Users</p>
    <Link href="/">
      <a>Back to home</a>
    </Link>
  </>
)

export default UsersPage;