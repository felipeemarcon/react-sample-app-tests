import { IconButton } from "@stone-payments/jade"
import { useState } from "react"

export default function Sidebar({ visibility }: { visibility: boolean }) {
  const [expanded, setExapended] = useState(true)
  return (
    <aside
      className={`hidden md:flex flex-shrink-0 items-end top-0 md:fixed md:left-0 p-3 overflow-hidden ${visibility ? 'md:w-(--app-sidebar-width-md) lg:w-(--app-sidebar-width-lg)' : 'md:w-0 md:px-0 border-r-0'} h-screen transition-all duration-500 ease-in-out min-h-screen bg-white border-r border-slate-200`}
    >
      <div className="lg:hidden">
        <IconButton
          icon={expanded ? 'arrow-left' : 'arrow-right'}
          variant="neutral-ghost"
          onClick={() => expanded ? setExapended(false) : setExapended(true)} />
      </div>
    </aside>
  )
}
