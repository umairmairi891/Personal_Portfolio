import { ArrowUpRight } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'

export default function Footer() {
    const links = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Skills', path: '/skills' },
        { label: 'Experience', path: '/experience' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' },
    ]
  return (
    <footer className="relative z-10 mx-auto w-full  px-8 pb-2 text-[#77737d] max-md:px-5">
      <div className="flex items-center justify-between gap-6 overflow-hidden dark:bg-slate-800 rounded-[17px] border border-[#8d6cc01e] bg-gray-200 px-[30px] py-[27px] max-md:flex-col max-md:items-start">
        <div className="flex items-center gap-[15px]">
          <div>
            <strong className="block text-[17px] tracking-[-.02em] dark:text-gray-100 text-[#292633]">Let&apos;s build something meaningful.</strong>
            <span className="mt-1 block text-gray-600 dark:text-gray-100 text-[13px]">Have an idea? I&apos;d love to hear about it.</span>
          </div>
        </div>
        <Link to='/contact' className="inline-flex items-center gap-2 rounded-[9px] bg-[linear-gradient(110deg,#7650d8,#bd5fa8_72%,#ed856a)] px-[17px] py-3 text-[13px] font-medium text-white shadow-[0_7px_18px_#8755c72b] transition hover:-translate-y-0.5 hover:brightness-95" href="mailto:hello@example.com">
          Start a conversation <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>

      <div className="flex min-h-[68px] dark:text-gray-100 items-center justify-between gap-5 max-md:flex-col max-md:items-start max-md:justify-center text-gray-600 text-sm max-md:gap-3.5 max-md:py-4">
        <span>© 2025 Umair Hassan </span>
        
        <div className="flex gap-[17px] dark:text-gray-100">
          <a className="transition-colors text-sm  hover:text-[#7049cf]" href="https://github.com/umairmairi891" rel="noreferrer" target="_blank">GitHub ↗</a>
          <a className="transition-colors text-sm hover:text-[#7049cf]" href="https://linkedin.com" rel="noreferrer" target="_blank">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  )
}
