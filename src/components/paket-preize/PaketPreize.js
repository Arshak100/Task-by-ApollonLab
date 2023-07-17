import './paketPreize.css';

import star1 from '../../img/star1.png';
import star2 from '../../img/star2.png';
import star3 from '../../img/star3.png';
import item1 from '../../img/paketLogos/Item1.png';
import item2 from '../../img/paketLogos/Item2.png';
import item3 from '../../img/paketLogos/Item3.png';
import item4 from '../../img/paketLogos/Item4.png';
import item5 from '../../img/paketLogos/Item5.png';
import item6 from '../../img/paketLogos/Item6.png';
import item7 from '../../img/paketLogos/Item7.png';
import item8 from '../../img/paketLogos/Item8.png';
import item9 from '../../img/paketLogos/Item9.png';
import item10 from '../../img/paketLogos/Item10.png';

const PaketPreize = () => {
    return (
        <div className="paket-wrapper">
            <div className="paket-container">
                <div className="paket-headling-2">
                    <h2 className="paket-headling-2-content">Paket Preise</h2>
                </div>
                <p className="paket-p">
                    Du hast Bock bekommen die Show zu erleben? 
                    Hier kannst du verschiedene Pakete wählen.
                </p> 
                <div className="paket-div-wrapper">
                    <div className="paket-list">
                        <ul className="paket-ul">
                            <li className="paket-item paket-item-top">
                                <div className="paket-logo-block">
                                    <img src={star1} alt="star1" />
                                    <span>PAKET 1</span>
                                </div>
                                <p>
                                    The Beast, Ihle Copter oder Lucifer,
                                    Space-Sirene E-57, Boom Jet - kleene Elly
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Vorführzeit: ca 30-40 Minuten
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Anzahl der Fahrzeuge: 4
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Konfetti-Effekte
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Pyro-Effekte
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Co2-Effekte
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Kerosin
                                </p>
                            </li>
                            <li className="paket-item paket-item-bottom">
                                <span className="bottom-span">
                                    Preis: 3.499 €
                                </span>
                                <p>
                                    Preis zzgl. MwSt.
                                </p>
                            </li>
                            <li className="paket-item">
                                <button className="paket-item-button">PAKET 1 ANFRAGEN</button>
                            </li>
                        </ul>
                    </div>
                    <div className="paket-list">
                        <ul className="paket-ul">
                           <li className="paket-item paket-item-top">
                                <div className="paket-logo-block">
                                    <img src={star2} alt="star2" />
                                    <span>PAKET 2</span>
                                </div>
                                <p>
                                    The Beast, Ihle Copter, Lucifer, Mucki
                                    oder Jet-APE, Spacesirene E 57, Boom Jet
                                    - Kleene Elly
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Vorführzeit: ca 40-50 minuten
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Anzahl der Fahrzeuge: 6
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Konfetti-Effekte
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Pyro-Effekte
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Co2-Effekte
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Kerosin
                                </p>
                            </li>
                            <li className="paket-item paket-item-bottom">
                                <span className="bottom-span">
                                    Preis: auf Anfrage
                                </span>
                            </li>
                            <li className="paket-item">
                                <button className="paket-item-button">PAKET 2 ANFRAGEN</button>
                            </li> 
                        </ul>
                    </div>
                    <div className="paket-list">
                        <ul className="paket-ul">
                            <li className="paket-item paket-item-top">
                                <div className="paket-logo-block">
                                    <img src={star3} alt="star3" />
                                    <span>PAKET 3</span>
                                </div>
                                <p>
                                    Spannende und lustige <br/>
                                    Theatervorstellung mit The Beast, Lucifer,<br/>
                                    Jet Ape, Mucki, Jet Rat, Ihle Copter,
                                    Burningman, E57, Boom Jet, Jet Toilet und
                                    unserem Space-Manni, bekannt aus <br/>
                                    RTL2.
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Vorführzeit: ca 70-80 minuten
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Anzahl der Fahrzeuge: 9
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    Konfetti-Effekte, Pyro-Effekte, Co2-Effekte,8 Meter grosser aufblasbarer ALIEN,riesiges SPACE-JET-ZELT, American DJ 
                                    Laser-Effekte
                                </p>
                            </li>
                            <li className="paket-item">
                                <p>
                                    4 Skydancer, Pyropult im Tigermaul (5 Meter hoch), grosse Life PA Beschallungsanlage, Traversen für Lichteffecte, Nebelmaschinen, Kerosin
                                </p>
                            </li>
                            <li className="paket-item paket-item-bottom">
                                <span className="bottom-span">Preis: auf Anfrage</span>
                            </li>
                            <li className="paket-item">
                                <button className="paket-item-button">PAKET 3 ANFRAGEN</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="paket-second-headling-2">
                    <h2 className="paket-headling-2-content">Einzelpreise</h2>
                </div>
                <p className="paket-p">
                    Die komplette Show ist dir zu viel?
                    Du kannst auch einzelne Fahrzeuge buchen.
                    Klicke einfach ein Fahrzeug an.
                </p>
                <div className="paket-logos">
                    <ul className="paket-logos-ul">
                        <li className="logos-item">
                            <img src={item1} alt="" />
                        </li>
                        <li className="logos-item">
                            <img src={item2} alt="item" />
                        </li>
                        <li className="logos-item">
                            <img src={item3} alt="item" />
                        </li>
                        <li className="logos-item">
                            <img src={item4} alt="item" />
                        </li>
                        <li className="logos-item">
                            <img src={item5} alt="item" />
                        </li>
                        <li className="logos-item">
                            <img src={item6} alt="item" />
                        </li>
                        <li className="logos-item">
                            <img src={item7} alt="item" />
                        </li>
                        <li className="logos-item">
                            <img src={item8} alt="item" />
                        </li>
                        <li className="logos-item">
                            <img src={item9} alt="item" />
                        </li>
                        <li className="logos-item">
                            <img src={item10} alt="item" />
                        </li>
                    </ul>
                </div> 

                <div className="price-container">
                    <div className="logos-item name">
                        <span>The Beast</span>
                    </div>
                    <div className="logos-item name">
                        <span>Jet Rat</span>
                    </div>
                    <div className="logos-item name">
                        <span>Mucki</span>
                    </div>
                    <div className="logos-item name">
                        <span>Ihle Copter</span>
                    </div>
                    <div className="logos-item name">
                        <span>Lucifer</span>
                    </div>
                    <div className="logos-item name">
                        <span>Jet Ape</span>
                    </div>
                    <div className="logos-item name">
                        <span>Burningman</span>
                    </div>
                    <div className="logos-item name">
                        <span>E57</span>
                    </div>
                    <div className="logos-item name">
                        <span>Boom Jet</span>
                    </div>
                    <div className="logos-item name">
                        <span>Boom Jet</span>
                    </div>
                    <div className="logos-item price">
                        <span>2499 €</span>
                    </div>
                    <div className="logos-item price">
                        <span>2199 €</span>
                    </div>
                    <div className="logos-item price">
                        <span>2099 €</span>
                    </div>
                    <div className="logos-item price">
                        <span>1999 €</span>
                    </div>
                    <div className="logos-item price">
                        <span>1999 €</span>
                    </div>
                    <div className="logos-item price">
                        <span>1899 €</span>
                    </div>
                    <div className="logos-item price end-price">
                        <span>Paket Preis: 1699 €</span>
                    </div>     
                </div>
                <p className="paket-p logos-price-p">
                    Alle Preise zzgl. MwSt.
                </p>
                <button className="paket-item-button">FAHRZEUG ANFRAGEN</button>
            </div>
        </div>
    )
}

export default PaketPreize;