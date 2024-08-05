import React from 'react'

export const QualificationTable = (data) => {

  return (
    <div className="educational__container container">

      <table className="carousel-table">
        <thead>
          <tr className='table__header'>
            <th className='cell__header'>Year</th>
            <th className='cell__header'>Degree/Certificate</th>
            <th className='cell__header'>School/Institution enrolled</th>
            <th className='cell__header'>Percentage/CGPA obtained</th>
            <th className='cell__header'>Specialization</th>
          </tr>
        </thead>
        <tbody>
          {data.education.map((item, index) => (
            <tr className='table__description' key={index}>
              <td className='cell__description'>{item.year}</td>
              <td className='cell__description'>{item.degree}</td>
              <td className='cell__description'>{item.school}</td>
              <td className='cell__description'>{item.score}</td>
              <td className='cell__description'>{item.subjects}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
