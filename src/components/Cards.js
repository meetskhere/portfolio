export const Cards = ({ data }) => {
    return (
        <div className="interests__container container">
            {Object.entries(data).map(([title, description], index) => (
                <div className="interest__tab" key={index}>
                    <div className="item_bg"></div>
                    <div className="main__card">
                        <h3 className="card__header">{title}</h3>
                        <div className="card__description">
                            {description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
