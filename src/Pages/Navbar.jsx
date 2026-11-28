import { Menu, Moon, NotebookTextIcon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ darkTheme, theme, lightTheme }) {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]
  return (
    <header className="sticky  z-20 mx-auto dark:bg-black bg-white flex border-b border-gray-200  h-[88px] w-full  items-center justify-between px-3 md:px-8 max-md:h-[73px] ">

      <NavLink className="flex bg-white  dark:bg-black items-center gap-[11px] text-[13px] font-semibold tracking-[-.02em]" to="/" onClick={() => setOpen(false)}>
        <span className="grid overflow-hidden size-[58px] dark:border-2 dark:border-gray-100 place-items-center rounded-[14px]  text-base font-extrabold text-white shadow-[0_6px_17px_#8856c72b]">
          <img className='w-full h-full object-cover' src="inbound456421611364386567_1.jpeg" alt="" />
        </span>
        <span className='text-lg dark:text-white font-semibold'>
          Umair Hassan
          <small className="mt-[3px] block dark:text-white text-sm font-normal tracking-normal text-[#77747f]">Frontend developer</small>
        </span>
      </NavLink>


      <div className="flex md:hidden">
        {theme === 'light' ? <Moon onClick={darkTheme} className='cursor-pointer dark:text-white' /> : <Sun onClick={lightTheme} className='cursor-pointer dark:text-white' />}
      </div>
      <button
        aria-controls="main-navigation"
        aria-expanded={open}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        className="hidden rounded-lg p-1  dark:text-white text-[#23222a] max-md:block"
        onClick={() => setOpen((isOpen) => !isOpen)}
        type="button"
      >
        {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}

      </button>


      <nav
        aria-label="Main navigation"
        className={`absolute left-0 dark:bg-slate-800  right-0 top-[74px] flex-col gap-1 rounded-xl border border-[#25202c20] bg-white p-2 shadow-[0_14px_35px_#30234015] backdrop-blur-xl md:static md:flex md:w-auto md:flex-row md:items-center md:gap-[3px] md:rounded-full md:border-[#2b24350f] md:bg-white/70 md:p-[5px] md:shadow-[0_5px_20px_#3123430a] ${open ? 'flex' : 'hidden md:flex'}`}
        id="main_navigation"
      >
        {links.map((link) => (
          <NavLink
            className={({ isActive }) => `rounded-full px-[15px] py-[9px] dark:text-white text-sm transition-colors ${isActive ? 'bg-[linear-gradient(110deg,#7650d8,#bd5fa8_72%,#ed856a)] text-white font-semibold shadow-[0_4px_12px_#8755c72b]' : 'text-[#3e3c3f] dark:text-black dark:hover:bg-slate-500 hover:bg-[#f0ebfa] dark:hover:text-white hover:text-[#5637b2]'}`}
            end={link.path === '/'}
            key={link.path}
            onClick={() => setOpen(false)}
            to={link.path}
          >
            {link.label}
          </NavLink>
        ))}

        <a
          href='./assets/Umair_Hassan_Resume.pdf'
          download="Umair_Hassan_Resume.pdf"
          className={` items-center gap-3 dark:bg-slate-800 dark:text-white  rounded-full border border-[#2b243512] bg-white/65 px-[13px] py-[9px] text-sm uppercase dark:border-blue-600  text-gray-700 shadow-[0_4px_15px_#31234308] duration-200 hover:bg-gray-100  ${open ? 'flex justify-center gap-5' : 'hidden '}`}
        >
          <span
            aria-hidden="true"
            className="size-[7px] rounded-full bg-[#52aa78] shadow-[0_0_10px_#52aa7866]"
          />
          <span>Download CV</span>
          <NotebookTextIcon className="h-4 w-4" />
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <a
          href='./assets/Umair_Hassan_Resume.pdf'
          download="Umair_Hassan_Resume.pdf"
          className="flex items-center gap-3 dark:bg-slate-800 dark:border-blue-600 hover:text-black dark:text-white rounded-full border border-[#2b243512] bg-white/65 px-[13px] py-[9px] text-sm uppercase  text-gray-700 shadow-[0_4px_15px_#31234308] duration-200 hover:bg-gray-100 max-md:hidden"
        >
          <span
            aria-hidden="true"
            className="size-[7px] rounded-full bg-[#52aa78] shadow-[0_0_10px_#52aa7866]"
          />
          <span>Download CV</span>
          <NotebookTextIcon className="h-4 w-4" />
        </a>
        <div className="hidden md:flex transition-all">
          {theme === 'light' ? <Moon onClick={darkTheme} className='cursor-pointer dark:text-white' /> : <Sun onClick={lightTheme} className='cursor-pointer dark:text-white' />}
        </div>
      </div>



    </header>
  )
}
