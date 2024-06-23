import React from 'react'
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2'

const labels = ["January","february","March","April","May","June"]
const data = {
    labels:labels,
    datasets:[
       {
        label:"My First dataset",
        backgroundColor:"rgb(25, 99, 132)",
        borderColor:"rgb(255, 99, 132)",
        data :[0,10,5,4,20,30,45]
       },
    ],
};

function Piechart() {
  return (
    <div className='bg-white border border-secondary'>
      <Pie data={data}></Pie>
    </div>
  )
}

export default Piechart
