import AppHeader from '../app-header/AppHeader';
import MainSection from '../main-section/MainSection';
import StartSection from '../start-section/StartSection';
import Footer from '../footer/Footer';

import './app.css';

const App = () => {
    return (
        <>
            <AppHeader/>
            <main className="main">
                <StartSection/>
                <MainSection/>
            </main>
            <Footer/>

        </>  
    )
}

export default App;