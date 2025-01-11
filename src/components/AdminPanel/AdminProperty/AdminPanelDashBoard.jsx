import React from "react";
import SideBarAdmin from "./SidebarAdmin";
import SlugPage from "./SlugPage";

export default function AdminPanelDashBoard() {
  
  return (
  <div className="bg-zinc-900">
    <div className="md:hidden w-full h-screen text-white text-center text-3xl flex justify-center items-center">
    <h1>Please Use Laptop or Pc<br></br> For Admin Pannel</h1></div>
    <div className="hidden md:flex w-full max-w-[1440px]   h-auto bg-zinc-900">
      <SideBarAdmin />
      <SlugPage />
    </div>
    </div>
  );
}
