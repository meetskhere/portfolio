export const Qualification = (data) => {

    return (

        <div className="qualification__content qualification__active" data-content id="education">
            {/* <!--==================== QUALIFICATION 1 ====================--> */}
            {data.projects.map((project, index) => (

                <div className="qualification__data" key={index}>
                    {index % 2 === 1 && (
                        <>
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {index !== data.projects.length - 1 && <span className="qualification__line"></span>}
                            </div>
                        </>
                    )}
                    <div>

                        <h3 className="qualification__title">{project.name}</h3>
                        <span className="qualification__subtitle">{project.description}</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            {project.duration}
                        </div>
                    </div>

                    {index % 2 === 0 && (
                        <div>
                            <span className="qualification__rounder"></span>
                            {index !== data.projects.length - 1 && <span className="qualification__line"></span>}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}