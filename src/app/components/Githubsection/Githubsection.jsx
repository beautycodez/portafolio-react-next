import React from 'react'
import { AiFillGithub } from 'react-icons/ai';


const Githubsection = () => {
  return (
    <div>
      <h1 className='text-4xl'>Github Repository</h1>
      <div className=''>
        <section className='git-sections'>
            <h1>Python</h1>
            <a href="https://github.com/beautycodez/python_projects" target='_blank'>
                <AiFillGithub className="AiFillGithub" />
            </a>
        </section>
        <section className='git-sections'>
            <h1>Front-end Projects</h1>
            <a href="https://github.com/beautycodez/wdd230">
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
