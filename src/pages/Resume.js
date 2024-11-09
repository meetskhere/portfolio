import { useState, useEffect } from 'react';
import { BulletCard, Cards, Experience, Footer, Header, Modal, Qualification, QualificationTable, ScrollUp, DetailExperienceModal } from "../components/index"

import JsonAcademicData from "../assets/json/AcademicCV.json"
import JsonIndustrialData from "../assets/json/IndustrialCV.json"


// // Define a functional component
export const Resume = () => {
  /*==================== QUALIFICATION TABS ====================*/

  // Initial active tab state
  const [activeTab, setActiveTab] = useState('education');

  // Function to handle tab clicks and set the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Use the useEffect hook to watch for changes in the activeTab state
  useEffect(() => {
    const delayScroll = setTimeout(() => {
      // Scroll to the top when the activeTab changes
      window.scrollTo(0, 0);
    }, 500); // Replace 500 with the desired delay time in milliseconds

    return () => clearTimeout(delayScroll); // Clear the timeout if the activeTab changes before the delay completes
  }, [activeTab]);

  const scholasticAchievements = JsonAcademicData.achievements.scholastic;
  const nonScholasticAchievements = JsonAcademicData.achievements.non_scholastic;

  return (
    <>
      <Header />
      <section className="qualification section container">
        <div className="qualification__container container">
          <div className="qualification__tabs fixed__section">
            <div className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`} data-target="#education" onClick={() => handleTabClick('education')}>
              <span className='center-tab'>
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Academic
              </span>
              <div className={`border-bottom ${activeTab === 'education' ? 'active' : ''}`}></div>
            </div>

            <div className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`} data-target="#work" onClick={() => handleTabClick('work')}>
              <span className='center-tab'>
                <i className="uil uil-building qualification__icon"></i>
                Industrial
              </span>
              <div className={`border-bottom ${activeTab === 'work' ? 'active' : ''}`}></div>
            </div>

          </div>

          <div>
            {/* <!--==================== EDUCATION QUALIFICATION CONTENT ====================--> */}
            <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''} ${activeTab === 'work' ? 'slide-in-from-right' : 'slide-out-to-left'}`} data-content id="education">
              {/* <!--==================== QUALIFICATION CONTENTS ====================--> */}

              {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
              <section className="academic section category__sections_first">
                <h2 className="section__title">EDUCATIONAL QUALIFICATIONS</h2>
                <span className="section__subtitle">Degrees Earned, Wisdom Gained.</span>

                <QualificationTable education={JsonAcademicData.education} />

              </section>

              {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
              <section className='section'>
                <h2 className="section__title">PROJECTS & INTERNSHIPS</h2>
                <span className="section__subtitle">My Projects and Internships at a Glance.</span>
                <Qualification projects={JsonAcademicData.projects} />
              </section>

              {/* <!--==================== QUALIFICATION CONTENT 3 ====================--> */}
              <section className="achievement section">
                <h2 className="section__title">ACHIEVEMENTS & AWARDS</h2>
                <span className="section__subtitle">The Jewels in My Crown of Accomplishments.</span>

                <BulletCard icon="uil uil-award" title="Scholastic Achievements" data={scholasticAchievements} />

                <BulletCard icon="uil uil-award" title="Non-Scholastic Achievements" data={nonScholasticAchievements} />
              </section>

              {/* <!--==================== QUALIFICATION CONTENT 4 ====================--> */}
              <section className="interests section">
                <h2 className="section__title">AREAS OF INTERESTS</h2>
                <span className="section__subtitle">Intrigues That Fuel My Inner Fire During UG Days!</span>

                <BulletCard icon="uil uil-lightbulb" data={JsonAcademicData.areas_of_interest} />
              </section>

              {/* <!--==================== QUALIFICATION CONTENT 5 ====================--> */}
              <section className="course section">
                <h2 className="section__title">COURSES ENROLLED</h2>
                <span className="section__subtitle">Empowering Myself, One Course at a Time.</span>

                <Modal data={JsonAcademicData.other_courses} />

              </section>

              {/* <!--==================== QUALIFICATION CONTENT 6 ====================--> */}
              <section className="course section">
                <h2 className="section__title">EXTRA-CURRICULAR ACTIVITIES</h2>
                <span className="section__subtitle">Where Hobbies Meet Impact.</span>

                <Cards data={JsonAcademicData.other_activities} />

              </section>

              <div className="last_update_2">Page Last Updated On: <span>{JsonAcademicData.lastUpdateOn}</span></div>

            </div>

            {/* <!--==================== WORK QUALIFICATION CONTENT ====================--> */}
            <div className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''} ${activeTab === 'education' ? 'slide-out-to-left' : 'slide-in-from-right'}`} data-content id="work">
              {/* <!--==================== QUALIFICATION CONTENTS ====================--> */}

              {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
              <section className="interests section category__sections_first ">
                <h2 className="section__title">ROLE & WORK EXPERIENCE</h2>
                <span className="section__subtitle">My Industrial Experience at a Glance.</span>

                <Experience data={JsonIndustrialData} />
              </section>

              {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
              <section className="interests section">
                <h2 className="section__title">PROJECTS UNDERTAKEN</h2>
                <span className="section__subtitle">Know More About my Corporate Experience.</span>

                <DetailExperienceModal data={JsonIndustrialData} />

              </section>

              {/* <!--==================== QUALIFICATION CONTENT 3 ====================--> */}
              {/* <section className="interests section">
                <h2 className="section__title">Skill Se</h2>
                <span className="section__subtitle">More Details on my Industrial Experience</span>

                <DetailExperienceModal data={JsonIndustrialData} />

              </section> */}

              <div className="last_update_2">Page Last Updated On: <span>{JsonIndustrialData.lastUpdateOn}</span></div>

            </div>
          </div>
        </div>
      </section>

      <ScrollUp />
      <Footer />
    </>
  )
}