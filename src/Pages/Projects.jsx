import { ArrowUpRight } from 'lucide-react'
import Eyebrow from '../components/Eyebrow.jsx'
import GradientText from '../components/GradientText.jsx'
import { useNavigate,Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';
const projects = [
  {
    number: '01',
    name: 'Shopping Website',
    type: 'React',
    date:2025,
    description: 'A modern, responsive e-commerce storefront built with React, Tailwind CSS, and React Router. Features seamless client-side navigation, user authentication (login/logout), and interactive shopping cart management for a curated lifestyle brand.',
    tags: ['React', 'JavaScript', 'Tailwind','React Router'],
    visual: 'bg-[linear-gradient(140deg,#ddd4f4,#bcb0dd)]',
    img:'ShoppingWebsite.PNG',
    codeUrl:'https://github.com/umairmairi891/Shoppping-Website',
    liveSite:'https://onlineshopping-website.netlify.app/'
  },
  {
    number: '02',
    name: 'Travel_Agency_Website',
    type: 'React',
    date:2026,
    description: 'A modern, responsive travel booking and destination discovery platform built with React, Tailwind CSS, and React Router DOM. Features multi-page navigation, an interactive adventure search bar, and curated travel packages wrapped in a clean, immersive UI.',
    tags: ['React','React Router', 'Responsive UI', 'Tailwind'],
    visual: 'bg-[linear-gradient(140deg,#f6d8ce,#e8a78f)]',
    img:'Travel_agency_website.PNG',
    codeUrl:'https://github.com/umairmairi891/Internship_React_TravelAgency',
    liveSite:'https://travelagencywebsitereact.netlify.app/'
  },
  {
    number: '03',
    name: 'Aura Digital Agency',
    type: 'React',
    date:2026,
    description: 'A sleek, responsive agency website built with React, React Router, and Tailwind CSS. Features multi-page navigation, bold typography, interactive status cards, and a conversion-focused layout designed for a modern digital studio.',
    tags: ['React', 'Design', 'Responsive UI','Tailwind','React Router'],
    visual: 'bg-[linear-gradient(140deg,#cce8d9,#83c7b6)]',
    img:'Aura_digital_agency.PNG',
    codeUrl:'https://github.com/umairmairi891/Aura_Digital_Website_Frontend_Project',
    liveSite:'https://aura-digital-agency-website.netlify.app/'
  },
  {
    number: '04',
    name: 'Resturant Website',
    type: 'React',
    date:2026,
    description: 'A rich, responsive restaurant web application built with React, React Router, and Tailwind CSS. Features global shopping cart state management via React Context API, table reservation calls to action, and seamless multi-page navigation wrapped in an atmospheric dining UI.',
    tags: ['React', 'Context API', 'Responsive UI','Tailwind','React Router'],
    visual: 'bg-[linear-gradient(140deg,#ddd4f4,#bcb0dd)]',
    img:'Resturant_Website.PNG',
    codeUrl:'https://github.com/umairmairi891/Resturant_Website_Frontend',
    liveSite:'https://resturant-website-fr.netlify.app/'
  },
  {
    number: '05',
    name: 'Food Delivery Website',
    type: 'React',
    date:2026,
    description: 'A vibrant, responsive food delivery and ordering platform built with React, React Router, and Tailwind CSS. Features global shopping cart state management via React Context API, interactive menu exploration, and seamless navigation wrapped in a clean, user-friendly UI.',
    tags: ['React', 'Context API', 'Responsive UI','Tailwind','React Router'],
    visual: 'bg-[linear-gradient(140deg,#f6d8ce,#e8a78f)]',
    img:'Food_delivery_website.PNG',
    codeUrl:'https://github.com/umairmairi891/FoodDeliveryWebsite',
    liveSite:'https://food-delivery-website-fr.netlify.app/'
  },
  {
    number: '06',
    name: 'Academic Learning Platform',
    type: 'Html, CSS , JavaScript',
    date:2026,
    description: 'An engaging educational web application built with HTML, CSS, and JavaScript. Features interactive MCQ quizzes, a dedicated IQ assessment tool, a structured course catalog, and gamified progress tracking (Day Streaks & Rank XP) wrapped in a clean academic UI.',
    tags: ['HTML', 'CSS', 'Responsive UI','JavaScript','Git'],
    visual: 'bg-[linear-gradient(140deg,#cce8d9,#83c7b6)]',
    img:'Academic_Learning_platform.PNG',
    codeUrl:'https://github.com/umairmairi891/Academic-AI-Website',
    liveSite:'https://academic-learning-website.netlify.app/'
  },
  {
    number: '07',
    name: 'E Commerce Website',
    type: 'Html, CSS ',
    date:2026,
    description: 'A clean, responsive e-commerce storefront UI built with HTML, CSS, and JavaScript. Focused on modern layout architecture using CSS Grid and Flexbox, featuring a multi-tier navigation bar, category sidebar, and a bento-style promotional product grid.',
    tags: ['HTML', 'CSS', 'Responsive UI','Git'],
    visual: 'bg-[linear-gradient(140deg,#ddd4f4,#bcb0dd)]',
    img:'E_Commerce_Website.PNG',
    codeUrl:'https://github.com/umairmairi891/E-Commerce-Website-',
    liveSite:'https://e-commerce-landingpage-design.netlify.app/'
  },
  {
    number: '08',
    name: 'Online Car Store',
    type: 'React',
    date:2026,
    description: 'A sleek, responsive automotive e-commerce application built with React, React Router, and Tailwind CSS. Features interactive add-to-cart functionality, dynamic inventory management to add new cars, and seamless multi-page navigation wrapped in a clean editorial UI.',
    tags: ['React', 'React Router', 'Responsie UI','Tailwind'],
    visual: 'bg-[linear-gradient(140deg,#f6d8ce,#e8a78f)]',
    img:'Online_Car+Store.PNG',
    codeUrl:'https://github.com/umairmairi891/Online-CarStore',
    liveSite:'https://onlinecarstore.netlify.app/'
  },
  {
    number: '09',
    name: 'Online Travel Booking',
    type: 'React',
    date:2026,
    description: 'A modern, responsive travel booking application built with React, React Router, Tailwind CSS, and a Node.js backend API. Features user authentication (Login/Signup), dynamic destination and package data fetching, and seamless multi-page navigation.',
    tags: ['React', 'React Router', 'Responsie UI','Tailwind','API'],
    visual: 'bg-[linear-gradient(140deg,#cce8d9,#83c7b6)]',
    img:'Travel_Booking_Website.PNG',
    codeUrl:'https://github.com/umairmairi891/Booking_Website',
    liveSite:'https://bookingwesite.netlify.app/'
  },
  {
    number: '10',
    name: 'Nike Website',
    type: 'HTML, CSS',
    date:2026,
    description:"Nike landing page is a smooth page for user's , this includes mant different smooth animations for users",
    tags: ["HTML", "CSS", "Tailwind", "JavaScript","React"],
    visual: 'bg-[linear-gradient(140deg,#ddd4f4,#bcb0dd)]',
    img:'NikeWebsite.PNG',
    codeUrl: "https://github.com/umairmairi891/Nike-LandinPage",
    liveUrl: "https://nikelandingpagewebsite.netlify.app/",
  },

]



export default function Projects() {
  AOS.init({
    duration:1000,
  });
  const navigate=useNavigate();
  return (
    <main  className="mx-auto min-h-[calc(100vh-150px)] w-full dark:text-gray-100  px-8 pb-[100px] pt-[100px] max-md:px-5 max-md:pb-[70px] max-md:pt-[67px]">
      <Eyebrow>A few things I&apos;ve made</Eyebrow>
      <h1 data-aos='fade-up' className="mb-0 mt-6 text-[clamp(48px,6vw,74px)] font-medium leading-[1.06] tracking-[-.075em] max-md:text-[clamp(44px,10vw,66px)]">
        Selected <GradientText>Projects.</GradientText>
      </h1>
      <p data-aos='fade-up' className="mt-5 max-w-[520px] dark:text-gray-300 text-[17px] leading-relaxed text-[#706d78]">
        A mix of experiments and real-world interfaces, made with care from first sketch to final interaction.
      </p>
      <div className="mt-[52px] border-t border-[#23222a18]">
        {projects.map((project) => (
          <article data-aos='fade-up' className="grid   grid-cols-1 gap-4 border-b border-[#23222a18] py-7 md:grid-cols-[1.05fr_.95fr] md:gap-10" key={project.number}>
            <div className={`relative grid h-[200px] md:h-[440px] place-items-center overflow-hidden rounded-xl ${project.visual}`}>
              <div className="w-[80%] my-5 overflow-hidden rounded-lg border border-white/75 bg-[#fffdf9ed] shadow-[0_18px_50px_#32234220]">
                <div aria-hidden="true" className="flex gap-1 border-b border-[#33263b12] p-[9px]">
                  <i className="size-[5px] rounded-full bg-[#d29bf5]" />
                  <i className="size-[5px] rounded-full bg-[#f3a49b]" />
                  <i className="size-[5px] rounded-full bg-[#89d7bd]" />
                </div>
                <div className="px-[10px] w-full h-full py-1">
                  <img className='w-full rounded-xl h-full object-cover' src={project.img} alt="" />
                </div>
              </div>
              <span className="absolute right-1 md:right-3.5 top-1 md:top-3.5 grid size-[25px] md:size-[34px] text-xs md:text-sm place-items-center rounded-full bg-white text-[#33283f]">
                <span>{project.number}</span>
              </span>
            </div>
            <div className="flex flex-col justify-between h-auto md:h-auto py-3 max-md:px-0.5">
              <div>
                <div className="flex  justify-between">
                <span className="text-[13px] dark:text-gray-100 text-[#74717b]">{project.type}</span>
                <span className="text-[13px] dark:text-gray-100 text-[#74717b]">{project.date}</span>
                </div>
                <h2 className="mb-0 mt-[13px] text-3xl font-semibold tracking-[-.05em]">{project.name}</h2>
                <p className="mb-0 dark:text-gray-100 mt-2 max-w-[430px] text-[15px] leading-relaxed text-[#706d78]">{project.description}</p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-5 p-0">
                {project.tags.map((tag) => (
                  <li className="list-none w-50  md:w-auto hover:text-white hover:font-semibold duration-200 rounded-full border dark:text-gray-200 dark:border-gray-100 border-[#30273a1c] px-5 hover:bg-[linear-gradient(110deg,#7650d8,#bd5fa8_72%,#ed856a)] cursor-pointer py-1.5 text-[15px] text-[#62596b]" key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="flex gap-10 mt-10 md:mt-0">      
                <button    className='px-10 py-2 bg-[linear-gradient(110deg,#7650d8,#bd5fa8_72%,#ed856a)] rounded-lg text-white font-semibold cursor-pointer'>
                  <a href={project.codeUrl} target='_blank'>Code</a></button>
                <button className='px-10 py-2  rounded-lg text-black dark:border-gray-300 dark:text-gray-100 hover:text-black    border border-gray-200 font-semibold hover:bg-gray-100 duration-100 cursor-pointer'><a target='_blank' href={project.liveSite}>Live Site</a></button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
