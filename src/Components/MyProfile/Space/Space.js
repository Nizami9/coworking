import { Link, useParams } from 'react-router-dom';
import DateSelect from '../../CalendarPage/DateSelect';
import Navbar from "../../Navbar/index";
import Footer from "../../Footer/Footer";
import calendar from "./ImagesSpace/calendar.png";
import schedule from "./ImagesSpace/schedule.png";
import SpaceData from "../../../spaceData.json";
import "./Space.css";
import { useSpaceContext } from '../../../context/SpaceContext';


const Space = () => {

     const{ allSpaces,setSelectedSpace,selectedSpace} = useSpaceContext();
     
     const { id } =useParams();
    
      

     const space = allSpaces.filter(singleSpace => singleSpace.id === id);
     setSelectedSpace(space[0]);
     console.log("space is",space);
     console.log("selectedSpace  ---",selectedSpace);


     {
        return( selectedSpace &&
        <div>  

  {/* {SpaceData && SpaceData
    .filter(space => id ? id === space.id : space)
  .map(space => { */}

  <div className='containerSpace'>
            <div className='leftImageSpace'>
                <img src={selectedSpace.imgUrl} alt='office-picture'></img>
            </div>
        <div className='spaceReservations'>
                <h1>{selectedSpace.title}</h1>
                <span className='info'>Available 57 desks</span>
            <p className='spacePrice'>{selectedSpace.costperDay} / day</p>
            <p className='reserveOnlineP'>Reserve online</p>
            <Link className='reserveSpaceButton' to={`/space/${id}/select-date`}><p>Reserve space</p></Link>
            <div className='hrOr'>
            <hr />
            <p>or</p>
            <hr />
            </div>
            <p>Visit this space in person following our new safety measures.</p>
            <button className='bookTourButton'><p>Book a Tour</p></button>
        </div>
        <div className='spaceImages'>
            <div className='openingHours'>
                <h3>Opening hours:</h3>
                <div className='dataInfo1'>
                    <img src={calendar}></img>
                    <p>{selectedSpace.openDays}</p>
                </div>
                <div className='dataInfo2'>
                    <img src={schedule}></img>
                    <p>{selectedSpace.openHours}</p>
                </div>
            </div>

        <div className='openingHours'>
                <h3>Description:</h3>
                <div className='descriptionText'>
                    <p>
                    {selectedSpace.description}
                    </p>
                    </div>
                </div>
            </div>
        </div>


             {/* }
        )
     } */}
    </div>
    )   }
}

 export default Space;
