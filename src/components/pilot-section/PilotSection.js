import './pilotSection.css';

import pilot from '../../img/pilot.jpg';
import rate from '../../img/rate.png';

const PilotSection = () => {
    return(
       <div className="pilot-container">
            <img src={rate} alt="rate" className='rate-img'/>
            <div className="pilot-content">
                <div className="pilot-content-headling">
                    <h2 className="pilot-content-headling-text">Was erwartet euch?</h2>
                </div>
                <div className="pilot-content-wrapper">
                    <img src={pilot} alt="pilot" />
                    <div className="pilot-content-slider">
                        <div className="slider-first-p-block">
                            <p className="slider-first-p">Ihr sucht ein spannendes und lustiges Event der Spitzenklasse für die ganze</p> 
                            <p className="slider-first-p2">Familie? Bekannt aus TV und Medien.</p>
                        </div>
                        <p className="list-upper-p">Für eure:</p>
                        <div className="slider-ul-block">
                            <ul className="first-ul">
                                <li className="li-item"><span>Open-Air Veranstaltung,</span></li>
                                <li className="li-item"><span>Oktoberfest,</span></li>
                                <li className="li-item"><span>Sommerfeste,</span></li>
                                <li className="li-item"><span>Weihnachtsmärkte,</span></li>
                                <li className="li-item"><span>Kirmes-Rummel-<br/>     Schausteller-vereinigung,</span></li>
                                <li className="li-item"><span>Requisiten Film- und<br/>Fernseh-produktionen,</span></li>
                            </ul>
                            <ul className="second-ul">
                                <li className="li-item"><span>Luft und Raumfahrt,</span></li>
                                <li className="li-item"><span>Firmenjubiläum,</span></li>
                                <li className="li-item"><span>Geburtstagsüberraschungen,</span></li>
                                <li className="li-item"><span>Dragsterrennen,</span></li>
                                <li className="li-item"><span>Auto-Tuning-Veranstaltung,</span></li>
                                <li className="li-item"><span>Car-tuning Treffen</span></li>
                                <li className="li-item"><span>Hochzeit,</span></li>
                                <li className="li-item"><span>Scheidungen</span></li>
                            </ul>
                        </div>

                        <div className="second-p">
                            <p><span>Dann seid ihr hier genau richtig.</span>Wir freuen uns sehr, euch hier zu begrüßen, der wohl unglaublichsten und 
                             <span> beeindruckendsten Rocket-Show der Galaxy.</span> 
                            </p>
                        </div>

                        <div className="slider-dots-wrapper">
                            <ul className="slider-dots">
                                <li><button className="dot"></button></li>
                                <li><button className="dot"></button></li>
                                <li><button className="dot"></button></li>
                                <li><button className="dot"></button></li>
                                <li><button className="dot"></button></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="pilot-content-headling3">
                    <h2 className="pilot-content-headling3-text">Auch du ...<br/>
                    <span>wirst lernen zu beten!!!</span></h2>
                </div>
            </div>
        </div> 
    )
    
}

export default PilotSection;