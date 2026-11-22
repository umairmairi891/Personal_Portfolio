import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import GradientText from '../components/GradientText.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration:1000,
  });

const stats = [
  ['04', '+', 'Years building for the web'],
  ['20', '+', 'Projects brought to life'],
  ['100', '%', 'Curiosity, always'],
]

export default function About() {
  return (
    <main data-aos="fade-up" className="mx-auto min-h-[calc(100vh-150px)] w-full max-w-[1180px] px-8 pb-[100px] pt-[100px] max-md:px-5 max-md:pb-[70px] max-md:pt-[67px]">
      <Eyebrow>A bit about me</Eyebrow>
      <h1 className="mb-0 mt-6 text-[clamp(48px,6vw,74px)] font-medium leading-[1.06] tracking-[-.075em] max-md:text-[clamp(44px,10vw,66px)]">
        Curious by nature.<br /><GradientText>Developer by craft.</GradientText>
      </h1>
      <div className="mt-[58px] grid grid-cols-1 gap-7 md:grid-cols-[.9fr_1.1fr] md:gap-20 max-md:mt-[38px]">
        <p className="m-0 max-w-[400px] text-[22px] leading-[1.55] tracking-[-.035em] text-[#302d38] max-md:text-xl">
          I care about the details that make a digital experience feel effortless—from the first pixel to the last interaction.
        </p>
        <div className="max-w-[510px] text-lg leading-[1.9] text-[#706d78]">
          <p className="mb-[18px]">I&apos;m <span className='uppercase font-bold'>Umair Hassan</span>, a frontend developer who loves making the web more useful, human, and accessible. I work across the stack of a modern interface: shaping ideas, writing thoughtful code, and polishing the little things people notice.</p>
          <p className="mb-[18px]">When I&apos;m away from the browser, you&apos;ll find me out on a long walk, collecting records, or learning something new just because.</p>
          <NavLink className="mt-[11px] inline-flex items-center gap-[7px] text-sm text-[#7049cf] transition hover:text-[#5637b2]" to="/contact">
            Let&apos;s make something good <ArrowUpRight aria-hidden="true" size={15} />
          </NavLink>
        </div>
      </div>
      <div data-aos="fade-up" className="mt-[75px] flex flex-wrap gap-x-[clamp(35px,10vw,130px)] gap-y-7 border-t border-[#23222a18] pt-[38px] max-md:mt-12 max-md:justify-between max-md:gap-x-6">
        {stats.map(([value, suffix, label]) => (
          <div className="flex flex-col gap-1.5" key={label}>
            <strong className="text-[34px] tracking-[-.06em] max-md:text-[29px]">{value}<span className="text-[#7958d8]">{suffix}</span></strong>
            <small className="text-[13px] text-[#74717b] max-md:max-w-[95px]">{label}</small>
          </div>
        ))}
      </div>
    </main>
  )
}
