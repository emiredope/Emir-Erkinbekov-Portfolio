import React from 'react'
// use <img> from public/ for arrow to avoid SVGR in production
import { motion } from 'framer-motion';

interface Props{
    name?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | undefined;
    bgColor?: string | undefined;
    dark?: boolean | undefined;
    projectLink?: string | undefined
}

const ProjectPreview: React.FC<Props> = ({
    name="Block name", 
    description="This is an amazing block ", 
    imageUrl = '/project-1.png',
    bgColor = "#e4e4e7",
    dark = false,
    projectLink = "#"
}) => {
  return (
    <div className={ `h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}` }>
      <motion.div
          initial="initial"
          whileInView="animate"
          variants={PreviewAnimation}
          style={{background: `${bgColor}`, width: '100%', height: '100%'}}
          viewport={{ once: true }}
          layout
      >
        <div className='h-full w-full px-10 py-6 duration-[500ms] transition-all ease-in-out hover:scale-105 bg-contain bg-no-repeat bg-center'
            style={{backgroundImage: `url(${imageUrl})`}}
        >
        <div className='flex justify-between'>
            <div>
                <h2 className='font-medium text-lg dark:text-white'>{name}</h2>
                <p className='text-sm text-zinc-500 dark:text-zinc-300'>{description}</p>
            </div>
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <div className='h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer'>
                    <img src="/arrow.svg" alt="Open project" className="w-6 h-6"/>
                </div>
            </a>
        </div>
        </div>
      </motion.div>
    </div>
  )
}

const PreviewAnimation = {
    initial: {
        y: 30,
        opacity: 0,
        scale: 0.9,
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 0.8,
        }
    }
}

export default ProjectPreview