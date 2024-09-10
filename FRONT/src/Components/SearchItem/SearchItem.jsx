import './SearchItem.css'

import Bouhertma from "../../Assets/Bouhertma.jpg"
import BniMtir from "../../Assets/BniMtir.jpg"
import JbelRssas from "../../Assets/JbelRssas.jpg"
import OuedZitoun from "../../Assets/OuedZitoun.jpg"
import { Link } from 'react-router-dom'

function SearchItem({item}) {
  
  return (
    <div className='SearchItem'>
        <img src={item.photos[0]} alt="" className="isImg" />
      <div className="isDesc">
      <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siSubtitle">
          {item.description}
        </span>
      </div>
      <div className="isDetails"> 
      <div className="isDetailTexts">
        <span className="isPrice">
            {item.price} TND
        </span>
        </div>
        <Link to={`/randos/feature/${item._id}`}>
        <button className='isCheckButton'>Savoir La Disponibilitée </button>
        </Link>
      </div>
    </div>
    
  )
}

export default SearchItem
