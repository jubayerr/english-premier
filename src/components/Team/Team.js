import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    // console.log(props.team);
    const { strTeamBadge, strTeam, strLeague, idTeam } = props.team
    return (
        <div className="team">
            <img src={strTeamBadge} />
            <h2>{strTeam}</h2>
            <p>{strLeague}</p>
            <Link to={`team/${idTeam}`}><button >Explore<FontAwesomeIcon className="font-icon" icon={faArrowRight} /></button></Link>
        </div>
    );
};

export default Team;