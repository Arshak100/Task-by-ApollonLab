import PilotSection from '../pilot-section/PilotSection';
import FacebookSection from '../facebook-section/FacebookSection';
import CharList from '../char-list/CharList';
import InfoSection from '../info-section/InfoSection';
import Slider from '../slider/Slider';
import PaketPreize from '../paket-preize/PaketPreize';
import Contact from '../contact/Contact';

import './mainSection.css';

import sliderImg from '../../img/slider-img.png'


const MainSection = () => {
    return (
        <div className="sec-section">
            <PilotSection/>
            <FacebookSection/>
            <CharList/>
            <InfoSection/>
            <Slider>
                <div className="page page-1">
                    <div className="page-item">
                        <img src={sliderImg} alt="" className="page-img"/>
                        <p className="page-first-p">
                            „Kenne Schmitte schon aus dem Kindergarten  und weiss, dass er immer verrückte Sachen macht aber diesmal hat er sich selbst übertroffen.“
                        </p>
                        <p className="page-second-p">
                            Christian Hammer
                        </p>
                    </div>
                    <div className="page-item">
                        <img src={sliderImg} alt="" className="page-img"/>
                        <p className="page-first-p">
                            „Kenne Schmitte schon aus dem Kindergarten  und weiss, dass er immer verrückte Sachen macht aber diesmal hat er sich selbst übertroffen.“
                        </p>
                        <p className="page-second-p">
                            Christian Hammer
                        </p>
                    </div>
                </div>
                <div className="page page-2">
                    <div className="page-item">
                        <img src={sliderImg} alt="" className="page-img"/>
                        <p className="page-first-p">
                            „Kenne Schmitte schon aus dem Kindergarten  und weiss, dass er immer verrückte Sachen macht aber diesmal hat er sich selbst übertroffen.“
                        </p>
                        <p className="page-second-p">
                            Christian Hammer
                        </p>
                    </div>
                    <div className="page-item">
                        <img src={sliderImg} alt="" className="page-img"/>
                        <p className="page-first-p">
                            „Kenne Schmitte schon aus dem Kindergarten  und weiss, dass er immer verrückte Sachen macht aber diesmal hat er sich selbst übertroffen.“
                        </p>
                        <p className="page-second-p">
                            Christian Hammer
                        </p>
                    </div>
                </div>
                <div className="page page-3">
                    <div className="page-item">
                        <img src={sliderImg} alt="" className="page-img"/>
                        <p className="page-first-p">
                            „Kenne Schmitte schon aus dem Kindergarten  und weiss, dass er immer verrückte Sachen macht aber diesmal hat er sich selbst übertroffen.“
                        </p>
                        <p className="page-second-p">
                            Christian Hammer
                        </p>
                    </div>
                    <div className="page-item">
                        <img src={sliderImg} alt="" className="page-img"/>
                        <p className="page-first-p">
                            „Kenne Schmitte schon aus dem Kindergarten  und weiss, dass er immer verrückte Sachen macht aber diesmal hat er sich selbst übertroffen.“
                        </p>
                        <p className="page-second-p">
                            Christian Hammer
                        </p>
                    </div>
                </div>
            </Slider>
            <PaketPreize/>
            <Contact/>
        </div>
    )
}

export default MainSection;