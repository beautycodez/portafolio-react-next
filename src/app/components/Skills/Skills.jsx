import React from 'react'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating';

const Skills = () => {
  return (
    <div>
      <table className='mx-auto my-8 border-black border-2'>
        <thead className='bg-yellow-500 text-2xl'>
          <tr>
            <th colSpan={2}>Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Html</th><td>
<Rating name="customized-6" defaultValue={6} max={6} readOnly /></td>
          </tr>
          <tr>
            <th>Css</th><td><Rating name="customized-6" defaultValue={6} max={6} readOnly /></td>
          </tr>
          <tr>
            <th>JavaScript</th><td><Rating name="customized-6" defaultValue={6} max={6} readOnly /></td>
          </tr>
          <tr>
            <th>TypeScript</th><td><Rating name="customized-6" defaultValue={2} max={6} readOnly /></td>
          </tr>
          <tr>
            <th>React</th><td><Rating name="customized-6" defaultValue={4} max={6} readOnly /></td>
          </tr>
          <tr>
            <th>Tailwind Css</th><td><Rating name="customized-6" defaultValue={4} max={6} readOnly /></td>
          </tr>
          <tr>
            <th>Python</th><td><Rating name="customized-6" defaultValue={5} max={6} readOnly /></td>
          </tr>
          <tr>
            <th>C#</th><td> <Rating name="customized-6" defaultValue={4} max={6} readOnly /></td>
          </tr>
          <tr>
            <th>MySQL</th><td><Rating name="customized-6" defaultValue={3} max={6} readOnly /></td>
          </tr>
        </tbody>
      </table>
    
    </div>
  )
}

export default Skills
