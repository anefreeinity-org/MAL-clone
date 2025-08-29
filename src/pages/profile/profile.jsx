import React from "react";
import Sidebar from "../../components/sidebar";
import Autocomplete from "../../components/autocomplete";
import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
