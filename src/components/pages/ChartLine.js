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
        // console.log(data.sort(), 'data')
        const Moment = require('moment')
        console.log('data', (data.events.map(i=>i)).sort((a,b)=>a.valueOf()-b.valueOf()))
        console.log('data74', (data.events.map(i=>i)).sort((a,b)=>new Moment(a.event_date).format('YYYYMMDD')-new Moment(b.date).format('YYYYMMDD')))

        console.log('data34',(data.events.map(i=>i)) )
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dates2 = data.events.map(item=>new Date(item.event_date))
        const dates3 = data.events.map(item=>new Date(item.event_date))
// console.log('date3', moment(dates3))
console.log('dates3', dates3)
        const dates = data.events.map(item=>new Date(item.event_date).toDateString().split(' ').slice(1).join(' '))
        function sortByMonthYear(a, b) {
            var as = a.split(' '),
              bs = b.split(' '),
              ad = new Date(as[0] + ' 1,' + as[1]),
              bd = new Date(bs[0] + ' 1,' + bs[1]);
            //   console.log(ad.getTime() - bd.getTime())
            return ad.getTime() - bd.getTime();
       
        }
        console.log('sort by year month',dates.sort(sortByMonthYear))
       
       
        const dateObj = dates.map(i=>i)
        console.log(dateObj, 'dateobd')
  
        console.log('dates2', dates2.map(i=>i).sort())
        // const dates = data.events.map(item=>new Date(item.event_date))
        const dateLabel = dates.filter((item,index,self)=>self.indexOf(item)===index)
        console.log('should be sorted',dates.sort())
        console.log('datelabel',moment(dateLabel))

        var getDaysArray = function(s,e) {for(var a=[],d=new Date(s);d<=e;d.setDate(d.getDate()+1)){ a.push(new Date(d));}return a;};

        console.log('last 30 days',getDaysArray)

        const states= data.events.map(item=>item.state)
        const stateNames = states.filter((item,index,self)=>self.indexOf(item)===index)
        const counts = {}
        states.forEach((x)=>{counts[x]=(counts[x] || 0)+1})
         const statesNum = Object.values(counts)
        setChartData({
            labels: dateLabel,  
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
