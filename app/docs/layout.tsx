import Header from "@/components/header"
import Footer from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient text-foreground">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-16 flex">
        <DocsSidebar className="w-64 flex-shrink-0 mr-8" />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

