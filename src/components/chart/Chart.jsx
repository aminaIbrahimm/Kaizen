import React, { useEffect, useRef } from 'react'
import { Chart as ChartJS } from "chart.js/auto";

export default function Chart() {
    const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const createChart = () => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const isDark = document.documentElement.classList.contains("dark");
    chartInstance.current = new ChartJS(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Hours Spent",
            data: [10, 25, 15, 40, 30, 50, 0, 0, 0, 0, 0, 0],
            borderColor: isDark ? "#4ade80" : "#16a34a",
            backgroundColor: isDark
              ? "rgba(74, 222, 128, 0.3)"
              : "rgba(22, 163, 74, 0.3)",
            fill: true,
            tension: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: isDark ? "#e5e7eb" : "#1f2937",
            },
          },
          title: {
            display: true,
            text: "Time Spent (Hours)",
            color: isDark ? "#e5e7eb" : "#1f2937",
            font: {
              size: 20,
              weight: "bold",
            },
            padding: {
              top: 20,
              bottom: 30,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: isDark ? "#d1d5db" : "#374151",
            },
            grid: {
              color: isDark ? "#374151" : "#e5e7eb",
            },
          },
          y: {
            ticks: {
              color: isDark ? "#d1d5db" : "#374151",
            },
            grid: {
              color: isDark ? "#374151" : "#e5e7eb",
            },
          },
        },
      },
    });
  };
     useEffect(() => {
    createChart();

    const observer = new MutationObserver(() => {
      createChart(); 
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 p-5 mb-7 rounded shadow-lg">
        <canvas ref={chartRef}></canvas>
      </div>
    </>
  );
}
