import React, { useState, useEffect } from 'react';
import './Card.css';

import playSolid from './img/play-solid.svg';
import pauseSolid from './img/pause-solid.svg';
import dotsSolid from './img/ellipsis-solid.svg';
import heartRegular from './img/heart-regular.svg';
import heartSolid from './img/heart-solid.svg';

function Card(props) {
    const [hover, setHover] = useState(false);
    const [heart, setHeart] = useState(false);
    const [play, setPlay] = useState(true);
    const [menu, setMenu] = useState(false);

    function onMouseEnter() { setHover(true) }
    function onMouseLeave() { setHover(false) }
    function onHeartClick() { setHeart(!heart) }
    function onPlayClick() { setPlay(!play) }
    function onMenuClick() { setMenu(!menu) }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="card-container" style={{ backgroundImage: `url(/img/${props.image})` }}>
            {
                hover &&
                <div className="card-content">
                    <p className="card-song-name">{props.songName}</p>
                    <p className="card-song-artist">{props.songArtist}</p>
                    <a onClick={onHeartClick} className="card-button card-heart-button" style={{backgroundImage: `url(${heart ? heartSolid : heartRegular})`}}></a>
                    <a onClick={onPlayClick} className="card-button card-play-button" style={{backgroundImage: `url(${play ? playSolid : pauseSolid})`}}></a>
                    <div className="dropdown">
                        <a onClick={onMenuClick} id="toggle" className="card-button card-dots-button" style={{backgroundImage: `url(${dotsSolid})`}}></a>
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
    );
}

export default Card;