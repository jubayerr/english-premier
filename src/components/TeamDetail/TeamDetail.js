import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import male from '../../images/male.png'
import female from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFlagCheckered, faFutbol, faUser } from '@fortawesome/free-solid-svg-icons'

const TeamDetail = () => {
    const { teamId } = useParams()
    const [teamDetails, setTeamDetails] = useState([])
    const { strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN } = teamDetails
    // console.log(teamDetails);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [teamId])
    let ShowImage = male
    if (strGender === 'Male') {
        ShowImage = male
    }
    else {
        ShowImage = female
    }
    return (
        <div className="team-details container" >
            <div className="team-card row">
                <div className="team-info col-md-6">
                    <h2>{strTeam}</h2>
                    <p><FontAwesomeIcon className="font-team" icon={faHome} />Founded: {intFormedYear}</p>
                    <p><FontAwesomeIcon className="font-team" icon={faFlagCheckered} />Country: {strCountry}</p>
                    <p><FontAwesomeIcon className="font-team" icon={faFutbol} />Sport type: {strSport}</p>
                    <p><FontAwesomeIcon className="font-team" icon={faUser} />Gender: {strGender}</p>
                </div>
                <div className="team-banner col-md-6">
                    {
                        <img src={ShowImage} />
                    }
                </div>
            </div>

            <div className="team-description">
                <p><strong>Club Description :</strong></p>
                <p>{strDescriptionEN}</p>
            </div>
        </div>

    );
};

export default TeamDetail;