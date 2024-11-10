import { useState } from 'react';

export const DetailExperienceModal = ({ data }) => {
    // Create an object to track the open state of each modal
    const [modalOpen, setModalOpen] = useState({});

    // Function to toggle a specific modal by index
    const toggleModal = (index) => {
        setModalOpen({
            ...modalOpen,
            [index]: !modalOpen[index],
        });
    };

    return (
        <div className="grid services__container container">
            {data.detailed_summary.experience_details.map((detail, index1) => (
                <div className="services__content" key={index1}>
                    <div className="item_bg_2"></div>
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">{detail.project}</h3>
                        <h4 className='services__details'>{detail.client}</h4>
                        <ul className='lists lists-mg-1' >


                            <li className='list list-pd-1 list-white'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                {detail.domain}
                            </li>
                            <li className='list list-pd-1 list-white'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                {detail.environment}
                            </li>
                            <li className='list list-pd-1 list-white'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                {detail.project_description}
                            </li>

                        </ul>

                        <span className="button button--flex button--small button--link services__button" onClick={() => toggleModal(index1)}>
                            My Contributions
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                    </div>
                    <div className="time">
                        <h4 className='services__period'>{detail.period}</h4>
                        <h4 className='services__duration'>{detail.duration}</h4>
                    </div>


                    <div className='list list-pd-1 list-white company-name'>
                        {/* <i className="uil uil-check-circle services__modal-icon"></i> */}
                        <i>{detail.organization}</i>
                    </div>

                    <div className={`services__modal ${modalOpen[index1] ? 'active-modal' : ''}`} onClick={() => toggleModal(index1)}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">{detail.project}</h4>
                            <i className="uil uil-times services__modal-close" onClick={() => toggleModal(index1)}></i>

                            <ul className="services__modal-services grid">
                                {detail.contribution.map((moreDetail, index2) => (
                                    <li className="services__modal-service" key={index2}>
                                        <i className="uil uil-check-circle services__modal-icon2"></i>
                                        <p>{moreDetail}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}
