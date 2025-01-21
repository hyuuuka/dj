import type { Metadata } from "next"
import { Suspense } from "react"
import { getDocContent } from "@/lib/docs"
import { notFound } from "next/navigation"
import Loading from "../loading"
import DocContent from "@/components/doc-content"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const content = await getDocContent(`${params.slug}.md`)
    const title = content.match(/<h1>(.*?)<\/h1>/)?.[1] || "Documentation"
    return {
      title: `${title} | Discord Justice`,
    }
  } catch (error) {
    return {
      title: "Documentation | Discord Justice",
    }
  }
}

export default function DocPage({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <DocContent slug={params.slug} />
    </Suspense>
  )
}

