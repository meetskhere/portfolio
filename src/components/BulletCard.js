
export const BulletCard = ({ icon, title, data }) => {
    return (
        <div className="interests__container container bullet__card">
            {title && <h3 className='subtitle bullet__card__subtitle'>{title}</h3>}
            <ul >
                {data.map((item, index) => (
                    <li className="list" key={index}>
                        <i className={`${icon} services__modal-icon`}></i>
                        {/* <i className="uil uil-check-circle "></i> */}
                        <p>{item}</p>
                    </li>

                ))}
            </ul>
        </div>
    )
}