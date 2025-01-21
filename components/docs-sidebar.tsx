import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { title: "Getting Started", href: "/docs/getting-started" },
  { title: "Bot Usage", href: "/docs/bot-usage" },
  { title: "Commands", href: "/docs/commands" },
  { title: "Reporting", href: "/docs/reporting" },
  { title: "Server Security", href: "/docs/server-security" },
  { title: "FAQ", href: "/docs/faq" },
]

export function DocsSidebar({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav className={cn("space-y-2", className)}>
      {sidebarItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "block px-3 py-2 rounded-md text-sm font-medium",
            pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

