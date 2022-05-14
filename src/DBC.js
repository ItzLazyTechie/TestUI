import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function DisplayBarChart() {

 const options = {
  plugins: {
    title: {
      display: true,
      text: 'Per A to Ben Allocation Percentage',
      font: {
        family: 'Montserrat'
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
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;
            },
            color: '#fff',
        },
    }
   },
        legend: {
          labels: {
              font: {
                  family: 'Montserrat'
              }
          }
      }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false
      }
      
    },
    y: {
      stacked: true,
      grid: {
        display: false
      },
      ticks: {   
        min: 0,
        max: 100,
        callback: function(value){return value+ "%"}
     }
    },
  },
};

const labels = ['A1', 'A2', 'A3', 'A4', 'A5'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Ben1',
      data: [10,5,3,17,7],
      backgroundColor:  '#caf270',
    },
    {
      label: 'Ben2',
      data: [5,10,17,27,23],
      backgroundColor: '#45c490',
    },
    {
      label: 'Ben3',
      data: [20,5,20,2,15] ,
      backgroundColor: '#008d93',
    },
    {
      label: 'Ben4',
      data: [5,20,10,4] ,
      backgroundColor: '#2e5468',
    },
  ],
};
 
 return (
    <div style={{width:"600px",height:"400px"}}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default DisplayBarChart;
