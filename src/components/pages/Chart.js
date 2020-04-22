import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Pie, Doughnut, Line, Bar } from 'react-chartjs-2';
import { ALL_EVENTS } from '../graphql/queries';
import '../../index.css'
const Chart = () => {

  const [chartData, setChartData] = useState({})

const { data } = useQuery(ALL_EVENTS);

  useEffect(() => {
    if(data && data.events){
        const states= data.events.map(item=>item.state)
        const stateNames = states.filter((item,index,self)=>self.indexOf(item)===index)
        const counts = {}
        states.forEach((x)=>{counts[x]=(counts[x] || 0)+1})
         const statesNum = Object.values(counts)
        setChartData({
            labels: stateNames,
            datasets: [{
              label: '# of events in state',
              data: statesNum,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(241, 130, 141,0.2)',
                'rgba(220, 198, 224, 0.2)',
                'rgba(213, 184, 255, 0.2)',
                'rgba(210, 82, 127, 0.2)',
                'rgba(255, 236, 139, 0.2)',
                'rgba(63, 195, 128, 0.2)',
                'rgba(228, 120, 51, 0.2)',
                'rgba(34, 167, 240, 0.2)',
                'rgba(155, 89, 182, 0.2)',
                'rgba(214, 69, 65, 0.2)',
                'rgba(243, 156, 18, 0.2)',
                'rgba(242, 120, 75, 0.2)',
                'rgba(54, 215, 183, 0.2)',
                'rgba(135, 211, 124, 0.2)',
                'rgba(107, 185, 240, 0.2)',
                'rgba(77, 19, 209, 0.2)', 
                'rgba(219, 10, 91, 0.2)',
                'rgba(241, 169, 160, 0.2)',
                'rgba(244, 208, 63, 0.2)',
                'rgba(22, 160, 133, 0.2)',
                'rgba(142, 68, 173, 0.2)',
                'rgba(115, 101, 152, 0.2)',
                'rgba(236, 100, 75, 0.2)',
                'rgba(240, 52, 52, 0.2)',
                'rgba(134, 226, 213, 0.2)',
                'rgba(30, 139, 195, 0.2)',
                'rgba(1, 50, 67, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(241, 130, 141,1)',
                'rgba(220, 198, 224, 1)',
                'rgba(213, 184, 255, 1)',
                'rgba(210, 82, 127, 1)',
                'rgba(255, 236, 139, 1)',
                'rgba(63, 195, 128, 1)',
                'rgba(228, 120, 51, 1)',
                'rgba(34, 167, 240, 1)',
                'rgba(155, 89, 182, 1)',
                'rgba(214, 69, 65, 1)',
                'rgba(243, 156, 18, 1)',
                'rgba(242, 120, 75, 1)',
                'rgba(54, 215, 183, 1)',
                'rgba(135, 211, 124, 1)',
                'rgba(107, 185, 240, 1)',
                'rgba(77, 19, 209, 1)',
                'rgba(219, 10, 91, 1)',
                'rgba(241, 169, 160, 1)',
                'rgba(244, 208, 63, 1)',
                'rgba(22, 160, 133, 1)',
                'rgba(142, 68, 173, 1)',
                'rgba(115, 101, 152, 1)',
                'rgba(236, 100, 75, 1)',
                'rgba(240, 52, 52, 1)',
                'rgba(134, 226, 213, 1)',
                'rgba(30, 139, 195, 1)',
                'rgba(1, 50, 67, 1)'
              ],
              borderWidth: 1
            }]
          })

    }

  }, [data])

  return (<div>
    
{data && data.events.length &&  <ChartSection chartData={chartData} list={data.events}/>}
  </div>)
}

const ChartSection = ({chartData})=>{
console.log(chartData.datasets, 'chartdata*****')
    return(
        <div className="container">
        
        <div className="chart-container">
        Pie Graph
        <Pie
           data={chartData}
           options={{
             title: {
               display: true,
               text: 'Event Location',
               fontSize: 20
             },
             legend: {
               display: true,
               position: 'left'
             },
           }}
           
         />
         </div>

<div className="chart-container">
Doughnut Graph
             <Doughnut
      data={chartData}
      options={{
        title: {
          display: true,
          text: 'Event Locaion',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right'
        }
      }}
    />
    </div>

    <div className="chart-container">
Bar char 
         <Bar data={chartData} /> 
         </div>

         <div className="chart-container">

    Line
        <Line
      data={chartData}
      options={{
        responsive: true,
        title: { text: "Event location", display: true },
        scales: {
          yAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      }}
    />
    </div>

         </div>
         )
}


export default Chart
