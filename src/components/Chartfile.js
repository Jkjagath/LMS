
import React from 'react'
 import {Doughnut,Bar} from 'react-chartjs-2';
 import {Chart,ArcElement,Tooltip, Legend } from 'chart.js'
 import 'chart.js/auto';
 Chart.register(ArcElement, Tooltip, Legend );




 
const data={
    labels:["Mock 1","Mock 2","Mock 3","Mock 4","Mock 5"],
    datasets:[{
        data:[140,160,170,180,190],
        backgroundColor:["red","orange","green","yellow","blue"]
    },
    // {
    //     data:[2,8,14,10,9],
    //     backgroundColor:["red","orange","green","yellow","blue"]
    // 
    ],
options:[{
    scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            
          //   stepSize: 2,
            callback: function(value,index) {
                console.log(this.getLaelForValue(value));
              // return `${value}`
            }
          }
        }]
      }
}]
};

// const chartOptions = {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: false,
          
//         //   stepSize: 2,
//           callback: function(value,index) {
//               console.log(this.getLaelForValue(value));
//             // return `${value}`
//           }
//         }
//       }]
//     }
//   }



function Chartfile() {
  return (
    <div style={{width:"500px"}}>
        {/* <Doughnut data={data}/> */}
    <Bar data={data}/>
    </div>
  )
}

export default Chartfile