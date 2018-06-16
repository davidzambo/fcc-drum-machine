import React from 'react';

export class Sample extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            audio: '',
            isPressed: false
        }
        this.onClick = this.onClick.bind(this);
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

    onClick(){
        this.state.audio.play();
        this.setState({isPressed: true})
        setTimeout(() => this.setState({isPressed: false}), 100);
    }

    render(){
        return(
            <div className="sample" onClick={this.onClick}>
                <h3>{this.props.title}</h3>
                <h4>({this.props.trigger})</h4>
            </div>
        );
    }
}