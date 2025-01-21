'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function ReportsChart() {
  const data = [
    { name: "Spam", value: 1 },
    { name: "Harassment", value: 3 },
    { name: "Scam", value: 5 },
    { name: "NSFW Content", value: 9 },
    { name: "Hate Speech", value: 2 },
  ];

  const sortedData = [...data].sort((a, b) => b.value - a.value)
  const topReason = sortedData[0]

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Top 5 Reasons for Reports</CardTitle>
          <CardDescription>
            Overview of the most common reasons for user reports
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ChartContainer
            config={{
              value: {
                label: "Number of Reports",
                color: "#4558ff",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sortedData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="#4558ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <div className="mt-8 p-6 bg-gradient rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Top Reason for Reports</h2>
        <p className="text-xl">
          The most reported issue is <span className="font-bold text-yellow-300">{topReason.name}</span> with{" "}
          <span className="font-bold text-yellow-300">{topReason.value}</span> reports.
        </p>
      </div>
    </>
  )
}

