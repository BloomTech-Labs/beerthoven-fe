import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Line , Pie} from 'react-chartjs-2';
import { ALL_USERS } from '../../graphql/queries';
import '../../../index.css'
import { bgColor, bgColorBorder } from './colors';


//TO GET LABEL NAME
//sort data by date

const sortByDate = (data) => {
  return data.sort((a, b) => {
    let dateA = new Date(a.event_date), dateB = new Date(b.event_date);
    return dateA - dateB;
  })

}
const ChartPie = () => {

  const [chartData, setChartData] = useState({})
  const { data } = useQuery(ALL_USERS);

  useEffect(() => {
    if (data && data.users) {

    //   const sortData = sortByDate(data.events)
    //   //Extract and reformat Date string

        const userRoles= data.users.map(item=>item.role)

      //REMOVE DUPLICATES LABEL ROLES
      const roleLabel = [...new Set(userRoles)]

      //COUNT EACH USER IN EACH ROLE
    const counts = {}
      userRoles.forEach((x) => { counts[x] = (counts[x] || 0) + 1 })
      const userCount = Object.values(counts)
      setChartData({
        labels: roleLabel,
        datasets: [{
          label: 'sales',
          data: userCount,
          backgroundColor: bgColor,
          borderColor: bgColorBorder,
          borderWidth: 1,
          pointRadius: 2,
        }]
      })
    }

  }, [data])

  return (<div>
    {data && data.users.length && <ChartPieSection chartData={chartData} />}
  </div>)
}

const ChartPieSection = ({ chartData }) => {

//   const dateRange = `${chartData.labels ? chartData.labels[0] : 'na'} to ${chartData.labels ? chartData.labels[chartData.labels.length - 1] : 'na'}`
  return (
      <>
    <Pie
          data={chartData}
          options={{
            title: {
              display: true,
              text: 'Beerthoven Users- Pie Graph',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'left'
            },
          }}

        />
        </>

  )
}


export default ChartPie

