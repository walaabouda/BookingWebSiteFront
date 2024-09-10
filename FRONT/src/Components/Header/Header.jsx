import React, { useContext, useState } from 'react';
import './Header.css';
import video from '../../Assets/vedio2.mp4'; // Adjust the path to your video file
import calendrier from '../../Assets/calendrier.png'
import groupe from '../../Assets/groupe.png'
import place from '../../Assets/place.png'
import { DateRange } from 'react-date-range';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Header = () => {

  const [activeItem, setActiveItem] = useState('Accueil');
  
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const [destination,setDestination] = useState("")
  const [openDate,setOpenDate] = useState(false)
  const [date , setDate] = useState([
    {
      startDate : new Date(),
      endDate : new Date(),
      key : 'selection'
    }
  ]);

  const [ openOptions, setOpenOptions] = useState(false);
  const [options,setOptions] = useState({Personne : 1})

  const navigate = useNavigate()
  const handleOption = (name,operation) =>
  {
    setOptions((prev) => {return{
      ...prev,[name] : operation === "i" ? options[name] + 1 : options[name] - 1, 
    }})
  }

  const HandleSearch = () =>
  {
    navigate("/Rondos", {state : {destination,date,options}})
  }


  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <li
            className={`headerListItem ${activeItem === 'Accueil' ? 'active' : ''}`}
            onClick={() => handleItemClick('Accueil')}
          >
            <a href="/" className="navLink">
              Accueil
            </a>
          </li>

          <li
            className={`headerListItem ${activeItem === 'A Propos' ? 'active' : ''}`}
            onClick={() => handleItemClick('A Propos')}
          >
            <a href="/Propos" className="navLink">
              A Propos
            </a>
          </li>

          <li
            className={`headerListItem ${activeItem === 'Aventures' ? 'active' : ''}`}
            onClick={() => handleItemClick('Aventures')}
          >
            <a href="/Aventures" className="navLink">
            Aventures
            </a>
          </li>
         

          
        </div>
        <h1 className="headerTitle"></h1>
        <div className="videoContainer">
          {activeItem === 'Accueil' && (
            <>
              <video src={video} muted autoPlay loop type="video/mp4"></video>
              <div className="videoText">
                <p>Marchez au rythme de la nature .... </p>
                <p>Découvrez l'aventure à chaque pas ....</p>
              </div>
            </>
          )}
        </div>
        <div className="headerSearch">
          <div className="headerSearchItem">
          <img src={place} className='headerIcon'/>
             <input type='text' placeholder='Choisisze votre destination' className='headerSearchInput' onChange={e => setDestination(e.target.value)}/>
          </div>

          {/*<div className="headerSearchItem">
          <img src={calendrier} className='headerIcon'/>
          <span onClick={() => setOpenDate(!openDate)} className='headerSearchText' >{`${format(date[0].startDate,"MM/dd/yyyy")}  -  ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
          {openDate && <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className='date'
          minDate={new Date()}
          />}
          </div>

          

          <div className="headerSearchItem">
          <img src={groupe} className='headerIcon'/>
          <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText' >{`${options.Personne} personne`}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">
                  Personne
                </span>
                <div className="optionCounter">
                <button disabled={options.Personne <=1} className="optionCounterButton" onClick={() => handleOption("Personne","d")}>-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionCounterButton" onClick={() => handleOption("Personne","i")}>+</button>
                </div>
              </div>
              </div> }       
          </div>*/}

          <div className="headerSearchItem">
          <button className="headerBtn" onClick={HandleSearch}>Chercher</button>
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default Header;
