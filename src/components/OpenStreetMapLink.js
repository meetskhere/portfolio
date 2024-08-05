import React from 'react';
import "../assets/css/Style.css"

class OpenStreetMapLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const location = encodeURIComponent(this.props.location);
        const mapUrl = `https://www.openstreetmap.org/?query=${location}`;
        window.open(mapUrl, '_blank');
    }

    render() {
        return (
            <>
                <h3 className="contact__title" onClick={this.handleClick}>Meet Me</h3>
                <span className="contact__subtitle" onClick={this.handleClick}>
                    {this.props.location}
                </span>
            </>
        );
    }
}

export default OpenStreetMapLink;
