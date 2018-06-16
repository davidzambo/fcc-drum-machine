import React, {Component} from 'react';
import './styles/css/styles.css';
import {Sample} from "./components/Sample";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>freeCodeCamp Drum Machine</h1>
                </header>
                <main className="drum-machine">
                    <Sample audio="/audio/tom-left.wav" image="/" title="Tom 01" trigger="q"/>
                    <Sample audio="/audio/tom-right.wav" image="/" title="Tom 02" trigger="w"/>
                    <Sample audio="/audio/tom-stand.wav" image="/" title="Tom 03" trigger="e"/>
                    <Sample audio="/audio/closed-hihat.wav" image="/" title="Closed Hi-hat" trigger="a"/>
                    <Sample audio="/audio/snare.wav" image="/" title="snare" trigger="s"/>
                    <Sample audio="/audio/crash.wav" image="/" title="Crash Cymbals" trigger="d"/>
                    <Sample audio="/audio/half-hihat.wav" image="/" title="Half-closed Hi-hat" trigger="y"/>
                    <Sample audio="/audio/kick.wav" image="/" title="Kick" trigger="x"/>
                    <Sample audio="/audio/snare-rim.wav" image="/" title="Snare Rim" trigger="c"/>
                </main>
                <footer>
                    <a href="https://www.dcmf.hu" target="_blank">
                        <span>codedBy</span>
                        <img src="https://www.dcmf.hu/images/dcmf-letters.png" alt="dcmf-logo" />
                    </a>
                </footer>
            </div>
        );
    }
}

export default App;
