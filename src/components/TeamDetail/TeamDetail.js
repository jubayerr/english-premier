import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import male from '../../images/male.png'
import female from '../../images/female.png'
import twitterIcon from '../../images/Twitter.png'
import youtubeIcon from '../../images/YouTube.png'
import facebookIcon from '../../images/Facebook.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFlagCheckered, faFutbol, faUser } from '@fortawesome/free-solid-svg-icons'

const TeamDetail = () => {
    const { teamId } = useParams()
    const [teamDetails, setTeamDetails] = useState([])
    const { strTeam, intFormedYear, strCountry, strSport, strGender, strTeamBadge, strTeamBanner, strDescriptionEN, strTwitter, strWebsite, strYoutube } = teamDetails
    // console.log(teamDetails);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [])
    let ShowImage
    if (strGender === 'Male') {
        ShowImage = male
    }
    else {
        ShowImage = female
    }
    return (
        <div className="team-details container" >
            <div className="team-logo row">
                <div className="col">
                    {
                        <img src={strTeamBadge} alt="" />
                    }
                </div>
            </div>
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
                <img className="team-desc-img" src={strTeamBanner} />
                <p><strong>Club Description :</strong></p>
                <p>{strDescriptionEN}</p>
                <div className="icon-list">
                    <span><a href={'https://' + strTwitter}><img src={twitterIcon} /></a></span>
                    <span><a href={'https://' + strYoutube}><img src={youtubeIcon} /></a></span>
                    <span><a href={'https://' + strWebsite}><img src={facebookIcon} /></a></span>
                </div>
            </div>
        </div>

    );
};

export default TeamDetail;