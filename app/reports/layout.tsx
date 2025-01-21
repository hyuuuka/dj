import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Report Statistics | Discord Justice',
}

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

