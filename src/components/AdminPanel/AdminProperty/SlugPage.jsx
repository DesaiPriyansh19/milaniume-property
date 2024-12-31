import React from "react";
import { useParams } from "react-router-dom";
import MainDashBoard from "./MainDashBoard";
import ManagePeoples from "./ManagePeoples";
import ViewProperty from "./ViewProperty";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import EnquiresPage from "./EnquiresPage";

export default function SlugPage() {
  const { slug } = useParams();
  return (
    <div className="w-full h-auto">
      {slug === "dashboard" && <MainDashBoard />}
      {slug === "manage-peoples" && <ManagePeoples />}
      {slug === "enquiries" && <EnquiresPage />}
      {slug === "add-property" && <ViewProperty />}
      {slug === "bar-chart" && <BarChart />}
      {slug === "pie-chart" && <PieChart />}
      {slug === "line-chart" && <LineChart />}
    </div>
  );
}
