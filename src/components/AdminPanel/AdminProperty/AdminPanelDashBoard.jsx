import React from "react";
import SideBarAdmin from "./SidebarAdmin";
import SlugPage from "./SlugPage";

export default function AdminPanelDashBoard() {
  return (
    <div className="w-full max-w-[1440px] flex  h-auto bg-zinc-900">
      <SideBarAdmin />
      <SlugPage />
    </div>
  );
}
