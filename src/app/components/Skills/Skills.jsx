import React from 'react'
import Rating from '@mui/material/Rating';
import { Reveal } from '../Reveal';

const Skills = () => {
  return (
    <section className="bg-[#f3f7f8] px-5 py-14 sm:py-16">
      <Reveal>
      <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-[#102a43] sm:text-4xl">
        Skills
      </h2>
      <div className="mx-auto max-w-xl overflow-x-auto rounded-2xl bg-white shadow-md shadow-[#102a43]/10">
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-[#16324f] text-white">
            <tr className="text-lg">
              <th colSpan={2}>Skills</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#d9e2ec] text-[#243b53]">
            <tr>
              <th scope="row">Html</th>
              <td><Rating name="customized-6" defaultValue={6} max={6} readOnly sx={{ color: "#0f766e" }} /></td>
            </tr>
            <tr>
              <th scope="row">Css</th>
              <td><Rating name="customized-6" defaultValue={6} max={6} readOnly sx={{ color: "#0f766e" }} /></td>
            </tr>
            <tr>
              <th scope="row">JavaScript</th>
              <td><Rating name="customized-6" defaultValue={6} max={6} readOnly sx={{ color: "#0f766e" }} /></td>
            </tr>
            <tr>
              <th scope="row">TypeScript</th>
              <td><Rating name="customized-6" defaultValue={2} max={6} readOnly sx={{ color: "#0f766e" }} /></td>
            </tr>
            <tr>
              <th scope="row">React</th>
              <td><Rating name="customized-6" defaultValue={4} max={6} readOnly sx={{ color: "#0f766e" }} /></td>
            </tr>
            <tr>
              <th scope="row">Tailwind Css</th>
              <td><Rating name="customized-6" defaultValue={4} max={6} readOnly sx={{ color: "#0f766e" }} /></td>
            </tr>
            <tr>
              <th scope="row">Python</th>
              <td><Rating name="customized-6" defaultValue={5} max={6} readOnly sx={{ color: "#0f766e" }} /></td>
            </tr>
            <tr>
              <th scope="row">C#</th>
              <td><Rating name="customized-6" defaultValue={4} max={6} readOnly sx={{ color: "#0f766e" }} /></td>
            </tr>
            <tr>
              <th scope="row">MySQL</th>
              <td><Rating name="customized-6" defaultValue={3} max={6} readOnly sx={{ color: "#0f766e" }} /></td>
            </tr>
          </tbody>
        </table>
      </div>
      </Reveal>
    </section>
  )
}

export default Skills
