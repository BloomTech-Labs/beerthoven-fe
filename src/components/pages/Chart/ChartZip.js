import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { ALL_PERSONS } from '../../graphql/queries';
import '../../../index.css'
import { bgColor, bgColorBorder } from './colors';



const ChartZip = () => {

  const [chartData, setChartData] = useState({})
  const { data } = useQuery(ALL_PERSONS);

  console.log(data)

  useEffect(() => {
    if (data && data.persons) {
      const people = data.persons.map(item => item.zip) 
      const counts = {}
      people.forEach((x) => { counts[x] = (counts[x] || 0) + 1 })
      const pplNum = Object.values(counts)

      setChartData(
          {

        labels: Object.keys(counts),
        datasets: [{
          label: '# of people per zip code',
          data: pplNum,
          backgroundColor: bgColor,
          borderColor: bgColorBorder,
          borderWidth: 1
        }]
      }
      
      )
    }

  }, [data])


  return (<div>
Eww
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
              text: 'Event Location- Doughnut Graph',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'left'
            }
          }}
        />
  )
}


export default ChartZip

