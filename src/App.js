import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Sample} from "./components/Sample";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Sample audio="/audio/tom-left.wav" image="/" title="Tom 01" trigger="q"/>
                <Sample audio="/audio/tom-right.wav" image="/" title="Tom 02" trigger="w"/>
                <Sample audio="/audio/tom-stand.wav" image="/" title="Tom 03" trigger="e"/>
                <Sample audio="/audio/closed-hihat.wav" image="/" title="Closed Hi-hat" trigger="a"/>
                <Sample audio="/audio/snare.wav" image="/" title="snare" trigger="s"/>
                <Sample audio="/audio/crash.wav" image="/" title="Crash Cymbals" trigger="d"/>
                <Sample audio="/audio/half-hihat.wav" image="/" title="Half-closed Hi-hat" trigger="y"/>
                <Sample audio="/audio/kick.wav" image="/" title="Kick" trigger="x"/>
                <Sample audio="/audio/snare-rim.wav" image="/" title="Snare Rim" trigger="c"/>

            </div>
        );
    }
}

export default App;
