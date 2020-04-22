import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Pie, Doughnut, Line } from 'react-chartjs-2';
import axios from 'axios'
import { ALL_EVENTS } from '../graphql/queries';


const Chart2 = () => {


  const [chartData, setChartData] = useState({})
  const [salary, setSalary] = useState([])
  const [age, setAge] = useState([])
  const [someData, setSomeData] = useState([])

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then(res => {
        console.log(res)
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary))
          empAge.push(parseInt(dataObj.employee_age))
        }

        setChartData({
          labels: [23, 45,45,67,78,7,87,87,87],
          datasets: [
            {
              label: "level of thickness",
              data: empSal,
              backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
              ],
              hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
              ],
              borderWidth: 4
            }
          ]
          
        })

        // setChartData({
        //     labels: empAge,
        //     datasets: [
        //       {
        //         label: "level of thickness",
        //         data: empSal,
        //         backgroundColor: [
        //           '#B21F00',
        //           '#C9DE00',
        //           '#2FDE00',
        //           '#00A6B4',
        //           '#6800B4'
        //         ],
        //         hoverBackgroundColor: [
        //           '#501800',
        //           '#4B5000',
        //           '#175000',
        //           '#003350',
        //           '#35014F'
        //         ],
        //         borderWidth: 4
        //       }
        //     ]
        //   })
      })
      .catch(err => console.log(err));
    console.log(empAge, empSal, '<---hello?')



  }



const { loading, data } = useQuery(ALL_EVENTS);
console.log('data++', data)
console.log(data)
console.log(chartData, 'chartdata')

  useEffect(() => {
    chart()
  }, [])

  
// const list = data && data.events.length && data.events.map(item=>item.state)

  return (<div>
    Line Graph
    {/* <Line
      data={chartData}
      options={{
        responsive: true,
        title: { text: "THICCNESS SCALE", display: true },
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
    /> */}

        Pie

    {/* <Pie
      data={chartData}
      options={{
        title: {
          display: true,
          text: 'Average Rainfall per month',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right'
        }
      }}
    /> */}

        Doughnut
    {/* <Doughnut
      data={chartData}
      options={{
        title: {
          display: true,
          text: 'Average Rainfall per month',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right'
        }
      }}
    /> */}
{data && data.events.length &&  <ChartSection chartData={chartData} list={data.events}/>
// console.log(data.events.map(item=>item.state))
  }
  </div>)




}

const ChartSection = ({list, chartData})=>{
    
    // data.events.map(item=>item.state)
    const data = list.map(item => item.state);
    console.log(data, '<**data')


    return(
        <Pie
           data={chartData}
           options={{
             title: {
               display: true,
               text: 'Average Rainfall per month',
               fontSize: 20
             },
             legend: {
               display: true,
               position: 'right'
             }
           }}
         />)
}


export default Chart2
