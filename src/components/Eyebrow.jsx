export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[.13em] text-[#1b191e]">
      <span aria-hidden="true" className="h-0.5 w-5.75  bg-[linear-gradient(90deg,#7957dd,#ff8a6d)]" />
      {children}
    </div>
  )
}
