import React, { Component } from 'react';
import { Howl, Howler } from 'howler';

import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);

        this.myCard = React.createRef();

        this.state = {
            song: this.props.song,
            image: this.props.image,
            track: null,
            cl: true,
            myCardStyle: {backgroundImage: "url(/img/" + this.props.image + ".jpeg"},
            playStyle: {visibility: 'hidden', backgroundImage: "url(/img/icon_play.png)"},
            plusStyle: {visibility: 'hidden', backgroundImage: "url(/img/icon_plus.png)"},
            dotsStyle: {visibility: 'hidden', backgroundImage: "url(/img/icon_dots.png)"},
            myCardClass: "my-card",
            childrenStyle: {visibility: 'hidden'},
            menuStyle: {visibility: 'hidden'},
            menu: false
        }
    }

    componentDidMount() {
        var trackPath = "./music/" + this.state.song + ".mp3";
        this.setState({
            track: new Howl({
                src: [trackPath],
                onend: function() {
                    console.log("Finished");
                    this.setState({
                        playStyle: {backgroundImage: "url(/img/icon_play.png)"}
                    })
                    // change button attr
                }
            })
        })
    }

    playMusic = () => {
        if(this.state.cl === true) {
            this.setState({
                cl: false,
                playStyle: {visibility: 'visible', backgroundImage: "url(/img/icon_pause.png)"}
            })
            this.state.track.play();
        } else {
            this.setState({
                cl: true,
                playStyle: {visibility: 'visible', backgroundImage: "url(/img/icon_play.png)"}
            })
            this.state.track.pause();
        }
    }

    cardOnEnter = () => {
        this.setState({
            myCardClass: "my-card dark",
            playStyle: {visibility: 'visible', backgroundImage: this.state.cl === true ? "url(/img/icon_play.png)" : "url(/img/icon_pause.png)"},
            plusStyle: {visibility: 'visible', backgroundImage: "url(/img/icon_plus.png)"},
            dotsStyle: {visibility: 'visible', backgroundImage: "url(/img/icon_dots.png)"},
            childrenStyle: {visibility: 'visible'},
            menuStyle: {visibility: 'hidden'}
        })
    }

    cardOnLeave = () => {
        this.setState({
            myCardClass: "my-card",
            playStyle: {visibility: 'hidden', backgroundImage: this.state.cl === true ? "url(/img/icon_play.png)" : "url(/img/icon_pause.png)"},
            plusStyle: {visibility: 'hidden', backgroundImage: "url(/img/icon_plus.png)"},
            dotsStyle: {visibility: 'hidden', backgroundImage: "url(/img/icon_dots.png)"},
            childrenStyle: {visibility: 'hidden'},
            menuStyle: {visibility: 'hidden'},
            menu: false
        })
    }

    menuOnClick = () => {
        if(this.state.menu === true) {
            this.setState({
                menu: false,
                menuStyle: {visibility: 'hidden'}
            })
        } else {
            this.setState({
                menu: true,
                menuStyle: {visibility: 'visible'}
            })
        }
    }

    render() {
        return (
        <div id="1" class="card-container">
            <div onMouseEnter={this.cardOnEnter} onMouseLeave={this.cardOnLeave} style={this.state.myCardStyle} ref={this.myCard} id="1" song="spotify" class={this.state.myCardClass}>
                <p style={this.state.childrenStyle} class="name">Song name</p>
                <p style={this.state.childrenStyle} class="artist">Song artist</p>
                <a style={this.state.plusStyle} class="buttonCard plusCard"></a>
                <a onClick={this.playMusic} style={this.state.playStyle} class="buttonCard playCard"></a>
                <a onClick={this.menuOnClick} style={this.state.dotsStyle} id="toggle" class="buttonCard dotsCard"></a>
                <div style={this.state.menuStyle} id="menu">
                    <ul>
                        <li><a href="#add">Add</a></li>
                        <li><a href="#edit">Edit</a></li>
                        <li><a href="#delete">Delete</a></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Card;