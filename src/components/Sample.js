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
            if (e.key === this.props.trigger || e.key === this.props.trigger.toUpperCase()) {
                if (audio.paused ){
                    audio.play();
                } else {
                    audio.currentTime = 0;
                }
                this.setState({isPressed: true})
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key === this.props.trigger  || e.key === this.props.trigger.toUpperCase()) {
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
        const style = {
            backgroundColor: this.state.isPressed ? 'rgba(238,238,238,0.8)' : '#eee'
    }

        return(
            <div className="drum-pad" style={style}  onClick={this.onClick} id={this.props.trigger}>
                <h4>{this.props.title}</h4>
                <p>({this.props.trigger.toUpperCase()})</p>
                <img src={this.props.image} alt={this.props.title} />
                <audio controls className="clip">
                    <source src={this.props.audio} type="audio/wav"/>
                </audio>
            </div>
        );
    }
}