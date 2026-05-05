import React from 'react'
import NavBar from '../../components/navBar/navBar'
import { Link } from 'react-router-dom';
import  portfolioProject from '../../assets/Projects/Porfolioproject.png'
import avalonMapper from '../../assets/Projects/Avalonmapper.png'
import uiux1 from '../../assets/Projects/uiux1.png'
import uiux2 from '../../assets/Projects/uiux2.png'
import uiux3 from '../../assets/Projects/uiux3.png'
import uiux4 from '../../assets/Projects/uiux4.png'
import weatherapp from '../../assets/Projects/weatherapp.png'
import todolist from '../../assets/Projects/todolist.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'  
import { faUser } from '@fortawesome/free-solid-svg-icons' 
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


import Robot from "../../components/robot/robot"
import projects from '../projects/projects';

const MainPage = () => {

  const cards = [
    {
      label: "Education",
      Value: "B-Tech",
      icon: <i className="fa-solid fa-graduation-cap" style={{ color: "rgb(116, 192, 252)" }}></i>
    },
    {
      label: "Experience",
      Value: "Fresher",
      icon: <i className="fa-solid fa-user" style={{ color: "rgb(116, 192, 252)" }}></i>
    },
    {
      label: "Location",
      Value: "India",
      icon: <i className="fa-solid fa-location-dot" style={{ color: "rgb(116, 192, 252)" }}></i>
    },
    {
      label: "FreeLance",
      Value: "Available",
      icon: <i className="fa-solid fa-briefcase" style={{ color: "rgb(116, 192, 252)" }}></i>
    }
  ];

  const Projects = [
      {
          image:weatherapp,
          title:"Mini Weather App",
          desc :"A mini weatherapp made to obtain quick weather data",
          tags :["React","TailWindcss","API"],
          github:"https://github.com/AgileRampler/react-weather",
          link:"https://agile-weather.netlify.app"
      },
       {
          image:avalonMapper,
          title:"Avalon Mapper",
          desc :"A tool used to find the avalon maps in albion online",
          tags :["React","TailWindcss"],
          github:"https://github.com/AgileRampler/AlbionIntel",
          link:"https://albionintel.netlify.app"
      },
       {
          image:todolist,
          title:"Responsove To-Do-List",
          desc :"Mobile Freindly To-do list app to learn CRUD opeartion ",
          tags :["React","TailWind"],
          github:"https://github.com/AgileRampler/React-To-Do-List",
          link:"https://checklistv1.netlify.app/"
      },
        {
            image:uiux3,
          title:"Rolex Website",
          desc :"An Ecommerce responsive website overview of rolex watch collection ",
          tags :["HTML","CSS","ui/ux"],
          github:"https://github.com/AgileRampler/Responsive",
          link:"https://rolex-agile.netlify.app/"
      },

      
   ]

  const timeline = [
    {
      year: "2020 - 2024",
      title: "B.Tech in Computer Science",
      sub: "University",
      icon: <i className="fa-solid fa-graduation-cap" style={{ color: "rgb(116, 192, 252)" }}></i>
    },
    {
      year: "2025",
      title: "MERN Stack Developer Intern",
      sub: "Luminar Technolab",
      icon: <i className="fa-solid fa-briefcase" style={{ color: "rgb(116, 192, 252)" }}></i>
    },
    {
      year: "2025-current",
      title: "FreeLance Dev",
      sub: "",
      icon: <i className="fa-solid fa-briefcase" style={{ color: "rgb(116, 192, 252)" }}></i>
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Govind_Resume.pdf";
    link.download = "Govind_Resume.pdf";
    link.click();
  };

  const card1 = [
    {
      icon: <i className="fa-solid fa-desktop" style={{ color: "rgb(177, 151, 252)" }}></i>,
      value: "FrontEnd",
      skills: ["HTML", "CSS", "Bootstrap", "Tailwind", "React", "Angular", "Figma"]
    },
    {
      icon: <i className="fa-solid fa-server" style={{ color: "rgb(177, 151, 252)" }}></i>,
      value: "Backend",
      skills: ["Express.js", "Node.js", "mySQL","MongoDB"]
    },
    {
      icon: <i className="fa-solid fa-tools" style={{ color: "rgb(177, 151, 252)" }}></i>,
      value: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Material UI", "Flowbite"]
    }
  ];

  const chartData = {
    labels: ['HTML/CSS', "Bootstrap&TailwindCss", 'JavaScript', 'React', 'Angular', 'Node&Express', 'Design/Figma'],
    datasets: [
      {
        label: 'Skill Proficiency',
        data: [9, 10, 6, 7, 4, 6, 7],
        backgroundColor: 'rgba(147, 51, 234, 0.4)',
        borderColor: 'rgba(147, 51, 234, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(147, 51, 234, 1)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: { display: false }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };



  const MockUI = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-4/5 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)" }}>
        {["w-full", "w-3/4", "w-1/2", "w-full", "w-3/4"].map((w, i) => (
          <div key={i} className={`h-1.5 rounded-full mb-1.5 ${w}`}
            style={{ background: "rgba(255,255,255,0.35)" }} />
        ))}
      </div>
    </div>
  );

  return (
    <>
   
   

      <div className='bg-[#F5F5FA]'>
 
      <NavBar />
        {/* Hero Section */}
        <div id="home" className='h-[30%] bg-white mx-14 mt rounded-lg shadow-xl relative overflow-hidden flex items-center'>

          {/* Left — Text */}
          <div className="flex flex-col gap-4  p-40 w-[55%] z-10 relative">
            <p className="text-gray-500 text-lg">Hi, I'm</p>
            <h1 className="text-6xl font-bold text-violet-600">
              Govind <span>👋</span>
            </h1>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              MERN Stack Developer <br /> & Aspiring Ui/Ux Desinger
            </h2>
            <p className="text-gray-400 text-base">
              Modern web apps • clean and smooth apps • scalable products
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#projects">
                <button className="bg-violet-600 text-white px-6 py-3 cursor-pointer rounded-xl font-medium hover:bg-violet-700 transition-colors duration-300">
                  View My Work
                </button>
              </a>
              <a href="#contact">
                <button className="border border-gray-300 text-gray-800 px-6 py-3 rounded-xl cursor-pointer font-medium hover:bg-gray-100 transition-colors duration-300">
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Right — Robot + Shapes */}
          <div className="w-[45%] h-full relative flex items-center justify-center">
            <div className='h-90 w-90 bg-[#DDD6FE] absolute rounded-full z-0' />
            <div className='h-100 w-80 bg-[#C4B5FD] absolute z-0 rounded-2xl' />
            <div className='relative z-10'>
              <Robot />
            </div>
          </div>
        </div>

        {/* About Section — ✅ id only on outer div, removed duplicate */}
        <div id='about' className='m-14 rounded-lg shadow-2xl bg-white'>
          <div className='grid grid-cols-2 gap-4'>

            {/* Left Side */}
            <div className="m-12">
              <div className='text-2xl text-purple-700'>ABOUT ME</div>
              <div className='text-4xl font-bold'>Get to know me</div>

              <div className='grid grid-cols-2 m-5 gap-10'>
                {cards.map((card, i) => (
                  <div key={i} className='bg-white border-2 border-[#E5E7EB] hover:shadow-xl rounded p-4'>
                    <div className='flex gap-5'>
                      <div>{card.icon}</div>
                      <div>{card.label}</div>
                    </div>
                    <div className='ms-10 text-sm text-gray-500'>{card.Value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side — Timeline */}
            <div className='flex justify-end pr-60 pt-10'>
              <div className="bg-white rounded-2xl p-6 h-80 w-72">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 z-0" />
                  <div className="flex flex-col gap-6">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 relative z-10">
                        <div className="w-8 h-8 rounded-full border-2 border-violet-200 bg-white flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-violet-500 font-medium">{item.year}</p>
                          <p className="text-sm font-semibold text-gray-800 mt-0.5">{item.title}</p>
                          <p className="text-xs text-gray-400">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="mt-8 w-full border border-gray-300 text-gray-700 py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors duration-300"
                >
                  Download Resume
                  <span className="text-base">⬇</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Skills Section */}
        <div id='skills' className='flex flex-col lg:flex-row bg-white m-14 shadow-2xl rounded-lg'>
          {/* Left Column: Skill Cards */}
          <div className='flex-1 m-6'>
            <div className='mb-8 font-bold text-3xl text-purple-900'>Technical Skills</div>
            <div className='grid gap-10'>
              {card1.map((card, index) => (
                <div key={index} className='bg-white rounded-lg flex shadow-lg border border-gray-100 p-4'>
                  <div className='flex items-center justify-center w-24 text-5xl'>
                    {card.icon}
                  </div>
                  <div className='ml-4'>
                    <div className='text-violet-950 font-bold text-xl mb-2'>{card.value}</div>
                    <div className='flex flex-wrap gap-x-4 gap-y-1'>
                      {card.skills.map((skill, i) => (
                        <div key={i} className='flex items-center gap-2  text-purple-900 text-3xl'>
                          <span className='w-2 h-2 bg-violet-900 rounded-full  '></span>
                          <span className='font-sans bg-purple-400 text-white   rounded-full p-2 hover:bg-purple-300' >{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Radar Chart */}
          <div className='flex-1 bg-purple-50 text flex items-center justify-center p-10'>
            <div className='w-full max-w-md'>
              <h3 className='text-center text-purple-800 font-bold mb-4 uppercase tracking-widest'>Visual Matrix</h3>
              <Radar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id='projects' className='bg-white m-14 rounded-lg shadow-2xl p-12'>
          <div className='text-purple-800 font-bold text-2xl mb-4'>FEATURED PROJECT</div>
          <div className='flex justify-between items-center mb-10'>
            <div className='text-4xl font-bold'>Some Things I've Built</div>
            <Link  onClick={() => window.scrollTo(0, 0)} to="/ViewProject"  className="text-purple-700 font-semibold text-xl hover:underline flex items-center gap-1">
              View all projects &rarr;
            </Link>
          </div>

          <div className='  grid grid-cols-4 gap-6  '>
                         {
                            Projects.map((data,i)=>(
                                 <div key={i} className='bg-[#F5F5FA]  rounded-2xl m-4 shadow-md hover-shadow-xl transition duration-300 group '>
                                <img className=' h-50 rounded-2xl w-full  object-cover  group-hover:scale-105 transition' src={data.image}/>
                              <div className='p-4'>
                                    <div className=' mb-1 font-bold'>{data.title} </div>
                                    <div className='mb-3 text-xs'>{data.desc}</div>
                              </div>

                                <div className='flex  flex-wrap' >
                                    {data.tags.map((tags,j)=>(
                                            <div key={j} className='  text-purple-950 text-xs bg-purple-200 rounded-full px-3 py-1 p-2  flex  flex-wrap m-2 '>{tags} </div>
                                    ))} 

                                   <div className='flex ms-12 gap-4 cursor-pointer'>
                                     <a href={data.github} target='_blank' ><FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "rgb(177, 151, 252)" }} /></a>
                                  <a href={data.link} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' style={{color: "rgb(177, 151, 252)",}} /></a>

        

                                   </div>
                                </div>
                            
                          
                            </div>
                            
                            ))
                         }
                        </div>
        </div>

        {/* Contact Section */}
        <div id='contact' className='bg-white m-14 rounded-lg shadow-2xl p-12'>
          <div className='text-purple-950 font-bold m-4'>GET IN TOUCH</div>
          <div className='flex justify-between'>
            <div className='text-3xl font-semibold p-2'>Let's Work Together</div>
            <div className='font-bold'>
              Email
              <div className='font-light'>
                <a href="https://mail.google.com/mail/?view=cm&to=ndragneel982@gmail.com" target='_blank' rel="noreferrer">
                  ndragneel982@gmail.com
                </a>
              </div>
            </div>
            <div className='font-bold'>
              Phone
              <div className='font-light'>+91-8075286582</div>
            </div>
            <div className='font-bold'>
              Location
              <div className='font-light'>India, Kerala</div>
            </div>
            <button className='bg-purple-800 hover:bg-[#5B3DF5] transition-colors duration-300 hover:shadow-2xl   text-white rounded p-4 m-2'>
              <a href='https://wa.me/918075286582' target='_blank' rel="noreferrer">Send Message</a> →
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default MainPage;