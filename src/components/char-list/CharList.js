import './charList.css';

import ape from '../../img/charaqters/ape.png';
import beats from '../../img/charaqters/beats.png';
import boomjet from '../../img/charaqters/boom-jet.png';
import lucifer from '../../img/charaqters/lucifer.png';
import miniBurningman from '../../img/charaqters/mini_burningman.png';
import mini_e57 from '../../img/charaqters/mini_e57.png';
import mucki from '../../img/charaqters/mucki.png';
import rat from '../../img/charaqters/rat.png';
import scooter from '../../img/charaqters/scooter.png';
import toilet from '../../img/charaqters/toilet.png';

const CharList = () => {
    return (
        <div className="ch-wrapper">
            <div className="ch-headling-2">
                <h2 className="ch-headling-2-content">Die Fahrzeuge</h2>
            </div>
            <p className="ch-p"> 
                Du willst mehr über die Fahrzeuge wissen?
                Für Details einfach drauf klicken!
            </p>
            <div className="ch-container">
                <div className="item item-1">
                    <img src={beats} alt="beats" className="ch-img"/>
                    <span className="ch-span">The Beast</span>
                </div>
                <div className="item item-2">
                    <img src={lucifer} alt="lucifer" className="ch-img"/>
                    <span className="ch-span">The Beast</span>
                </div>
                <div className="item item-3">
                    <img src={ape} alt="ape" className="ch-img"/>
                    <span className="ch-span">The Beast</span>
                </div>
                <div className="item item-4">
                    <img src={mucki} alt="mucki" className="ch-img"/>
                    <span className="ch-span">The Beast</span>
                </div>
                <div className="item item-5">
                    <img src={rat} alt="rat" className="ch-img"/>
                    <span className="ch-span">The Beast</span>
                </div>
                <div className="item item-6">
                    <img src={scooter} alt="scooter" className="ch-img"/>
                    <span className="ch-span">The Beast</span>
                </div>
                <div className="item item-7">
                    <img src={miniBurningman} alt="miniBurningman" className="ch-img"/>
                    <span className="ch-span">The Beast</span>
                </div>
                <div className="item item-8">
                    <img src={mini_e57} alt="mini_e57" className="ch-img"/>
                    <span className="ch-span">The Beast</span>
                </div>
                <div className="item item-8">
                    <img src={boomjet} alt="boomjet" className="ch-img"/>
                    <span className="ch-span">The Beast</span>
                </div>
                <div className="item item-8">
                    <img src={toilet} alt="toilet" className="ch-img"/>
                    <span className="ch-span">The Beast</span>
                </div>
            </div>
        </div>
    )
}

export default CharList;