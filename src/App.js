import React, {Component} from 'react';
import './styles/css/styles.css';
import BackGround from "./images/background.jpg";
import {Sample} from "./components/Sample";

class App extends Component {
    render() {
        const style = {
            backgroundImage: `url("${BackGround}")`,
        };

        return (
            <div className="App" id="display" style={style}>
                <header>
                    <h1>freeCodeCamp Drum Machine</h1>
                </header>
                <main className="drum-machine">
                    <Sample audio="audio/tom-left.wav" image="images/left-tom.png" title="Tom 01" trigger="q"/>
                    <Sample audio="audio/tom-right.wav" image="images/right-tom.png" title="Tom 02" trigger="w"/>
                    <Sample audio="audio/tom-stand.wav" image="images/stand-tom.png" title="Tom 03" trigger="e"/>
                    <Sample audio="audio/closed-hihat.wav" image="images/closed-hihat.png" title="Closed Hi-hat" trigger="a"/>
                    <Sample audio="audio/snare.wav" image="images/snare.png" title="Snare" trigger="s"/>
                    <Sample audio="audio/crash.wav" image="images/crash.png" title="Crash Cymbals" trigger="d"/>
                    <Sample audio="audio/half-hihat.wav" image="images/half-hihat.png" title="Opened Hi-hat" trigger="z"/>
                    <Sample audio="audio/kick.wav" image="images/kick.png" title="Kick" trigger="x"/>
                    <Sample audio="audio/snare-rim.wav" image="images/snare-rim.png" title="Snare Rim" trigger="c"/>
                </main>
                <footer>
                    <a href="https://www.dcmf.hu" target="_blank" rel="noopener noreferrer">
                        <span>codedBy</span>
                        <img src="https://www.dcmf.hu/images/dcmf-letters.png" alt="dcmf-logo" />
                    </a>
                </footer>
            </div>
        );
    }
}

export default App;
