import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { Reveal } from '../Reveal';


const Githubsection = () => {
  return (
    <section className="bg-white px-6 py-14 sm:py-16">
      <Reveal>
      <h2 className="mb-9 text-center text-3xl font-semibold tracking-tight text-[#102a43] sm:mb-12 sm:text-4xl">
        GitHub Repositories
      </h2>
      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        <section className="flex flex-col items-center gap-4 rounded-2xl bg-[#f3f7f8] px-6 py-8 text-[#102a43] shadow-sm transition-colors hover:bg-[#e5f2f0]">
            <h3 className="text-xl font-semibold">Python</h3>
            <a href="https://github.com/beautycodez/python_projects" target="_blank" rel="noreferrer" aria-label="Python projects on GitHub">
                <AiFillGithub className="h-16 w-16 text-[#16324f] transition-colors hover:text-[#0f766e]" />
            </a>
        </section>
        <section className="flex flex-col items-center gap-4 rounded-2xl bg-[#f3f7f8] px-6 py-8 text-[#102a43] shadow-sm transition-colors hover:bg-[#e5f2f0]">
            <h3 className="text-xl font-semibold">Front-end Projects</h3>
            <a href="https://github.com/beautycodez/wdd230" target="_blank" rel="noreferrer" aria-label="Front-end projects on GitHub">
                <AiFillGithub className="h-16 w-16 text-[#16324f] transition-colors hover:text-[#0f766e]" />
            </a>
        </section>
        {/* <section className='git-sections'>
            <h1>C#</h1>
            <a href="">
                <AiFillGithub className="AiFillGithub"/>
            </a>
        </section> */}
      </div>
      </Reveal>
    </section>
  )
}

export default Githubsection
