import Link from "next/link";
import * as React from "react";
import Login from '../components/login';
import NavBar from '../components/navBar';



const IndexPage: React.FunctionComponent = () => {
  

    return (
      
    <div>
      <NavBar/>
      <div style={{justifyContent:'center', alignItems:'center',display:'flex',marginTop:'150px'}}>
        <Login/>
      </div>
    </div>
  );
};

export default IndexPage;