import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Pie, Doughnut, Line, Bar } from 'react-chartjs-2';
import { ALL_EVENTS } from '../../graphql/queries';
import ChartLine from './ChartLine'
import ChartPie from './ChartPie'
import ChartZip from './ChartZip'
import '../../../index.css'
import { bgColor, bgColorBorder } from './colors';

const Chart = () => {

  const [chartData, setChartData] = useState({})

  const { data } = useQuery(ALL_EVENTS);
  useEffect(() => {
    if (data && data.events) {
      const states = data.events.map(item => item.state) //replace item.state with item.zip once all data is transfered
      const stateNames = states.filter((item, index, self) => self.indexOf(item) === index)
      const counts = {}
      states.forEach((x) => { counts[x] = (counts[x] || 0) + 1 })
      const statesNum = Object.values(counts)
      setChartData({
        labels: stateNames,
        datasets: [{
          label: '# of events in state',
          data: statesNum,
          backgroundColor: bgColor,
          borderColor: bgColorBorder,
          borderWidth: 1
        }]
      })
    }

  }, [data])

  return (<div>

    {data && data.events.length && (
      <>
        <ChartSection chartData={chartData} list={data.events} />
        <ChartLine />

      </>
    )}
  </div>)
}

const ChartSection = ({ chartData }) => {
  return (
    <div className="container">
      <div className="chart-container">
        <Pie
          data={chartData}
          options={{
            title: {
              display: true,
              text: 'Event Location - Pie Graph',
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
        <ChartZip />
      </div>

      <div className="chart-container">
        <Bar data={chartData} 
        options={{ 
          title: { text: "Event location - Bar Chart", 
                    display: true }, 
          scales: {
                      yAxes: [
                        { ticks: { beginAtZero: true }}
                      ]
                  }
        }}
           />
      </div>

      <div className="chart-container">


        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Event location - Line Chart", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: { display: false }
                }
              ],
              xAxes: [{ gridLines: { display: false } }]
            }
          }}
        />
      </div>

      <div className="chart-container">

      <ChartPie/>
 
       </div>

    </div>

    
  )
}


export default Chart