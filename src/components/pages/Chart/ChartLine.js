import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Line } from 'react-chartjs-2';
import { ALL_EVENTS } from '../../graphql/queries';
import '../../../index.css'
const ChartLine = () => {

  const [chartData, setChartData] = useState({})

  const { data } = useQuery(ALL_EVENTS);

  useEffect(() => {
    if (data && data.events) {

      //TO GET LABEL NAME
      //sort data by date
      const sortData = data.events.sort((a, b) => {
        let dateA = new Date(a.event_date), dateB = new Date(b.event_date);
        return dateA - dateB;
      })
      //Extract and reformat Date string
      const dates = sortData.map(item => new Date(item.event_date).toDateString().split(' ').slice(1).join(' '))

      //REMOVE DUPLICATES
      const dateLabel = dates.filter((item, index, self) => self.indexOf(item) === index)
      const totals = data.events.reduce(
        (totals, { event_date, sales_net }) =>
          totals[event_date]
            ? { ...totals, [event_date]: totals[event_date] + sales_net }
            : { ...totals, [event_date]: sales_net },
        {}
      );

      const dailyTotals = Object.values(totals)

      setChartData({
        labels: dateLabel,
        datasets: [{
          label: 'sales',
          fill: 'none',
          data: dailyTotals,
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          pointRadius: 2,
        }]
      })
    }

  }, [data])
  const dateRange = `${chartData.labels ? chartData.labels[0] : 'na'} to ${chartData.labels ? chartData.labels[chartData.labels.length - 1] : 'na'}`

  return (<div>

    {data && data.events.length && (
     <Line
     width={600}
     data={chartData}
     options={{
       elements: {
         line: {
           tension: 0.000001
         }
       },
       responsive: true,
       title: { text: `Net Sales from ${dateRange} - Line Graph`, display: true },
       scales: {
         yAxes: [{
           ticks: {
             beginAtZero: true
           }
         }]
       }
     }}
   />  
    )}
  </div>)
}

export default ChartLine

