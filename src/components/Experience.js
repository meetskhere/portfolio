import React from 'react';

export const Experience = ({ data }) => {
  if (!data || !data.detailed_summary || !data.detailed_summary.experience) {
    return null; // Handle cases where data is missing or not structured as expected
  }

  const experienceData = data.detailed_summary.experience;

  return (
    <div className="qualification__content qualification__active" data-content id="education">
      {experienceData.map((exp, index) => (
        <div className="qualification__data" key={index}>
          {index % 2 === 1 && (
            <>
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {index !== experienceData.length - 1 && <span className="qualification__line"></span>}
              </div>
            </>
          )}
          <div>
            <h3 className="qualification__title">{exp.role}</h3>
            <span className="qualification__subtitle">{exp.domain}</span>
            <span className="qualification__subtitle">{exp.organization}</span>
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt"></i>
              {exp.duration}
            </div>
          </div>
          {index % 2 === 0 && (
            <div>
              <span className="qualification__rounder"></span>
              {index !== experienceData.length - 1 && <span className="qualification__line"></span>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
