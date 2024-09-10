import "./Rando.css"
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import MailList from '../../Components/MailList/MailList';
import Header from '../../Components/Header/Header';
import place from '../../Assets/place.png';

import Fermer from "../../Assets/fermer.png";
import Droite from "../../Assets/droite.png";
import Gauche from "../../Assets/gauche.png";
import useFetch from '../../Hooks/UseFetch.js';

import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Reservation from "../../Components/Reservation/Reservation";

const Rando = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[3]

  const { data, loading, error, reFetch } = useFetch(`/randos/find/${id}`);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)



  const handleOpen = (i) => 
  {
    setSlideNumber(i);
    setOpen(true)
  }

  const handleMove = (direction) => 
  {
    let newSlideNumber;
    if (direction === "l")
    {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else
    {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1

    }
    setSlideNumber(newSlideNumber)
  }

  const handleClick = () =>
  {
    if(user)
    {
      setOpenModal(true)
    }else{
      navigate("/login")
    }
    

  }
  return (
    <div>
      <NavBar/>
      <Header/>
     { loading ? "loading" : <div className="rondoContainer">
        {open && <div className="slider">
        <img src={Fermer} className="close" onClick={() => setOpen(false)} />
        <img src={Gauche} className="arrow" onClick={() => handleMove("l")}/>
        <div className="sliderWrapper">
          <img src={data.photos[slideNumber]} alt="" className="sliderImg" onClick={() => handleMove("r")}/>
        </div>
        <img src={Droite} className="arrow" />


        </div>}
        <div className="rondoWrapper">
          
          <h1 className="rondoTitle">{data.name}</h1>
          <h1 className="rondoTitle">{data.startDate}</h1>

          <div className="rondoAdress">
          <img src={place} className="headerIcon" />
          <span>{data.place}</span>
          </div>
          <span className="rondoDistance">
            {data.distance}
          </span>
          <div className="rondoImg">
          {data.photos?.map((photo, index) => (
          <div key={index} className="RandoImgWrapper">
            <img onClick={() => handleOpen(index)} src={photo} alt="" className="RandoImg" />
          </div>
        ))}
          </div>
          <div className="rondoDetails">
            <div className="rondoDetailsTexts">
              <h1 className="rondoTitle">{data.name}</h1>
              <p className="rondoDesc">
              {data.description}
              </p>
            </div>
            <div className="rondoDetailsPrice">
              <span>On le trouve dans un emplacement vraiment speciale</span>
              <h2>{data.price} TND</h2>
              <button onClick={handleClick}>Reserver Maintenant !</button>
            </div>
          </div>
          {openModal && <Reservation setOpen={setOpenModal} rondoId={id} userId={user._id} />}
        </div>
        <MailList/>
        <Footer/>
      </div>}
    </div>
  )
}

export default Rando
