import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
// ];

const data = [
  {
      "month": "Mar",
      "investment": 100000,
      "sell": 241,
      "revenue": 10401
  },
  {
      "month": "Apr",
      "investment": 200000,
      "sell": 423,
      "revenue": 24500
  },
  {
      "month": "May",
      "investment": 500000,
      "sell": 726,
      "revenue": 67010
  },
  {
      "month": "Jun",
      "investment": 500000,
      "sell": 529,
      "revenue": 40405
  },
  {
      "month": "Jul",
      "investment": 600000,
      "sell": 601,
      "revenue": 50900
  },
  {
      "month": "Aug",
      "investment": 700000,
      "sell": 670,
      "revenue": 61000
  }
]


export default function Rechert() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="investment"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
  );
}



