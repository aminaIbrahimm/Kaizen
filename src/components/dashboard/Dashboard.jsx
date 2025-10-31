import React from "react";
import Calendar from './../calendarHeatmap/Calendar';
import Footer from './../footer/Footer';
import Chart from "../chart/Chart";

export default function Dashboard() {

  return (
    <>
      <Chart/>
      <Calendar />
      <Footer />
    </>
  );
}
