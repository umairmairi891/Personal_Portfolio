import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import GradientText from '../components/GradientText.jsx'

export default function NotFound() {
  return (
    <main className="mx-auto min-h-[calc(100vh-150px)] w-full max-w-[1180px] px-8 pb-[100px] pt-[100px] max-md:px-5 max-md:pb-[70px] max-md:pt-[67px]">
      <Eyebrow>Lost in the tabs</Eyebrow>
      <h1 className="mb-8 mt-6 text-[clamp(48px,6vw,74px)] font-medium leading-[1.06] tracking-[-.075em] max-md:text-[clamp(44px,10vw,66px)]">
        This page took<br /><GradientText>a detour.</GradientText>
      </h1>
      <NavLink className="inline-flex items-center gap-[11px] rounded-[9px] bg-[linear-gradient(110deg,#7350d8,#bd62b1_58%,#f08462)] px-[17px] py-[13px] text-xs font-semibold text-white shadow-[0_9px_26px_#805bd02e] transition hover:-translate-y-0.5 hover:brightness-95" to="/">
        Back home <ArrowUpRight aria-hidden="true" size={16} />
      </NavLink>
    </main>
  )
}
