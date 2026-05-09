import React from 'react'
import NavBar from '../../components/navBar/navBar'
import { Link } from 'react-router-dom'
import portfolioProject from '../../assets/Projects/Porfolioproject.png'
import avalonMapper from '../../assets/Projects/Avalonmapper.png'
import uiux1 from '../../assets/Projects/uiux1.png'
import uiux2 from '../../assets/Projects/uiux2.png'
import uiux3 from '../../assets/Projects/uiux3.png'
import uiux4 from '../../assets/Projects/uiux4.png'
import weatherapp from '../../assets/Projects/weatherapp.png'
import todolist from '../../assets/Projects/todolist.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import Robot from '../../components/robot/robot'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const MainPage = () => {

  /* ─── data ─────────────────────────────────────────── */

  const cards = [
    { label: 'Education',  Value: 'B-Tech',    icon: <i className="fa-solid fa-graduation-cap" style={{ color: 'rgb(116,192,252)' }} /> },
    { label: 'Experience', Value: 'Fresher',   icon: <i className="fa-solid fa-user"           style={{ color: 'rgb(116,192,252)' }} /> },
    { label: 'Location',   Value: 'India',     icon: <i className="fa-solid fa-location-dot"   style={{ color: 'rgb(116,192,252)' }} /> },
    { label: 'FreeLance',  Value: 'Available', icon: <i className="fa-solid fa-briefcase"      style={{ color: 'rgb(116,192,252)' }} /> },
  ]

  const Projects = [
    { image: weatherapp,   title: 'Mini Weather App',       desc: 'A mini weather app to obtain quick weather data',              tags: ['React','TailwindCSS','API'],        github: 'https://github.com/AgileRampler/react-weather',        link: 'https://agile-weather.netlify.app' },
    { image: avalonMapper, title: 'Avalon Mapper',           desc: 'A tool used to find the avalon maps in Albion Online',         tags: ['React','TailwindCSS'],             github: 'https://github.com/AgileRampler/AlbionIntel',          link: 'https://albionintel.netlify.app' },
    { image: todolist,     title: 'Responsive To-Do List',  desc: 'Mobile-friendly To-Do list app to learn CRUD operations',      tags: ['React','TailwindCSS'],             github: 'https://github.com/AgileRampler/React-To-Do-List',     link: 'https://checklistv1.netlify.app/' },
    { image: uiux3,        title: 'Rolex Website',          desc: 'An e-commerce responsive overview of the Rolex collection',    tags: ['HTML','CSS','UI/UX'],              github: 'https://github.com/AgileRampler/Responsive',           link: 'https://rolex-agile.netlify.app/' },
  ]

  const timeline = [
    { year: '2020 – 2024', title: 'B.Tech in Computer Science',    sub: 'University',        icon: <i className="fa-solid fa-graduation-cap" style={{ color: 'rgb(116,192,252)' }} /> },
    { year: '2025',        title: 'MERN Stack Developer Intern',   sub: 'Luminar Technolab', icon: <i className="fa-solid fa-briefcase"      style={{ color: 'rgb(116,192,252)' }} /> },
    { year: '2025 – now',  title: 'Freelance Dev',                 sub: '',                  icon: <i className="fa-solid fa-briefcase"      style={{ color: 'rgb(116,192,252)' }} /> },
  ]

  /* skill rows */
  const frontendSkills = [
    { name: 'HTML5',       icon: 'fa-brands fa-html5',       color: 'text-orange-500' },
    { name: 'CSS3',        icon: 'fa-brands fa-css3-alt',    color: 'text-blue-500'   },
    { name: 'Bootstrap',   icon: 'fa-brands fa-bootstrap',   color: 'text-purple-600' },
    { name: 'Tailwind CSS',icon: 'fa-solid fa-wind',         color: 'text-cyan-500'   },
    { name: 'React',       icon: 'fa-brands fa-react',       color: 'text-cyan-400'   },
    { name: 'Angular',     icon: 'fa-brands fa-angular',     color: 'text-red-500'    },
    { name: 'Figma',       icon: 'fa-brands fa-figma',       color: 'text-pink-500'   },
  ]

  const backendSkills = [
    { name: 'Node.js',     icon: 'fa-brands fa-node-js',     color: 'text-green-600'  },
    { name: 'Express.js',  icon: 'fa-solid fa-code',         color: 'text-gray-700'   },
    { name: 'MongoDB',     icon: 'fa-solid fa-leaf',         color: 'text-green-500'  },
    { name: 'MySQL',       icon: 'fa-solid fa-database',     color: 'text-blue-500'   },
    { name: 'REST APIs',   icon: 'fa-solid fa-plug',         color: 'text-indigo-500' },
    { name: 'JWT Auth',    icon: 'fa-solid fa-shield-halved',color: 'text-yellow-600' },
  ]

  const toolSkills = [
    { name: 'Git',         icon: 'fa-brands fa-git-alt',     color: 'text-orange-500' },
    { name: 'GitHub',      icon: 'fa-brands fa-github',      color: 'text-gray-900'   },
    { name: 'Postman',     icon: 'fa-solid fa-paper-plane',  color: 'text-orange-400' },
    { name: 'VS Code',     icon: 'fa-solid fa-code',         color: 'text-blue-500'   },
    { name: 'Material UI', icon: 'fa-solid fa-layer-group',  color: 'text-blue-400'   },
    { name: 'Flowbite',    icon: 'fa-solid fa-droplet',      color: 'text-cyan-400'   },
    { name: 'npm',         icon: 'fa-brands fa-npm',         color: 'text-red-500'    },
    { name: 'Vite',        icon: 'fa-solid fa-bolt',         color: 'text-yellow-400' },
  ]

  const chartData = {
    labels: ['HTML/CSS', 'Bootstrap & Tailwind', 'JavaScript', 'React', 'Angular', 'Node & Express', 'Design/Figma'],
    datasets: [
      {
        label: 'Skill Proficiency',
        data: [9, 10, 6, 7, 4, 6, 7],
        backgroundColor: 'rgba(147,51,234,0.25)',
        borderColor: 'rgba(147,51,234,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(147,51,234,1)',
      },
    ],
  }

  const chartOptions = {
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: { display: false },
        pointLabels: { font: { size: 11 } },
      },
    },
    plugins: { legend: { display: false } },
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Govind_Resume.pdf'
    link.download = 'Govind_Resume.pdf'
    link.click()
  }

  /* ─── reusable skill pill ───────────────────────────── */
  const SkillPill = ({ icon, name, color }) => (
    <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
      <i className={`${icon} text-xl ${color}`} />
      <span className="font-medium text-gray-800 text-sm sm:text-base">{name}</span>
    </div>
  )

  /* ─── reusable skill card ───────────────────────────── */
  const SkillCard = ({ accent, borderColor, bgColor, iconClass, iconColor, title, titleColor, skills }) => (
    <div className={`bg-white border ${borderColor} rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}>
      <div className="flex flex-col sm:flex-row">
        {/* icon column */}
        <div className={` lg:w-44 border-b sm:border-b-0 sm:border-r border-dashed ${borderColor} flex items-center justify-center p-6`}>
          <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-[24px] ${bgColor} flex items-center justify-center`}>
            <i className={`${iconClass} text-5xl ${iconColor}`} />
          </div>
        </div>
        {/* pills */}
        <div className="flex-1 p-6">
          <h3 className={`text-2xl sm:text-3xl font-bold ${titleColor} mb-5`}>{title}</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => <SkillPill key={i} {...s} />)}
          </div>
        </div>
      </div>
    </div>
  )

  /* ─── render ────────────────────────────────────────── */
  return (
    <div className="bg-[#F5F5FA]">
      <NavBar />

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <div
        id="home"
        className="mx-4 sm:mx-8 lg:mx-14 mt-4 bg-white rounded-lg shadow-xl relative overflow-hidden
                   flex flex-col-reverse sm:flex-row items-center min-h-[420px]"
      >
        {/* text */}
        <div className="flex flex-col gap-4 p-8 sm:p-12 lg:p-20 w-full sm:w-[55%] z-10 relative">
          <p className="text-gray-500 text-base sm:text-lg">Hi, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-violet-600">
            Govind <span>👋</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            MERN Stack Developer <br className="hidden sm:block" />& Aspiring UI/UX Designer
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Modern web apps • clean and smooth apps • scalable products
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <a href="#projects">
              <button className="bg-violet-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 cursor-pointer rounded-xl font-medium hover:bg-violet-700 transition-colors duration-300 text-sm sm:text-base">
                View My Work
              </button>
            </a>
            <a href="#contact">
              <button className="border border-gray-300 text-gray-800 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl cursor-pointer font-medium hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                Contact Me
              </button>
            </a>
          </div>
        </div>

        {/* robot */}
        <div className="w-full hidden lg:flex h-64  relative  items-center justify-center py-8 sm:py-0">
          <div className="h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 bg-[#DDD6FE] absolute rounded-full z-0" />
          <div className="h-64 w-52 sm:h-80 sm:w-64 lg:h-96 lg:w-72 bg-[#C4B5FD] absolute z-0 rounded-2xl" />
          <div className="relative z-10">
            <Robot />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════════════ */}
      <div id="about" className="mx-4 sm:mx-8 lg:mx-14 my-8 rounded-lg shadow-2xl bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* left */}
          <div className="m-6 sm:m-10">
            <div className="text-xl sm:text-2xl text-purple-700 font-semibold">ABOUT ME</div>
            <div className="text-3xl sm:text-4xl font-bold mt-1">Get to know me</div>
            <div className="grid grid-cols-2 mt-6 gap-4 sm:gap-6">
              {cards.map((card, i) => (
                <div key={i} className="bg-white border-2 border-[#E5E7EB] hover:shadow-xl rounded-lg p-4 transition-shadow duration-300">
                  <div className="flex gap-3 items-center">
                    <div>{card.icon}</div>
                    <div className="text-sm text-gray-700 font-medium">{card.label}</div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500 pl-7">{card.Value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right – timeline */}
          <div className="flex justify-center lg:justify-end lg:pr-20 xl:pr-40 pb-10 pt-6 lg:pt-10">
            <div className="bg-white rounded-2xl p-6 w-full max-w-xs sm:max-w-sm">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 z-0" />
                <div className="flex flex-col gap-6">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 relative z-10">
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
                Download Resume <span>⬇</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SKILLS
      ═══════════════════════════════════════════════════ */}
      <div id="skills" className="mx-4 sm:mx-8 lg:mx-14 my-8">
        <div className="bg-[#fafafe] rounded-[32px] p-6 sm:p-10 lg:p-14 shadow-2xl">

          {/* heading */}
          <div className="flex items-start gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center shadow-sm shrink-0">
              <i className="fa-solid fa-code text-2xl text-violet-600" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">Technical Skills</h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Technologies and tools I use to build modern web applications
              </p>
            </div>
          </div>

          {/* two-column layout: skill cards + radar */}
          <div className="flex flex-col xl:flex-row gap-10">

            {/* skill cards column */}
            <div className="flex-1 flex flex-col gap-8">

              <SkillCard
                borderColor="border-violet-200"
                bgColor="bg-violet-50"
                iconClass="fa-solid fa-desktop"
                iconColor="text-violet-600"
                title="Frontend"
                titleColor="text-violet-700"
                skills={frontendSkills}
              />

              <SkillCard
                borderColor="border-green-200"
                bgColor="bg-green-50"
                iconClass="fa-solid fa-server"
                iconColor="text-green-600"
                title="Backend"
                titleColor="text-green-700"
                skills={backendSkills}
              />

              <SkillCard
                borderColor="border-orange-200"
                bgColor="bg-orange-50"
                iconClass="fa-solid fa-screwdriver-wrench"
                iconColor="text-orange-500"
                title="Tools & Others"
                titleColor="text-orange-500"
                skills={toolSkills}
              />
            </div>

            {/* radar chart column */}
            <div className="xl:w-80 2xl:w-96 flex flex-col items-center justify-start">
              <div className="sticky top-6 bg-purple-50 rounded-3xl p-8 w-full shadow-inner">
                <h3 className="text-center text-purple-800 font-bold mb-6 uppercase tracking-widest text-sm">
                  Skill Matrix
                </h3>
                <Radar data={chartData} options={chartOptions} />

                {/* legend */}
                <div className="mt-6 flex flex-col gap-2">
                  {[
                    { label: 'HTML/CSS',              val: 9 },
                    { label: 'Bootstrap & Tailwind',  val: 10 },
                    { label: 'JavaScript',            val: 6 },
                    { label: 'React',                 val: 7 },
                    { label: 'Angular',               val: 4 },
                    { label: 'Node & Express',        val: 6 },
                    { label: 'Design / Figma',        val: 7 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs text-gray-600 mb-0.5">
                          <span>{item.label}</span>
                          <span className="font-semibold text-purple-700">{item.val}/10</span>
                        </div>
                        <div className="h-1.5 bg-purple-100 rounded-full">
                          <div
                            className="h-1.5 bg-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${item.val * 10}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          PROJECTS
      ═══════════════════════════════════════════════════ */}
      <div id="projects" className="bg-white mx-4 sm:mx-8 lg:mx-14 my-8 rounded-lg shadow-2xl p-8 sm:p-10 lg:p-12">
        <div className="text-purple-800 font-bold text-lg sm:text-2xl mb-3">FEATURED PROJECTS</div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-3">
          <div className="text-2xl sm:text-4xl font-bold">Some Things I've Built</div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/ViewProject"
            className="text-purple-700 font-semibold text-base sm:text-xl hover:underline flex items-center gap-1 shrink-0"
          >
            View all projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {Projects.map((data, i) => (
            <div
              key={i}
              className="bg-[#F5F5FA] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 group overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={data.image}
                  alt={data.title}
                />
              </div>
              <div className="p-4 flex-1">
                <div className="mb-1 font-bold text-gray-900">{data.title}</div>
                <div className="mb-3 text-xs text-gray-500">{data.desc}</div>
              </div>
              <div className="px-4 pb-4 flex flex-wrap items-center gap-2">
                {data.tags.map((tag, j) => (
                  <span key={j} className="text-purple-950 text-xs bg-purple-200 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
                <div className="flex gap-3 ml-auto">
                  <a href={data.github} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: 'rgb(177,151,252)' }} />
                  </a>
                  <a href={data.link} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" style={{ color: 'rgb(177,151,252)' }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════════════ */}
      <div id="contact" className="bg-white mx-4 sm:mx-8 lg:mx-14 my-8 rounded-lg shadow-2xl p-8 sm:p-10 lg:p-12">
        <div className="text-purple-950 font-bold mb-3">GET IN TOUCH</div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

          <div className="text-2xl sm:text-3xl font-semibold">Let's Work Together</div>

          <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 flex-wrap">
            <div>
              <div className="font-bold text-sm text-gray-700">Email</div>
              <div className="font-light text-sm mt-1">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=ndragneel982@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-600 hover:underline"
                >
                  ndragneel982@gmail.com
                </a>
              </div>
            </div>

            <div>
              <div className="font-bold text-sm text-gray-700">Phone</div>
              <div className="font-light text-sm mt-1">+91-8075286582</div>
            </div>

            <div>
              <div className="font-bold text-sm text-gray-700">Location</div>
              <div className="font-light text-sm mt-1">India, Kerala</div>
            </div>

            <a href="https://wa.me/918075286582" target="_blank" rel="noreferrer">
              <button className="bg-purple-800 hover:bg-[#5B3DF5] transition-colors duration-300 hover:shadow-2xl text-white rounded-lg px-6 py-3 font-medium whitespace-nowrap">
                Send Message →
              </button>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainPage