import React from 'react'
import { AiFillGithub } from 'react-icons/ai';


const Githubsection = () => {
  return (
    <div>
      <h1 className='text-4xl text-center bg-red-700 w-fit mx-auto rounded-2xl p-5'>Github Repository</h1>
      <div className='md:flex md:justify-center gap-10 bg-slate-900 w-10/12 mx-auto rounded-2xl '>
        <section className='git-sections'>
            <h1 className='text-2xl text-white'>Python</h1>
            <a href="https://github.com/beautycodez/python_projects" target='_blank'>
                <AiFillGithub className="AiFillGithub" />
            </a>
        </section>
        <section className='git-sections'>
            <h1 className='text-2xl text-white'>Front-end Projects</h1>
            <a href="https://github.com/beautycodez/wdd230" target='_blank'>
                <AiFillGithub className="AiFillGithub"/>
            </a>
        </section>
        {/* <section className='git-sections'>
            <h1>C#</h1>
            <a href="">
                <AiFillGithub className="AiFillGithub"/>
            </a>
        </section> */}
      </div>
    </div>
  )
}

export default Githubsection
