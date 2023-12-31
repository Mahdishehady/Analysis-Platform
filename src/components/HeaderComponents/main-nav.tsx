import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { getFirstStringBetweenSlashes } from "../sidebarCom/sidebar"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  const pathname = usePathname()
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/publisher/analysis/authors"
        className={`text-sm font-medium  ${
          (getFirstStringBetweenSlashes(pathname + '/')=== "publisher")? 'text-primary' : 'text-muted-foreground'
        } transition-colors hover:text-primary`}
      >
        Publisher
      </Link>
      <Link
        href="/advertiser/media-planner/review-ad"
        className={`text-sm font-medium  ${
          (getFirstStringBetweenSlashes(pathname + '/')=== "advertiser")? 'text-primary' : 'text-muted-foreground'
        } transition-colors hover:text-primary`}
      >
        Advertiser
      </Link>
      <Link
        href="/admin/user-managment"
        className={`text-sm font-medium  ${
          (getFirstStringBetweenSlashes(pathname + '/')=== "admin")? 'text-primary' : 'text-muted-foreground'
        } transition-colors hover:text-primary`}
      >
        Admin
      </Link>
     
    </nav>
  )
}