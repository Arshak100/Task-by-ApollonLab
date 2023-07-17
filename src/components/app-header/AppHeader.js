import './appHeader.css';
import headerImg from '../../img/HeaderImg.png';

const AppHeader = () => {

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-menu">
                    <li className="nav-item"><a href="/" className="nav-link">Start</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Die Show</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Die Fahrzeuge</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Besucher</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Preise</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Kontakt</a></li>
                </ul>
            </nav>
            <div className="header-left-image">
                <img src={headerImg} alt="headerImg" />
            </div>
        </header>
    )
    
}

export default AppHeader;