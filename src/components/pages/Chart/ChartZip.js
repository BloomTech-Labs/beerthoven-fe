import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Doughnut } from 'react-chartjs-2';
import { ALL_PERSONS } from '../../graphql/queries';
import '../../../index.css'
import { bgColor, bgColorBorder } from './colors';



const ChartZip = () => {

  const [chartData, setChartData] = useState({})
  const { data } = useQuery(ALL_PERSONS);


  useEffect(() => {
    if (data && data.persons) {
      const people = data.persons.map(item => item.zip)
      const counts = {}
      people.forEach((x) => { counts[x] = (counts[x] || 0) + 1 })
      const pplNum = Object.values(counts)

      const countEntry = Object.fromEntries(
        Object.entries(counts).slice(0, 20)
      );


      setChartData(
        {

          labels: Object.keys(countEntry),
          datasets: [{
            label: '# of people per zip code',
            data: Object.values(countEntry),
            backgroundColor: bgColor,
            borderColor: bgColorBorder,
            borderWidth: 1
          }]
        }

      )
    }

  }, [data])


  return (<div>
    {data && data.persons.length && <ChartZipSection chartData={chartData} />}
  </div>)
}

const ChartZipSection = ({ chartData }) => {

  const dateRange = `${chartData.labels ? chartData.labels[0] : 'na'} to ${chartData.labels ? chartData.labels[chartData.labels.length - 1] : 'na'}`
  return (

    <Doughnut
      data={chartData}
      options={{
        title: {
          display: true,
          text: 'Attendee Location- Doughnut Graph',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right', 
          align: 'center',
        }
      }}
    />
  )
}


export default ChartZip

