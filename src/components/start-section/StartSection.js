import './startSection.css';

import logos from '../../img/List.png';

const StartSection = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <h3 className="firs-section-h3">Bekannt aus den Medien</h3>
                <img src={logos} alt="logos" />
                <button className="first-section-button"><a href="/" className="first-section-link">YouTube Video ansehen</a></button>
            </div>
        </div>
    )
}

export default StartSection;