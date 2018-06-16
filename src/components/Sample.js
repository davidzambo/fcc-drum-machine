import React from 'react';

export class Sample extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            audio: '',
            isPressed: false
        }
    }

    componentWillMount(){
        this.setState({
            audio: new Audio(this.props.audio)
        })
    }

    componentDidMount(){
        const { audio } = this.state;
        document.addEventListener('keypress', (e) => {
            if (e.key === this.props.trigger) {
                if (audio.paused ){
                    audio.play();
                } else {
                    audio.currentTime = 0;
                }
                this.setState({isPressed: true})
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key === this.props.trigger) {
                this.setState({isPressed: false});
            }
        })
    }


    render(){
        return(
            <div className="sample" onClick={() => this.state.audio.play()}>
                Ez itt egy {this.props.title} { this.state.isPressed ? 'pressed' : 'not'}
            </div>
        );
    }
}