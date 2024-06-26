import React from 'react';
import { Outlet } from 'react-router-dom';
import Slidebar from "../components/Slidebar"
import Emails from './Emails';

const Body = () => {
  return (
     <div className="flex">
    <Slidebar/>
    {/* <Emails/> */}
    <Outlet/>

  </div>
  );
}

export default Body;
