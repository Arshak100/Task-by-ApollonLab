import './facebookSection.css';

import like from '../../img/fb-single.png';
import arrow from '../../img/arrow.png';

const FacebookSection = () => {
    return (
        <div className="fb-conteiner">
            <div className="fb-wrapper">
                <div className="fb-second-wrapper">
                    <div className="fb-headling-4-block">
                        <h4 className="fb-headling-4">
                            <span id="first-span">Besuche uns auf</span><br/>
                            <span id="second-span">Facebook</span>
                        </h4>
                    </div>
                    <div className="fb-like-block">
                        <img src={like} alt="like" className='fb-like-img'/>
                    </div>
                </div>
                <div className="soc-content">
                    <div className="left-content-block">
                        <p className="left-content">Werde jetzt Space Jet Show Fan und bleibe<br/>jederzeit auf dem Laufenden!</p>
                    </div>
                    <div className="right-content-block">
                        <p className="right-content">
                            schon über<span>500</span>Likes
                        </p>
                    </div>
                </div>
            </div>
            <img src={arrow} alt="arrow" className="fb-arrow"/>
        </div>
    )
}

export default FacebookSection;