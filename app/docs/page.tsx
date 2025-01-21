import type { Metadata } from "next"
import { Suspense } from "react"
import Loading from "./loading"
import DocContent from "@/components/doc-content"

export const metadata: Metadata = {
  title: "Documentation | Discord Justice",
  description: "Learn how to use the Discord Justice bot and keep your server safe.",
}

export default function DocsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <DocContent slug="getting-started" />
    </Suspense>
  )
}

