import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Line} from 'react-chartjs-2';
import { ALL_EVENTS } from '../graphql/queries';
import moment from 'moment';
import '../../index.css'
const ChartLine = () => {

  const [chartData, setChartData] = useState({})

const { data } = useQuery(ALL_EVENTS);

  useEffect(() => {
    if(data && data.events){

      //sort data by date
const sortData=data.events.sort((a,b)=>{
let dateA = new Date(a.event_date), dateB = new Date(b.event_date);
return dateA - dateB;
})
        //Extract and reformat Date string
        const dates = data.events.map(item=>new Date(item.event_date).toDateString().split(' ').slice(1).join(' '))
        const dates_pt2 = sortData.map(item=>new Date(item.event_date).toDateString().split(' ').slice(1).join(' '))
        const dates_pt3 = sortData.map(item=>item)
        console.log('dates_pt3',sortData)


       

        //REMOVE DUPLICATES
        const dateLabel_pt2 = dates_pt2.filter((item,index,self)=>self.indexOf(item)===index)
        const dateInfos = sortData.filter((item,index,self)=>self.indexOf(item)===index) //this isnt working
        

        const states= data.events.map(item=>item.state)
        
        console.log('datelable2', dateLabel_pt2 )

        const stateNames = states.filter((item,index,self)=>self.indexOf(item)===index)
        const counts = {}
        states.forEach((x)=>{counts[x]=(counts[x] || 0)+1})
         const statesNum = Object.values(counts)
        setChartData({
            labels: dateLabel_pt2,  
            datasets: [{
              label: '# of events in state',
              fill: 'none',
              data: statesNum,
              backgroundColor: 'rgba(255, 99, 132, 1)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              pointRadius: 2,
            }]
          })

    }

  }, [data])

  return (<div>
    
{data && data.events.length &&  <ChartLineSection chartData={chartData} list={data.events}/>}
  </div>)
}

const ChartLineSection = ({chartData})=>{
    return(

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
        title: { text: "Event location", display: true },
        scales: {
          yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        }
      }}
    />

         )
}


export default ChartLine
