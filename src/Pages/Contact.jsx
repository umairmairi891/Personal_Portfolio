import { ArrowUpRight } from 'lucide-react'
import Eyebrow from '../components/Eyebrow.jsx'
import GradientText from '../components/GradientText.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';
const controlClasses = 'mt-2 w-full rounded-lg border border-[#25202c1c] bg-white/70 px-3.5 py-3 text-sm text-[#23222a] outline-none placeholder:text-[#a5a0ac] focus-visible:border-[#7958d8] focus-visible:ring-2 focus-visible:ring-[#7958d8]/20'
const labelClasses = 'flex flex-col text-xs font-medium text-[#514c5b]'

export default function Contact() {
  AOS.init({
    duration:1000,
    once:false
  });
  return (
    <main className="mx-auto min-h-[calc(100vh-175px)] w-full  px-8 pb-[100px] pt-[110px] max-md:px-5 max-md:pt-20">
      <Eyebrow>Have something in mind?</Eyebrow>
      <h1 data-aos='fade-up' className="mb-0 mt-6 text-[clamp(58px,8vw,96px)] font-medium leading-[1.06] tracking-[-.075em] max-md:text-[clamp(52px,12vw,76px)]">
        Let&apos;s make<br />it <GradientText>happen.</GradientText>
      </h1>
      <p  data-aos='fade-up' className="mt-[27px] max-w-[520px] text-[17px] leading-relaxed text-[#706d78]">
        Tell me a little about what you&apos;re working on. I&apos;ll get back to you within 1–2 days.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_.8fr] md:gap-20">
        <form data-aos='fade-up' action="mailto:hello@example.com" className="flex flex-col gap-5" encType="text/plain" method="post">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className={labelClasses}>
              Your name
              <input autoComplete="name" className={controlClasses} name="Name" placeholder="" required type="text" />
            </label>
            <label className={labelClasses}>
              Email address
              <input autoComplete="email" className={controlClasses} name="Email" placeholder="you@example.com" required type="email" />
            </label>
          </div>
          <label className={labelClasses}>
            What are you reaching out about?
            <select className={controlClasses} defaultValue="" name="Topic">
              <option disabled value="">Select a topic</option>
              <option>Project inquiry</option>
              <option>Work opportunity</option>
              <option>Something else</option>
            </select>
          </label>
          <label className={labelClasses}>
            Message
            <textarea className={`${controlClasses} resize-y`} name="Message" placeholder="A few details about your idea..." required rows={5} />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button className="inline-flex  cursor-pointer items-center gap-[11px] rounded-[9px] bg-[linear-gradient(110deg,#7350d8,#bd62b1_58%,#f08462)] px-[17px] py-[13px] text-sm font-semibold text-white shadow-[0_9px_26px_#805bd02e] transition hover:-translate-y-0.5 hover:brightness-95" type="submit">
              Send a message <ArrowUpRight aria-hidden="true" size={16} />
            </button>
            <span className="text-[14px]  text-[#77737d]">This opens your email app to send.</span>
          </div>
        </form>

        <aside data-aos='fade-up' className="pt-1 flex flex-col">
          <span className="text-sm text-[#4f4b55]">Prefer email?</span>
          <a className="mt-10 inline-flex items-center gap-3 border-b border-[#d5a4ff70] pb-2 text-[clamp(20px,3vw,29px)] tracking-[-.04em] text-[#7049cf]" href="mailto:umairmairi891@gmail.com">
            hello@gmail.com <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <div className="mt-[55px] flex max-w-[540px] flex-wrap items-center justify-between gap-4 text-[15px] text-[#77737d] max-md:flex-col max-md:items-start">
            <span>Usually replies within 1–2 days</span>
            <div className="flex gap-5 text-[#514c5b]">
              <a className="hover:text-[#7049cf]" href="https://github.com/umairmairi891" rel="noreferrer" target="_blank">GitHub ↗</a>
              <a className="hover:text-[#7049cf]" href="https://linkedin.com" rel="noreferrer" target="_blank">LinkedIn ↗</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
