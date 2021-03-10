import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([])
    // console.log(teams);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="home container">
            {
                teams.map(team => <Team key={team.idTeam} team={team}></Team>)
            }

        </div>
    );
};

export default Home;