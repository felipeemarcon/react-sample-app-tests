import { IconButton } from "@stone-payments/jade"
import { useState } from "react"

export default function Sidebar({ visibility }: { visibility: boolean }) {
  const [expanded, setExapended] = useState(true)
  return (
    <aside
      className={`hidden md:flex flex-shrink-0 items-end sticky top-0 md:fixed md:left-0 lg:relative p-3 overflow-hidden ${visibility ? 'md:w-[80px] lg:w-[256px]' : 'md:w-0 md:px-0 border-r-0'} h-screen transition-all duration-500 ease-in-out min-h-screen bg-white border-r border-slate-200`}
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
