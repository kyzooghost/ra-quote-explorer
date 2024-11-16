"use client"

import React from 'react'
import { Line, LineChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { time: "11:10 am", Fibonacci: 5, Zk_evm: 84, Zk_onramp: 75 },
  { time: "11:11 am", Fibonacci: 2, Zk_evm: 83, Zk_onramp: 70 },
  { time: "11:12 am", Fibonacci: 6, Zk_evm: 88, Zk_onramp: 80 },
  { time: "11:13 am", Fibonacci: 5, Zk_evm: 85, Zk_onramp: 78 },
  { time: "11:14 am", Fibonacci: 4, Zk_evm: 80, Zk_onramp: 74 },
  { time: "11:15 am", Fibonacci: 3, Zk_evm: 90, Zk_onramp: 72 },
  { time: "11:16 am", Fibonacci: 3, Zk_evm: 90, Zk_onramp: 0 },
  { time: "11:17 am", Fibonacci: 6, Zk_evm: 88, Zk_onramp: 0 },
  { time: "11:18 am", Fibonacci: 2, Zk_evm: 83, Zk_onramp: 0 },
]

const chartConfig = {

  Fibonacci: {
    label: "Fibonacci",
    color: "#23B5D3",
  },
  Zk_evm: {
    label: "ZK EVM",
    color: "#279AF1",
  },
  Zk_onramp: {
    label: "Zk Onramp",
    color: "#330036",
  },
} satisfies ChartConfig

export  function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[150px] w-full">
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Fibonacci"
          stroke="var(--color-Fibonacci)"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="Zk_evm"
          stroke="var(--color-Zk_evm)"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="Zk_onramp"
          stroke="var(--color-Zk_onramp)"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ChartContainer>
  )
}