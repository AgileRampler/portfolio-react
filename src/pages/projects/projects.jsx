import React from 'react'
import NavBar from '../../components/navBar/navBar'
import { useState } from 'react'
import  portfolioProject from '../../assets/Projects/Porfolioproject.png'
import avalonMapper from '../../assets/Projects/Avalonmapper.png'
import uiux1 from '../../assets/Projects/uiux1.png'
import uiux2 from '../../assets/Projects/uiux2.png'
import uiux3 from '../../assets/Projects/uiux3.png'
import uiux4 from '../../assets/Projects/uiux4.png'
import weatherapp from '../../assets/Projects/weatherapp.png'
import libraryproject from '../../assets/Projects/libraryproject.png'
import todolist from '../../assets/Projects/todolist.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'  
import { faUser } from '@fortawesome/free-solid-svg-icons' 
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


const projects = () => {

const categories = ["All", "Web Apps", "UI/UX design","MERN"]




const [selected, setSelected] = useState("All")

 const Projects = [
    {
        image:portfolioProject,
        title:"Portfolio Website",
        desc :"Personal Portfolio Website Built with react and tailwind to showcase my works and skills",
        tags :["React","TailWindcss"],
        github:"https://github.com/AgileRampler/portfolio-react",
        link:"https://govindportfolio1.netlify.app"
    },
     {
        image:avalonMapper,
        title:"Avalon Mapper",
        desc :"A tool used to find the avalon maps in albion online",
        tags :["React","TailWindcss"],
             github:"https://github.com/AgileRampler/react-weather",
          link:"https://agile-weather.netlify.app"
    },
     {
        image:uiux1,
        title:"Coffee Website",
        desc :"Website Deisn made to learn how grids works in css ",
        tags :["HTML","CSS","ui/ux"],
        github:"https://github.com/AgileRampler/Grid_coffee",
        link:"https://agile-coffee.netlify.app"
    },
    {
          image:uiux2,
          title:"E-commerce Website",
          desc :"A simple design of clothing style e-commerce website",
          tags :["HTML","CSS",""],
          github:"https://github.com/AgileRampler/E-commerce-website",
          link:"https://vougue-shopify.netlify.app/"
      },
      
      
      {
          image:uiux3,
        title:"Rolex Website",
        desc :"An Ecommerce Website overview of rolex watch collection ",
        tags :["HTML","CSS","ui/ux"],
         github:"https://github.com/AgileRampler/Responsive",
          link:"https://rolex-agile.netlify.app/"
    },
      {
        image:uiux4,
        title:"FlowBite Website",
        desc :"Website design made to learn flowbite using standard html ",
        tags :["flowbite","ui/ux"],
        github:"https://github.com/AgileRampler/clipboard_flowbit",
        link:"https://app.netlify.com/projects/flowbita-agile/"
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
          image:weatherapp,
          title:"Mini Weather App",
          desc :"A mini weatherapp made to obtain quick weather data",
          tags :["React","TailWindcss","API"],
          github:"https://github.com/AgileRampler/react-weather",
          link:"agile-weather.netlify.app"
      },
      {
          image:libraryproject,
          title:"The Book Library",
          desc :"Odin Project of book library ",
          tags :["HTML","CSS","JavaScript"],
          github:"https://github.com/AgileRampler/odin_project_library",
          link:"https://agile-odin-library.netlify.app/"
      },
      
      
    
 ]

    
  return (
    
    <>
    {/* Navigation */}
    
 <div className='bg-[#F5F5FA]  '>
        <div className='h-20 '>
            <NavBar />
            
        </div>


  


    
        <div className='bg-white h-full rounded-3xl m-14'>
                  {/* Text Corner */}
            <div className=' p-5 flex items-center gap-2 '> 
                <div className='h-4 w-4  bg-purple-500 rounded-full animate-pulse duration-300 '>
                </div>
                   <div className='text-violet-700 '>My Works</div>
                
              </div>

              <div className='ms-5  text-5xl font-bold '>
                Projects I'have Build 
              </div>

               <div className='m-6 text-xl text-gray-700 '>
                Here are some of the projects I'have woerked on
                 <div >
                Each project is a step in my learning journey
              </div>
              </div>

                        {/* Project Display */}

                        <div className='m-10 flex gap-10'>
                            {categories.map((items)=> (
                        <div key={items} onClick= {()=>setSelected(items)}   className={`bg-[#F5F5FA]  p-2 ps-6 pe-6 rounded-4xl transition-colors duration-200 ${
                            selected === items ? "bg-purple-700 text-white" :"  text-gray-900  hover:bg-purple-100" }  cursor-pointer `}>{items}</div>
                            )) } 
                        </div>

                        {/* Projects */}

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
                                  <div><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2x' style={{color: "rgb(177, 151, 252)",}} /></div>

        

                                   </div>
                                </div>
                            
                          
                            </div>
                            
                            ))
                         }
                        </div>

             </div>

          

          
       
 </div>
    
    </>
  )
}

export default projects