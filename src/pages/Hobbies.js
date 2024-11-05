import { Footer, Header, PhotoGallery } from "../components/index"
import { useState, useEffect } from "react";
import hobbies from '../assets/json/Hobbies.json';

export const Hobbies = () => {

  const [activeTab, setActiveTab] = useState(1);
  const [isDisabled, setDisable] = useState(false)
  const [previousTab, setPreviousTab] = useState(1); // Tracks the previous active tab
  const [animationClass, setAnimationClass] = useState(''); // Determines which animation class to use


  // Effect to set animation class based on the direction of tab transition
  useEffect(() => {
    if (activeTab > previousTab) {
      // Moving forward (1 -> 2 -> 3)
      setAnimationClass('slide-in-from-right');
    } else if (activeTab < previousTab) {
      // Moving backward (3 -> 2 -> 1)
      setAnimationClass('slide-out-to-left');
    }
    setPreviousTab(activeTab); // Update the previous tab after setting the animation
  }, [activeTab, previousTab]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  // Store the state of which poem is in "Read More" mode
  const [readMoreStates, setReadMoreStates] = useState(
    hobbies.Poems.map(() => true) // Initialize state for each poem
  );

  // Function to toggle the "Read More" state for a specific poem by index
  const toggleReadMore = (index) => {
    setReadMoreStates(prevStates =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const photography = hobbies.Photography;
  const painting = hobbies.Painting;
  // console.log(photography, painting)


  return (
    <>
      <Header />

      <section className="qualification section container">

        <div className="qualification__container container">
          <div className="qualification__tabs fixed__section first__top">
            {/* Render three tab buttons */}
            <div className={`qualification__button button--flex ${activeTab === 1 ? 'qualification__active' : ''}`} onClick={() => handleTabClick(1)}>
              <span className='center-tab'>
                <i className="uil uil-lira-sign qualification__icon"></i>
                Poems
              </span>
              <div className={`border-bottom ${activeTab === 1 ? 'active' : ''}`}></div>
            </div>
            <div className={`qualification__button button--flex ${activeTab === 2 ? 'qualification__active' : ''}`} onClick={() => handleTabClick(2)}>
              <span className='center-tab'>
                <i className="uil uil-camera qualification__icon"></i>
                Photography
              </span>
              <div className={`border-bottom ${activeTab === 2 ? 'active' : ''}`}></div>
            </div>
            <div className={`qualification__button button--flex ${activeTab === 3 ? 'qualification__active' : ''}`} onClick={() => handleTabClick(3)} style={{ pointerEvents: isDisabled ? 'none' : 'auto', opacity: isDisabled ? 0.5 : 1 }}>
              <span className='center-tab'>
                <i className="uil uil-brush-alt qualification__icon"></i>
                Paintings
              </span>
              <div className={`border-bottom ${activeTab === 3 ? 'active' : ''}`}></div>
            </div>
          </div>

          {/* Render content based on active tab */}
          {activeTab === 1 && (
            <div className={`form__content qualification__active ${activeTab === 1 ? animationClass : ''} ${activeTab !== 1 ? 'hidden' : ''}`}>
              <section className="academic section category__sections_first">
                <div className="poems">
                  {/* {hobbies.Poems.map((poem, index) => {
                    // Limit the preview text to 120 words
                    const previewText = poem.content.split(' ').slice(0, 10).join(' ');
                    const formattedText = poem.content.replace(/\n/g, '<br />');

                    return (
                      <div className="poem" key={index}>
                        <h2 className="poem__header">{poem.title}</h2>
                        <p className="poem__main-body">
                          {readMoreStates[index] ? (
                            <>
                              {previewText}...
                            </>
                          ) : (
                            <span dangerouslySetInnerHTML={{ __html: formattedText }} />
                          )}
                          <span className="read__poem" onClick={() => toggleReadMore(index)}>
                            {readMoreStates[index] ? "Read More" : "Show Less"}
                          </span>
                        </p>
                      </div>
                    );
                  })} */}
                  <p style={{textAlign: "center"}}>We will update it soon...</p>
                </div>
              </section>
            </div>
          )}

          {activeTab === 2 && (
            <div className={`form__content qualification__active ${activeTab === 2 ? animationClass : ''} ${activeTab !== 2 ? 'hidden' : ''}`}>
              <section className="academic section category__sections_first">
                {photography.map((item, index) => (
                  <PhotoGallery
                    key={index}
                    topic={item}
                  />
                ))}
              </section>
            </div>
          )}

          {activeTab === 3 && (
            <div className={`form__content qualification__active ${activeTab === 3 ? animationClass : ''} ${activeTab !== 3 ? 'hidden' : ''}`}>
              <section className="academic section category__sections_first">
              {painting.map((item, index) => (
                  <PhotoGallery
                    key={index}
                    topic={item}
                  />
                ))}
              </section>
            </div>
          )}

        </div >

      </section >

      <Footer />
    </>
  )
}
