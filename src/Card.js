import React, { Component } from 'react';
import './Card.css';

class NewCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            song: this.props.song,
            hover: false,
            heart: false,
            play: true,
            menu: false
        }
    }

    onMouseEnter = () => this.setState({ hover: true })
    onMouseLeave = () => this.setState({ hover: false })
    onHeartClick = () => this.setState({ heart: !this.state.heart })
    onPlayClick = () => this.setState({ play: !this.state.play })
    onMenuClick = () => this.setState({ menu: !this.state.menu })

    render() {
        return (
            <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="card-container" style={{ backgroundImage: `url(/img/${this.state.image}.jpeg)` }}>
                {
                    this.state.hover &&
                    <div className="card-content">
                        <p className="card-song-name">{this.props.songName}</p>
                        <p className="card-song-artist">{this.props.songArtist}</p>
                        <a onClick={this.onHeartClick} className="card-button card-heart-button" style={{backgroundImage: `url(/img/${this.state.heart ? 'heart-solid.svg' : 'heart-regular.svg'})`}}></a>
                        <a onClick={this.onPlayClick} className="card-button card-play-button" style={{backgroundImage: `url(/img/${this.state.play ? 'icon_play.png' : 'icon_pause.png'})`}}></a>
                        <div className="dropdown">
                            <a onClick={this.onMenuClick} id="toggle" className="card-button card-dots-button" style={{backgroundImage: `url(/img/icon_dots.png)`}}></a>
                            <div className="dropdown-content">
                                <ul>
                                    <li><a>Add</a></li>
                                    <li><a>Edit</a></li>
                                    <li><a>Delete</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default NewCard;