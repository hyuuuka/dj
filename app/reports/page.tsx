import Header from "../../components/header"
import Footer from "../../components/footer"
import { AnimateIn } from "../../components/animate-in"
import { ReportsChart } from "../../components/reports-chart"

export const metadata = {
  title: "Report Statistics",
}

export default function ReportsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <AnimateIn from="bottom">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Report Statistics</h1>
          <ReportsChart />
        </AnimateIn>
      </main>
      <Footer />
    </div>
  )
}

