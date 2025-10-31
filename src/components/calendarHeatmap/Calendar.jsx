import React from 'react'
import './Calender.css'
import { Tooltip as ReactTooltip } from "react-tooltip";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import "react-tooltip/dist/react-tooltip.css";
import { PiArrowFatLinesRightDuotone } from 'react-icons/pi';

export default function Calendar() {
    const today = new Date();
      const currentYear = today.getFullYear();
      const startDate = new Date(currentYear, 0, 1);
      const endDate = new Date(currentYear, 11, 31);
      const values = [
        { date: `${currentYear}-01-01`, count: 2 },
        { date: `${currentYear}-01-22`, count: 4 },
        { date: `${currentYear}-01-30`, count: 3 },
        { date: `${currentYear}-02-25`, count: 1 },
      ];
  return (
    <>
      <div className="bg-white hidden lg:p-10 lg:block rounded shadow-xl dark:bg-gray-900 mb-5 dark:shadow-xl">
        <p className="flex items-center justify-center text-gray-800 dark:text-gray-100 mb-10 text-xl font-semibold">
          Total Engagement This Year{" "}
          <PiArrowFatLinesRightDuotone className="ms-2" />{" "}
          <span className="font-bold ms-3 text-3xl">{currentYear}</span>
        </p>
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
          showWeekdayLabels={true}
          horizontal={true}
          tooltipDataAttrs={(value) => {
            if (!value) return {};
            const date = value.date ? new Date(value.date) : new Date(value);
            return {
              "data-tooltip-id": "heatmap-tooltip",
              "data-tooltip-content": date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
            };
          }}
          showOutOfRangeDays={true}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-gitlab-${value.count}`;
          }}
        />
        <ReactTooltip id="heatmap-tooltip" place="top" />
        <p className="flex items-center justify-end text-gray-800 dark:text-gray-100">
          Less <span className="bg-[#c0bebe] w-3 h-3 ms-1 rounded block"></span>
          <span className="bg-[#93b8d3] w-3 h-3 ms-1  rounded block"></span>
          <span className="bg-[#7399be] w-3 h-3 ms-1 rounded block"></span>
          <span className="bg-[#49729b] w-3 h-3 ms-1 rounded block"></span>
          <span className="bg-[#254e77] w-3 h-3 ms-1 me-1 rounded block"></span>
          More
        </p>
      </div>
    </>
  );
}
