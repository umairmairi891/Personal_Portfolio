import Eyebrow from '../components/Eyebrow.jsx'
import GradientText from '../components/GradientText.jsx'
import '../index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      {
        name:'React',
        level:60,
      },
      {
        name:'JavaScript',
        level:70,
      },
      {
        name:'HTML & CSS',
        level:80,
      },
      {
        name:'Tailwind CSS',
        level:80,
      },
      {
        name:'React Router',
        level:80,
      },
    ]
    
  },
  {
    title: 'Tools & workflow',
    skills: [
      {
        name:'Git',
        level:70,
      },
      {
        name:'Github',
        level:70,
      },
      {
        name:'Vite',
        level:80,
      },
      {
        name:'Responsive Design',
        level:80,
      },
      {
        name:'Accessibility',
        level:75,
      },
    ]
  },
  {
    title: 'What I bring',
    skills: [
      {
        name:'Component architecture',
        level:80,
      },
      {
        name:'Design systems',
        level:50,
      },
      {
        name:'Performance',
        level:60,
      },
      {
        name:'Attention to detail',
        level:80,
      },
      {
        name:'Team collaboration',
        level:80,
      },
    ]
  },

]


export default function Skills() {
   AOS.init({
    duration:1000,
  });
  return (
    <main  className="mx-auto min-h-[calc(100vh-150px)] w-full  px-8 pb-[100px] pt-[100px] max-md:px-5 max-md:pb-[70px] max-md:pt-[67px]">
      <h1 data-aos='fade-up' className="mb-0 mt-6 text-[clamp(48px,6vw,74px)] font-medium leading-[1.06] tracking-[-.075em] max-md:text-[clamp(44px,10vw,66px)]">
        Good tools.<br /><GradientText>Better Experiences.</GradientText>
      </h1>
      <p  data-aos='fade-up' className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-[#706d78]">
        A practical toolkit for turning ambitious ideas into polished, dependable products.
      </p>
      <div className="mt-[140px] w-[98%] md:w-[90%] mx-auto grid grid-cols-1 gap-[15px] md:grid-cols-3 max-md:mt-9">
        {skillGroups.map((item, index) => (
          <section data-aos='fade-up' className="rounded-[13px] border cursor-pointer hover:-translate-y-2 duration-200 border-[#25202c18] bg-[linear-gradient(145deg,#ffffffd9,#f2eff5b3)] p-[25px] pb-[18px] hover:shadow-2xl shadow-[0_12px_35px_#34254708] max-md:p-5" key={item.title}>
            <span className="font-mono font-semibold text-[15px] text-[#7958d8]">0{index + 1}</span>
            <h2 className="mb-[18px] mt-[26px] text-[17px] font-semibold tracking-[-.03em] max-md:mt-[17px]">{item.title}</h2>
            <ul className="m-0 list-none p-0">
              {item.skills.map((i) => (
                <li className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 h-20 border-t border-[#352c3b12] py-[13px] text-sm text-[#3a383f]" key={i.name}>
                  <span className='w-30'>
                    {i.name}
                  </span>
                      <span  className="w-[100%]  h-4 rounded-2xl bg-gray-200">
                          <div data-aos='fade-right'   style={{width:`${i.level}%`}} className={`bg-[linear-gradient(110deg,#7650d8,#bd5fa8_72%,#ed856a)] h-4 flex justify-center transition-all  items-center text-white font-bold  rounded-2xl `}>{i.level}%</div>
                      </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
