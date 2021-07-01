import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
function TeamStats(props){
    let imgUrl = 'csk.png';
    const[wons, setWons] = useState()
    const[showStats, setShowStats] = useState(true)
    useEffect(()=>{
        getStats();
    })
    function showOrHide(){
        {props.hideComponents('false')};
    }
    async function getStats(){
       const result = await axios.get(`http://localhost:8080/team?team=${props.team}`)
    
      setWons(result.data.matchWon);
    }
    async function getPostStats(){
        let payload = { name : "Manjari", job : "Cyber security"};
        await axios.post("http://localhost:8080/post/team",{str : "Sharad"})
        console.log("error");
     }
    
        
        return  <div className= 'ScoreBoard' >    
        <h4> Below are the Statiscs of team : {props.team} </h4>
        <h3>Match wons = {wons}</h3>
        <button > Back</button>
        <button onClick={getPostStats}> Back to post </button>
        <div className="card">
       <div className="card-body">
    <p className="card-text"> Score Card for team {props.team}</p>
        </div>
        </div>
        </div>   
        
    
}
export default TeamStats