import Navbar from '../../Components/NavBar/NavBar.jsx';
import Header from '../../Components/Header/Header.jsx';

import "./List.css";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../Components/SearchItem/SearchItem.jsx';
import useFetch from '../../Hooks/UseFetch.js';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  // Move useFetch here after initializing destination
  const { data, loading, error, reFetch } = useFetch(`/randos?place=${destination}`);

  const handleClick = () =>
  {
    reFetch()
  }
  return (
    <div>
      <Navbar />
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="ListSearch">
            <h1 className='lsTitle'>Chercher</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type='text' placeholder={destination}></input>
            </div>

            <div className="lsItem">
              <label>Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")}  -  ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
             { openDate &&<DateRange
              onChange={item => setDate([item.selection])} 
              minDate={new Date()}
              ranges={date}
              />}
            </div>
            <div className="lsItem">
            <div className='lsOptions'>
              <div className="lsOptionItem">
                <span className="lsOptionText">Personne</span><br/>
                <input type='number' min={1}  className='lsOptionInput' placeholder={options.Personne}/>
              </div>
              </div>
            </div>
            <button onClick={handleClick}>Chercher</button>
            </div>
          <div className="listResult">
            {loading ? "Loading" : <>
              {data.map(item => (
                <SearchItem item={item} key={item._id} />
              ))}
            </>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List
