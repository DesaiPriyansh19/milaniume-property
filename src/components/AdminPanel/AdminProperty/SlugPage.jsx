import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainDashBoard from "./MainDashBoard";
import ManagePeoples from "./ManagePeoples";
import ViewProperty from "./ViewProperty";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import EnquiresPage from "./EnquiresPage";
import UserPostedProperty from "../UserPostProperty/UserPostedProperty";
import UserRequirementPost from "../UserRequirementPost/UserRequirementPost";
import RecycleBinProperty from "../RecycleBinProperty/RecycleBinProperty";

export default function SlugPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <div className="w-full h-auto">
      {slug === "dashboard" && <MainDashBoard />}
      {slug === "manage-peoples" && <ManagePeoples />}
      {slug === "enquiries" && <EnquiresPage />}
      {slug === "add-property" && <ViewProperty />}
      {slug === "user-post" && <UserPostedProperty />}
      {slug === "require-post" && <UserRequirementPost />}
      {slug === "recycle-bin" && <RecycleBinProperty />}
      {slug === "logout" && handleLogout()}
      {slug === "bar-chart" && <BarChart />}
      {slug === "pie-chart" && <PieChart />}
      {slug === "line-chart" && <LineChart />}
    </div>
  );
}
