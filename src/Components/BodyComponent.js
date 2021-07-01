import TeamStats from './TeamStats';
import {useState} from 'react'
import KeyPlayerLogo from './KeyPlayerLogo'
import  '../App.css';

function BodyComponent(){
    const [currentTeam, setCurrentTeam] = useState('');
    const [showDropdown, setShowDropdown] = useState('true')
    function selectedTeam(event) {
        setCurrentTeam(event.target.value) ;
      }
      function showComponent(val){
          console.log("this is" + val);
          setShowDropdown(val);
      }
      let player;
       
      if(currentTeam==''){
    return  <div className="Welcome">
    <h1> Welcome to our IPL Dashboard </h1>
        <h2> Select Team from here</h2>
    
    <select className="dropdown" onChange={selectedTeam}>
    <optgroup  className="options">
    <option value="none" selected hidden>select a team</option>
    <option value="Rajasthan Royals">Rajasthan Royals </option>
    <option value="Royal Challengers Bangalore">RCB</option>
    <option value="Delhi DareDevils">Delhi DareDevils</option>
    <option value="Mumbai Indians">Mumbai Indians </option>
    <option value="Chennai Super Kings">CSK </option>
    <option value="	Kolkata Knight Riders"> KKR  </option>
    <option value="Deccan Chargers"> Deccan Chargers </option>
    <option value="Kings XI Punjab"> KXI Punjab </option>
    <option value="Sunrisers Hyderabad"> Sunrisers HYB </option>
    <option value="Pune Warriors"> Pune Warriors </option>
    </optgroup>
    </select>
    </div>
      }
      if(currentTeam=='Chennai Super Kings'){
          player = "msd";
        return  <div className="player">
        <TeamStats  team = {currentTeam}></TeamStats>
        <KeyPlayerLogo player = {player}></KeyPlayerLogo>   
        
    </div>
   }
    else {
        return <>
        <TeamStats team = {currentTeam}  ></TeamStats>
        
        </>

    }
      

}
export default BodyComponent;