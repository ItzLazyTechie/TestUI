import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function DisplayPieChart() {
  
  const pieChartDataArray = [20, 20, 10, 45];
  const beneficiaries = [
    "B1",
    "B2",
    "B3",
    "B4"
  ];


  let total = pieChartDataArray.reduce((accumulator, currentValue) => accumulator + currentValue);


  let pieChartlabels = pieChartDataArray.map(
    (value, index) => Math.round((value / total) * 100) + "%"
  );
  const pieChartlabelNames = pieChartDataArray.map((item, index) => {
    return beneficiaries[index] + " - " + pieChartlabels[index];
  });


  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
            font: {
                family: 'Montserrat'
            }
        }
      },
      datalabels: {
        display: true,
        color: "white",
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => sum += data);
              let percentage = (value * 100 / sum).toFixed(2) + "%";
              return percentage;
            },
            color: '#fff',
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (item) => (item.label)
        }
      },
      title: {
        display: true,
        text: 'Total A - Ben Wise Allocation',
        font: {
          family: 'Montserrat'
        }
      },
    }
  };

  const data = {
    labels: pieChartlabelNames,
    datasets: [
      {
        data: pieChartDataArray,
        backgroundColor: [
          "#82C272", "#00A88F", "#0087AC", "#005FAA", "#323B81"
        ]
      },
    ],
  };

  return (
    <div style={{ width: "70%", height: "100%" }}>
      <Pie
        data={data}
        options={options}
      />
    </div>

  );
};
