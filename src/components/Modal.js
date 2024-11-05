import { useState } from 'react';

export const Modal = ({ data }) => {
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
            {data.map((detail, index1) => (
                <div className="services__content" key={index1}>
                    <div className="item_bg_2"></div>    
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">{detail.name}</h3>
                        <span className="services__subtitle">{detail.details}</span>
                        <span className="more-link">...</span>
                    </div>

                    <span className="button button--flex button--small button--link services__button" onClick={() => toggleModal(index1)}>
                        Read More
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className={`services__modal ${modalOpen[index1] ? 'active-modal' : ''}`} onClick={() => toggleModal(index1)}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">{detail.name}</h4>
                            <i className="uil uil-times services__modal-close" onClick={() => toggleModal(index1)}></i>

                            <ul className="services__modal-services grid">
                                {detail.details.map((moreDetail, index2) => (
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
