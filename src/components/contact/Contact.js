import './contact.css';

import img from '../../img/input.png';

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-headling-2">
                <h2 className="contact-headling-2-content">Kontakt</h2>
            </div>
            <p className="contact-p">
                Du hast Bock bekommen die Show zu erleben? 
                Hier kannst du verschiedene Pakete wählen.
            </p>
            <div className="contact-container">
                <form>
                    <div className="input-section">
                        <div className="mail-section">
                            <input type="text" placeholder="E-Mail Adresse" className="input-text"/> <br/>
                            <input type="text" placeholder="Telefonnummer" className="input-text"/> <br/>
                            <select name="paket" className="select">
                                <option disabled>Paktet auswählen</option>
                                <option>Paket 1</option>
                                <option>Paket 2</option>
                                <option>Paket 3</option>
                            </select>
                        </div>
                        <div className="name-section">
                            <input type="text" placeholder="Vorname" className="input-text"/> <br/>
                            <input type="text" placeholder="Name" className="input-text"/> <br/>
                            <select name="transport" className="select">
                                <option disabled>Gefährt auswählen</option>
                                <option>Vechile</option>
                                <option>Plane</option>
                                <option>Train</option>
                            </select>
                        </div>
                    </div>
                    <textarea name="text" id="textarea" cols="30" rows="10"></textarea>
                    <div className="input-bottom-container">
                        <img src={img} alt="img" />
                        <input type="text" className="input-bottom"/>
                        <input type="submit" value="JETZT SENDEN" className="submit-bottom"/>
                    </div>

                </form>
               
            </div>
        </div>
    )
}

export default Contact;