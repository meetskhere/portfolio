import { useState } from 'react';

export const Skill = ({ data }) => {
    const [openSection, setOpenSection] = useState();
    const [openDetails, setOpenDetails] = useState(); // Initialize with the same index value

    const toggleSkills = (index) => {
        if (openSection === index) {
            setOpenSection(null);
        } else {
            setOpenSection(index);
        }
    };

    const toggleDetails = (skillIndex) => {
        if (openDetails === skillIndex) {
            setOpenDetails(null);
        } else {
            setOpenDetails(skillIndex);
        }
    };

    return (
        <div className="grid container skills__container">
            {data.map((section, index) => (
                <div key={index} className={`skills__content ${openSection === index ? 'skills__open' : 'skills__close'}`}>
                    <div className="skills__header" onClick={() => toggleSkills(index)}>
                        <i className="uil uil-brackets-curly skills__icon"></i>
                        <div>
                            <h1 className="skills__title">{section.title}</h1>
                            <span className="skills_subtitle">{section.years}</span>
                        </div>
                        <i className="uil uil-angle-down skills__arrow"></i>
                    </div>
                    <div className="skills__list grid">
                        {section.skills.map((skill, skillIndex) => (
                            <div className="skills__data" key={skillIndex}>
                                <div className='skill__details'>
                                    <div className='skills__lists__header' onClick={() => toggleDetails(skillIndex)}>
                                        <div className='skill__lists__header'>
                                            <div className="skills__titles">
                                                <h3 className="skills__name">{skill.name}</h3>
                                                <span className="skills__number">{skill.percentage}</span>
                                            </div>
                                            <div className="skills__bar">
                                                <span className={`skills__percentage skills__${skill.name.toLowerCase()}`} style={{ width: skill.percentage }}></span>
                                            </div>
                                        </div>
                                        <i className={`uil skills__arrow__sub ${openDetails === skillIndex ? 'uil-angle-up' : 'uil-angle-down'}`}></i>
                                    </div>
                                </div>
                                {skill.details && skill.details.length > 0 && (
                                    <div className="skills__details">

                                        {openDetails === skillIndex && skill.details && skill.details.length > 0 && (
                                            <div className='skill__list grid'>
                                                {skill.details.map((detail, detailIndex) => {
                                                    if ('application' in detail) {
                                                        return (
                                                            <div key={detailIndex} className="skill">
                                                                <h3>{detail.application}</h3>
                                                                <ul className='list list-pd-1 skill-details'>
                                                                    {detail.topics && detail.topics.map((topic, topicIndex) => (
                                                                        <li key={topicIndex}>
                                                                            <h4>{topic.category}</h4>
                                                                            <ul className='subtopic-skill-details'>
                                                                                {topic.subtopics && topic.subtopics.map((subtopic, subtopicIndex) => (
                                                                                    <li key={subtopicIndex}>{subtopic}</li>
                                                                                ))}
                                                                            </ul>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        );
                                                    } else {
                                                        return (
                                                            <div key={detailIndex} className="skill">
                                                                <h3>{detail.category}</h3>
                                                                <ul className='list list-pd-1 skill-details'>
                                                                    {detail.subtopics && detail.subtopics.map((subtopic, subtopicIndex) => (
                                                                        <li key={subtopicIndex}>{subtopic}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        )}

                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
