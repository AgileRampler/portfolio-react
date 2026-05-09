// src/pages/projects/projects.jsx

import React, { useState, useMemo } from 'react'
import NavBar from '../../components/navBar/navBar'
import portfolioProject from '../../assets/Projects/Porfolioproject.png'
import avalonMapper    from '../../assets/Projects/Avalonmapper.png'
import uiux1           from '../../assets/Projects/uiux1.png'
import uiux2           from '../../assets/Projects/uiux2.png'
import uiux3           from '../../assets/Projects/uiux3.png'
import uiux4           from '../../assets/Projects/uiux4.png'
import weatherapp      from '../../assets/Projects/weatherapp.png'
import libraryproject  from '../../assets/Projects/libraryproject.png'
import todolist        from '../../assets/Projects/todolist.png'
import EMC             from '../../assets/Projects/EMC.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub }              from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

/* ─────────────────────────────────────────────────────
   Each project has a `category` field that maps to the
   filter buttons.  Tags are kept separate for the pills.
───────────────────────────────────────────────────── */
const ALL_PROJECTS = [
  {
    image: portfolioProject,
    title: 'Portfolio Website',
    desc: 'Personal portfolio website built with React and Tailwind to showcase my works and skills.',
    tags: ['React', 'TailwindCSS'],
    category: 'Web Apps',
    github: 'https://github.com/AgileRampler/portfolio-react',
    link: 'https://govindportfolio1.netlify.app',
  },
  {
    image: avalonMapper,
    title: 'Avalon Mapper',
    desc: 'A tool used to find the Avalon maps in Albion Online.',
    tags: ['React', 'TailwindCSS'],
    category: 'Web Apps',
    github: 'https://github.com/AgileRampler/AlbionIntel',
    link: 'https://albionintel.netlify.app',
  },
  {
    image: EMC,
    title: 'Employee Management System',
    desc: 'Full employee management system with landing page, complete CRUD operations and JWT authentication.',
    tags: ['MERN', 'JWT', 'API'],
    category: 'MERN',
    github: 'https://github.com/AgileRampler/EMC',
    link: 'https://cheery-mooncake-ab72ec.netlify.app/',
  },
  {
    image: uiux1,
    title: 'Coffee Website',
    desc: 'Website design made to learn how grids work in CSS.',
    tags: ['HTML', 'CSS', 'UI/UX'],
    category: 'UI/UX Design',
    github: 'https://github.com/AgileRampler/Grid_coffee',
    link: 'https://agile-coffee.netlify.app',
  },
  {
    image: uiux2,
    title: 'E-commerce Website',
    desc: 'A simple design of a clothing-style e-commerce website.',
    tags: ['HTML', 'CSS'],
    category: 'UI/UX Design',
    github: 'https://github.com/AgileRampler/E-commerce-website',
    link: 'https://vougue-shopify.netlify.app/',
  },
  {
    image: uiux3,
    title: 'Rolex Website',
    desc: 'An e-commerce overview of the Rolex watch collection.',
    tags: ['HTML', 'CSS', 'UI/UX'],
    category: 'UI/UX Design',
    github: 'https://github.com/AgileRampler/Responsive',
    link: 'https://rolex-agile.netlify.app/',
  },
  {
    image: uiux4,
    title: 'Flowbite Website',
    desc: 'Website design made to learn Flowbite using standard HTML.',
    tags: ['Flowbite', 'UI/UX'],
    category: 'UI/UX Design',
    github: 'https://github.com/AgileRampler/clipboard_flowbit',
    link: 'https://flowbita-agile.netlify.app/',
  },
  {
    image: todolist,
    title: 'Responsive To-Do List',
    desc: 'Mobile-friendly To-Do list app to learn CRUD operations.',
    tags: ['React', 'TailwindCSS'],
    category: 'Web Apps',
    github: 'https://github.com/AgileRampler/React-To-Do-List',
    link: 'https://checklistv1.netlify.app/',
  },
  {
    image: weatherapp,
    title: 'Mini Weather App',
    desc: 'A mini weather app made to obtain quick weather data.',
    tags: ['React', 'TailwindCSS', 'API'],
    category: 'Web Apps',
    github: 'https://github.com/AgileRampler/react-weather',
    link: 'https://agile-weather.netlify.app',
  },
  {
    image: libraryproject,
    title: 'The Book Library',
    desc: 'Odin Project book library with add/remove functionality.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Apps',
    github: 'https://github.com/AgileRampler/odin_project_library',
    link: 'https://agile-odin-library.netlify.app/',
  },
]

const CATEGORIES = ['All', 'Web Apps', 'UI/UX Design', 'MERN']

/* ─── count badge per category ─── */
const countFor = (cat) =>
  cat === 'All'
    ? ALL_PROJECTS.length
    : ALL_PROJECTS.filter((p) => p.category === cat).length

/* ─── single project card ─── */
const ProjectCard = ({ image, title, desc, tags, github, link }) => (
  <div className="bg-[#F5F5FA] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col overflow-hidden">
    <div className="overflow-hidden rounded-t-2xl">
      <img
        src={image}
        alt={title}
        className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="p-4 flex-1">
      <div className="font-bold text-gray-900 mb-1">{title}</div>
      <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
    </div>

    <div className="px-4 pb-4 flex flex-wrap items-center gap-2">
      {tags.filter(Boolean).map((tag, j) => (
        <span
          key={j}
          className="text-purple-950 text-xs bg-purple-200 rounded-full px-3 py-1"
        >
          {tag}
        </span>
      ))}

      <div className="flex gap-3 ml-auto">
        <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            style={{ color: 'rgb(177,151,252)' }}
            className="hover:opacity-70 transition-opacity"
          />
        </a>
        <a href={link} target="_blank" rel="noreferrer" aria-label="Live site">
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="lg"
            style={{ color: 'rgb(177,151,252)' }}
            className="hover:opacity-70 transition-opacity"
          />
        </a>
      </div>
    </div>
  </div>
)

/* ─── page ─── */
const Projects = () => {
  const [selected, setSelected] = useState('All')

  const filtered = useMemo(
    () =>
      selected === 'All'
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter((p) => p.category === selected),
    [selected]
  )

  return (
    <div className="bg-[#F5F5FA] min-h-screen">
      <NavBar />

      <div className="bg-white rounded-3xl mx-4 sm:mx-8 lg:mx-14 my-6 pb-12">

        {/* ── header ── */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-3.5 w-3.5 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-violet-700 font-medium text-sm">My Works</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Projects I've Built
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-xl">
            Here are some of the projects I've worked on.{' '}
            <span className="block sm:inline">Each project is a step in my learning journey.</span>
          </p>
        </div>

        {/* ── filter tabs ── */}
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base
                            font-medium transition-all duration-200 cursor-pointer
                            ${
                              selected === cat
                                ? 'bg-purple-700 text-white shadow-md shadow-purple-200'
                                : 'bg-[#F5F5FA] text-gray-700 hover:bg-purple-100'
                            }`}
              >
                {cat}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-semibold
                              ${selected === cat ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  {countFor(cat)}
                </span>
              </button>
            ))}
          </div>

          {/* result count */}
          <p className="mt-4 text-sm text-gray-400">
            Showing{' '}
            <span className="font-semibold text-purple-700">{filtered.length}</span>{' '}
            project{filtered.length !== 1 ? 's' : ''}
            {selected !== 'All' && (
              <>
                {' '}in <span className="font-semibold text-purple-700">{selected}</span>
              </>
            )}
          </p>
        </div>

        {/* ── project grid ── */}
        <div className="px-4 sm:px-6 lg:px-8 mt-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <i className="fa-solid fa-folder-open text-5xl mb-4 block" />
              No projects in this category yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Projects