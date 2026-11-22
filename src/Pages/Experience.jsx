import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import GradientText from '../components/GradientText.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';
const experience = [
  {
    period: 'August 2026 — November 2026',
    title: 'Frontend developer',
    institute: 'Eziline Software House Rawalpindi',
    duration: '4 Months',
    type: 'Frontend & web experiences',
    description: 'Built responsive interfaces, refined component systems, and worked closely with design and product teams.',
    highlights: ['Component architecture', 'Responsive UI', 'Context API'],
  },
  {
    period: '2026 — Now',
    title: 'Independent frontend developer',
    institute: "Self",
    duration: '6 Months',
    type: 'Self Learning',
    description: 'Translating design mockups into functional, visual, web pages, Ensuring websites look and work seamlessely across mobile devices, tablets  and desktop screens.',
    highlights: ['Interfaces', 'Designs', 'React applications'],
  },
]

export default function Experience() {
  AOS.init({
    duration:1000,
  });
  return (
    <main className="mx-auto min-h-[calc(100vh-150px)] w-[90%]  px-8 pb-[100px] pt-[100px] max-md:px-5 max-md:pb-[70px] max-md:pt-[67px]">
      <Eyebrow>Work &amp; growth</Eyebrow>
      <h1 data-aos='fade-up' className="mb-0 mt-6 text-[clamp(48px,6vw,74px)] font-medium leading-[1.06] tracking-[-.075em] max-md:text-[clamp(44px,10vw,66px)]">
        A path built<br />with <GradientText>Curiosity.</GradientText>
      </h1>
      <p data-aos='fade-up' className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-[#706d78]">
        A few chapters in my journey making thoughtful, useful things for the web.
      </p>
      <div className="mt-[52px]">
        {experience.map((item, index) => (
          <article data-aos='fade-up' className="grid grid-cols-1 gap-4 border-t border-[#23222a18] py-7 md:grid-cols-[190px_1fr] md:gap-10" key={item.title}>
            <div className="flex text-sm items-start flex-col justify-center    gap-2.5 font-mono font-semibold  text-[#332e3b]">
              <div className="flex items-start gap-1">
                <span>{item.period}</span>
              </div>
              <span>{item.duration}</span>
            </div>
            <div className="rounded-xl border border-[#25202c12] bg-white/65 p-6 shadow-[0_12px_35px_#34254708] max-md:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[15px] text-[#77737d]">{item.type}</span>
                  <h2 className="mb-0 mt-2 text-xl font-semibold tracking-[-.04em]">{item.title}</h2>
                </div>
                <span aria-hidden="true" className="font-mono text-sm text-gray-700 font-semibold">{item.institute}</span>
              </div>
              <p className="mb-4 mt-3 text-sm leading-relaxed text-[#706d78]">{item.description}</p>
              <ul className="flex flex-wrap gap-2 p-0 text-[13px] text-[#62596b]">
                {item.highlights.map((highlight) => (
                  <li className="list-none font-semibold rounded-full border hover:bg-cyan-900 cursor-pointer hover:text-white duration-150 border-[#30273a1c] bg-[#f7f5f0] px-3 py-1.5" key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <NavLink className="mt-5 inline-flex items-center gap-2 text-sm  text-[#7049cf] transition hover:text-[#5637b2]" to="/contact">
        Let&apos;s work together <ArrowUpRight aria-hidden="true" size={15} />
      </NavLink>
    </main>
  )
}
