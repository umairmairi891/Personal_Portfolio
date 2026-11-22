import { ArrowDownRight, ArrowUpRight, Code2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import GradientText from '../components/GradientText.jsx'
import '../index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'

export default function Home() {
  AOS.init({
    duration: 1000,
  });


  const stats = [
    ['04', '+', 'Years building for the web'],
    ['20', '+', 'Projects brought to life'],
    ['100', '%', 'Curiosity, always'],
  ]

  const skillGroups = [
    {
      title: 'Frontend',
      skills: [
        {
          name: 'React',
          level: 60,
        },
        {
          name: 'JavaScript',
          level: 70,
        },
        {
          name: 'HTML & CSS',
          level: 80,
        },
        {
          name: 'Tailwind CSS',
          level: 80,
        },
        {
          name: 'React Router',
          level: 80,
        },
      ]

    },
    {
      title: 'Tools & workflow',
      skills: [
        {
          name: 'Git',
          level: 70,
        },
        {
          name: 'Github',
          level: 70,
        },
        {
          name: 'Vite',
          level: 80,
        },
        {
          name: 'Responsive Design',
          level: 80,
        },
        {
          name: 'Accessibility',
          level: 75,
        },
      ]
    },
    {
      title: 'What I bring',
      skills: [
        {
          name: 'Component architecture',
          level: 80,
        },
        {
          name: 'Design systems',
          level: 50,
        },
        {
          name: 'Performance',
          level: 60,
        },
        {
          name: 'Attention to detail',
          level: 80,
        },
        {
          name: 'Team collaboration',
          level: 80,
        },
      ]
    },

  ]

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
  const projects = [
    {
      number: '01',
      name: 'Shopping Website',
      type: 'React',
      date: 2025,
      description: 'Shopping Website includes Shop feature, Login/signup feature, and many other smooth features to enhance the user Experience ',
      tags: ['React', 'JavaScript', 'Tailwind', 'React Router'],
      visual: 'bg-[linear-gradient(140deg,#ddd4f4,#bcb0dd)]',
      img: 'ShoppingWebsite.PNG',
      codeUrl: 'https://github.com/umairmairi891/Shoppping-Website',
      liveSite: 'https://onlineshopping-website.netlify.app/'
    },
    {
      number: '02',
      name: 'Travel_Agency_Website',
      type: 'React',
      date: 2026,
      description: 'A lightweight publishing experience for people who think better on the page.',
      tags: ['React', 'React Router', 'Responsive UI', 'Tailwind'],
      visual: 'bg-[linear-gradient(140deg,#f6d8ce,#e8a78f)]',
      img: 'Travel_agency_website.PNG',
      codeUrl: 'https://github.com/umairmairi891/Internship_React_TravelAgency',
      liveSite: 'https://travelagencywebsitereact.netlify.app/'
    },
    {
      number: '03',
      name: 'Aura Digital Agency',
      type: 'React',
      date: 2026,
      description: '',
      tags: ['React', 'Design', 'Responsive UI', 'Tailwind', 'React Router'],
      visual: 'bg-[linear-gradient(140deg,#cce8d9,#83c7b6)]',
      img: 'Aura_digital_agency.PNG',
      codeUrl: 'https://github.com/umairmairi891/Aura_Digital_Website_Frontend_Project',
      liveSite: 'https://aura-digital-agency-website.netlify.app/'
    },
    {
      number: '04',
      name: 'Resturant Website',
      type: 'React',
      date: 2026,
      description: '',
      tags: ['React', 'Context API', 'Responsive UI', 'Tailwind', 'React Router'],
      visual: 'bg-[linear-gradient(140deg,#ddd4f4,#bcb0dd)]',
      img: 'Resturant_Website.PNG',
      codeUrl: 'https://github.com/umairmairi891/Resturant_Website_Frontend',
      liveSite: 'https://resturant-website-fr.netlify.app/'
    },
    {
      number: '05',
      name: 'Food Delivery Website',
      type: 'React',
      date: 2026,
      description: '',
      tags: ['React', 'Context API', 'Responsive UI', 'Tailwind', 'React Router'],
      visual: 'bg-[linear-gradient(140deg,#f6d8ce,#e8a78f)]',
      img: 'Food_delivery_website.PNG',
      codeUrl: 'https://github.com/umairmairi891/FoodDeliveryWebsite',
      liveSite: 'https://food-delivery-website-fr.netlify.app/'
    },
    {
      number: '06',
      name: 'Academic Learning Platform',
      type: 'Html, CSS , JavaScript',
      date: 2026,
      description: '',
      tags: ['HTML', 'CSS', 'Responsive UI', 'JavaScript', 'Git'],
      visual: 'bg-[linear-gradient(140deg,#cce8d9,#83c7b6)]',
      img: 'Academic_Learning_platform.PNG',
      codeUrl: 'https://github.com/umairmairi891/Academic-AI-Website',
      liveSite: 'https://academic-learning-website.netlify.app/'
    },
    {
      number: '07',
      name: 'E Commerce Website',
      type: 'Html, CSS ',
      date: 2026,
      description: '',
      tags: ['HTML', 'CSS', 'Responsive UI', 'Git'],
      visual: 'bg-[linear-gradient(140deg,#ddd4f4,#bcb0dd)]',
      img: 'E_Commerce_Website.PNG',
      codeUrl: 'https://github.com/umairmairi891/E-Commerce-Website-',
      liveSite: 'https://e-commerce-landingpage-design.netlify.app/'
    },
    {
      number: '08',
      name: 'Online Car Store',
      type: 'React',
      date: 2026,
      description: '',
      tags: ['React', 'React Router', 'Responsie UI', 'Tailwind'],
      visual: 'bg-[linear-gradient(140deg,#f6d8ce,#e8a78f)]',
      img: 'Online_Car+Store.PNG',
      codeUrl: 'https://github.com/umairmairi891/Online-CarStore',
      liveSite: 'https://onlinecarstore.netlify.app/'
    },
    {
      number: '09',
      name: 'Online Travel Booking',
      type: 'React',
      date: 2026,
      description: '',
      tags: ['React', 'React Router', 'Responsie UI', 'Tailwind', 'API'],
      visual: 'bg-[linear-gradient(140deg,#cce8d9,#83c7b6)]',
      img: 'Travel_Booking_Website.PNG',
      codeUrl: 'https://github.com/umairmairi891/Booking_Website',
      liveSite: 'https://bookingwesite.netlify.app/'
    },
    {
      number: '10',
      name: 'Nike Website',
      type: 'HTML, CSS',
      date: 2026,
      description: "Nike landing page is a smooth page for user's , this includes mant different smooth animations for users",
      tags: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
      visual: 'bg-[linear-gradient(140deg,#ddd4f4,#bcb0dd)]',
      img: 'NikeWebsite.PNG',
      codeUrl: "https://github.com/umairmairi891/Nike-LandinPage",
      liveUrl: "https://nikelandingpagewebsite.netlify.app/",
    },

  ]
  const controlClasses = 'mt-2 w-full rounded-lg border border-[#25202c1c] bg-white/70 px-3.5 py-3 text-sm text-[#23222a] outline-none placeholder:text-[#a5a0ac] focus-visible:border-[#7958d8] focus-visible:ring-2 focus-visible:ring-[#7958d8]/20'
  const labelClasses = 'flex flex-col text-xs font-medium text-[#514c5b]'


    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const currentProject = projects[currentIndex];




  return (
    <>
      <main className="relative  z-10 mx-auto flex min-h-[calc(100vh-160px)] w-full  flex-col px-8 py-[65px] pb-7 max-md:min-h-0 max-md:px-5 max-md:py-[66px]">
        <div className="grid flex-1 grid-cols-1 items-center md:grid-cols-[1.05fr_.95fr]">
          <div data-aos="fade-up" className="relative z-10 pb-[46px] max-md:pb-0 ">
            <h1 className="my-[27px] text-[clamp(52px,7.1vw,88px)] font-medium leading-[1.06] tracking-[-.075em] max-md:text-[clamp(52px,12vw,76px)]">
              Building digital<br />things with <GradientText>purpose.</GradientText>
            </h1>
            <p className="max-w-[500px] text-[18px] leading-[1.85] text-[#232326]">
              I&apos;m <span className='uppercase font-bold'>Umair Hassan</span>, a frontend developer turning thoughtful ideas into fast, accessible, and delightful web experiences.
            </p>
            <div className="mt-[30px] flex flex-wrap items-center gap-3">
              <NavLink className="inline-flex items-center gap-[11px] rounded-[9px] bg-[linear-gradient(110deg,#7350d8,#bd62b1_58%,#f08462)] px-[17px] py-[13px] text-sm font-semibold text-white shadow-[0_9px_26px_#805bd02e] transition hover:-translate-y-0.5 hover:brightness-95" to="/projects">
                Explore my work <ArrowUpRight aria-hidden="true" size={16} />
              </NavLink>
              <NavLink className="inline-flex items-center gap-[11px] rounded-[9px] px-[17px] py-[13px] text-sm font-semibold border border-gray-200 text-[#514c5b] transition hover:bg-[#eae6ef]" to="/about">
                A little about me <ArrowDownRight aria-hidden="true" size={16} />
              </NavLink>
            </div>
            <div className="mt-[52px] flex flex-wrap gap-x-[23px] gap-y-2 text-[13px] text-[#313034] max-md:mt-[34px] max-md:flex-col">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-[#52aa78] shadow-[0_0_10px_#52aa7866]" />
                Currently open to opportunities</span>
              <span>React · JavaScript · UI engineering</span>
            </div>
          </div>

          <div data-aos="fade-up" aria-label="Abstract artwork with a code card" className="relative grid h-118.75 place-items-center max-md:mt-2 max-md:h-85" role="img">
            <div aria-hidden="true" className="absolute size-67.5 rounded-full bg-[conic-gradient(from_35deg,#ff9d83,#7959e2,#63cbb4,#d87ec0,#ff9d83)] opacity-40 blur-[48px] max-md:size-50" />
            <div aria-hidden="true" className="absolute flex  size-[410px] rotate-[-30deg] scale-y-[.58] rounded-full border border-[#4d3d6120] max-md:size-[320px] " >

            </div>
            <div aria-hidden="true" className="absolute size-[350px] rotate-[45deg] scale-y-[.73] rounded-full border border-[#1807271f] max-md:size-[270px]" />


            <div data-aos="fade-up" className="relative card_animation  flex p-5 h-[200px] md:h-[265px] w-[290px] md:w-[390px] rotate-[-7deg] flex-col  rounded-2xl border border-gray-600 bg-[linear-gradient(140deg,#fffefaed,#f1edf5ef)]  text-[#7049c7] shadow-[0_30px_90px_#39275020,inset_0_1px_#ffffff] backdrop-blur-2xl">
              <img src={currentProject.img} className='w-full h-full object-cover  rounded img_animation' alt="" />
            </div>
            <span className="absolute bottom-9 right-1 font-mono text-[13px] font-semibold text-[#28252c] max-md:bottom-2 max-md:right-2">{currentIndex+1} / {projects.length}</span>
          </div>
        </div>
      </main>
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
      <main className="mx-auto min-h-[calc(100vh-150px)] w-full  px-8 pb-[100px] pt-[100px] max-md:px-5 max-md:pb-[70px] max-md:pt-[67px]">
        <Eyebrow data-aos='fade-up'>Tools of the trade</Eyebrow>
        <h1 data-aos='fade-up' className="mb-0 mt-6 text-[clamp(48px,6vw,74px)] font-medium leading-[1.06] tracking-[-.075em] max-md:text-[clamp(44px,10vw,66px)]">
          Good tools.<br /><GradientText>Better Experiences.</GradientText>
        </h1>
        <p data-aos='fade-up' className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-[#706d78]">
          A practical toolkit for turning ambitious ideas into polished, dependable products.
        </p>
        <div className="mt-[60px] w-[98%] md:w-[90%] mx-auto grid grid-cols-1 gap-[15px] md:grid-cols-3 max-md:mt-9">
          {skillGroups.map((item, index) => (
            <section data-aos='fade-up' className="rounded-[13px] border cursor-pointer hover:-translate-y-2 duration-150 border-[#25202c18] bg-[linear-gradient(145deg,#ffffffd9,#f2eff5b3)] p-[25px] pb-[18px] hover:shadow-2xl shadow-[0_12px_35px_#34254708] max-md:p-5" key={item.title}>
              <span className="font-mono font-semibold text-[15px] text-[#7958d8]">0{index + 1}</span>
              <h2 className="mb-[18px] mt-[26px] text-[17px] font-semibold tracking-[-.03em] max-md:mt-[17px]">{item.title}</h2>
              <ul className="m-0 list-none p-0">
                {item.skills.map((i) => (
                  <li className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 h-20 border-t border-[#352c3b12] py-[13px] text-sm text-[#3a383f]" key={i.name}>
                    <span className='w-30'>
                      {i.name}
                    </span>
                    <span className="w-[100%]  h-4 rounded-2xl bg-gray-200">
                      <div data-aos='fade-right' style={{ width: `${i.level}%` }} className={`bg-[linear-gradient(110deg,#7650d8,#bd5fa8_72%,#ed856a)] h-4 flex justify-center transition-all  items-center text-white font-bold  rounded-2xl `}>{i.level}%</div>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
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
      <main className="mx-auto min-h-[calc(100vh-150px)] w-full  px-8 pb-[100px] pt-[100px] max-md:px-5 max-md:pb-[70px] max-md:pt-[67px]">
        <Eyebrow>A few things I&apos;ve made</Eyebrow>
        <h1 data-aos='fade-up' className="mb-0 mt-6 text-[clamp(48px,6vw,74px)] font-medium leading-[1.06] tracking-[-.075em] max-md:text-[clamp(44px,10vw,66px)]">
          Selected <GradientText>Projects.</GradientText>
        </h1>
        <p data-aos='fade-up' className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-[#706d78]">
          A mix of experiments and real-world interfaces, made with care from first sketch to final interaction.
        </p>
        <div className="mt-[52px] border-t border-[#23222a18]">
          {projects.map((project) => (
            <article data-aos='fade-up' className="grid  grid-cols-1 gap-4 border-b border-[#23222a18] py-7 md:grid-cols-[1.05fr_.95fr] md:gap-10" key={project.number}>
              <div className={`relative grid h-[200px] md:h-[440px] place-items-center overflow-hidden rounded-xl ${project.visual}`}>
                <div className="w-[80%] my-5 overflow-hidden rounded-lg border border-white/75 bg-[#fffdf9ed] shadow-[0_18px_50px_#32234220]">
                  <div aria-hidden="true" className="flex gap-1 border-b border-[#33263b12] p-[9px]">
                    <i className="size-[5px] rounded-full bg-[#d29bf5]" />
                    <i className="size-[5px] rounded-full bg-[#f3a49b]" />
                    <i className="size-[5px] rounded-full bg-[#89d7bd]" />
                  </div>
                  <div className="px-[10px] w-full h-full py-1">
                    <img className='w-full cursor-pointer hover:scale-105 duration-200 rounded-xl h-full object-cover' src={project.img} alt="" />
                  </div>
                </div>
                <span className="absolute right-1 md:right-3.5 top-1 md:top-3.5 grid size-[25px] md:size-[34px] text-xs md:text-sm place-items-center rounded-full bg-white text-[#33283f]">
                  <span>{project.number}</span>
                </span>
              </div>
              <div className="flex flex-col justify-between h-auto md:h-auto py-3 max-md:px-0.5">
                <div>
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#74717b]">{project.type}</span>
                    <span className="text-[13px] text-[#74717b]">{project.date}</span>
                  </div>
                  <h2 className="mb-0 mt-[13px] text-3xl font-semibold tracking-[-.05em]">{project.name}</h2>
                  <p className="mb-0 mt-2 max-w-[430px] text-[15px] leading-relaxed text-[#706d78]">{project.description}</p>
                </div>
                <ul className="mt-5 flex flex-wrap gap-5 p-0">
                  {project.tags.map((tag) => (
                    <li className="list-none  w-50 md:w-auto hover:text-white hover:font-semibold duration-200 rounded-full border border-[#30273a1c] px-5 hover:bg-[linear-gradient(110deg,#7650d8,#bd5fa8_72%,#ed856a)] cursor-pointer py-1.5 text-[15px] text-[#62596b]" key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="flex gap-10 mt-10 md:mt-0">
                  <button className='px-10 py-2 bg-[linear-gradient(110deg,#7650d8,#bd5fa8_72%,#ed856a)] rounded-lg text-white font-semibold cursor-pointer'>
                    <a href={project.codeUrl} target='_blank'>Code</a></button>
                  <button className='px-10 py-2  rounded-lg text-black  border border-gray-200 font-semibold hover:bg-gray-100 duration-100 cursor-pointer'><a target='_blank' href={project.liveSite}>Live Site</a></button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <main className="mx-auto min-h-[calc(100vh-175px)] w-full  px-8 pb-[100px] pt-[110px] max-md:px-5 max-md:pt-20">
        <Eyebrow>Have something in mind?</Eyebrow>
        <h1 data-aos='fade-up' className="mb-0 mt-6 text-[clamp(58px,8vw,96px)] font-medium leading-[1.06] tracking-[-.075em] max-md:text-[clamp(52px,12vw,76px)]">
          Let&apos;s make<br />it <GradientText>happen.</GradientText>
        </h1>
        <p data-aos='fade-up' className="mt-[27px] max-w-[520px] text-[17px] leading-relaxed text-[#706d78]">
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
    </>
  )
}
