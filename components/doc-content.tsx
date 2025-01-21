import { getDocContent } from "@/lib/docs"

export default async function DocContent({ slug }: { slug: string }) {
  const content = await getDocContent(`${slug}.md`)

  return (
    <div className="prose dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

