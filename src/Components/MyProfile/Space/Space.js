import { Link, useParams } from 'react-router-dom';
import calendar from "./ImagesSpace/calendar.png";
import schedule from "./ImagesSpace/schedule.png";
import SpaceData from "../../../spaceData.json";
import "./Space.css";
import { useSpaceContext } from '../../../context/SpaceContext';

const Space = () => {

     const { id } =useParams();
     const{ allSpaces } = useSpaceContext();

     const spaces = allSpaces.filter(space => space.id === id);
   
    return (
        <div>
    {SpaceData && SpaceData
    .filter(space => id ? id === space.id : space)
    .map(space => {
  return (
    <div className='containerSpace'>
            <div className='leftImageSpace'>
                <img src={space.imgUrl}></img>
            </div>
        <div className='spaceReservations'>
                <h1>{space.title}</h1>
                <span className='info'>Available 57 desks</span>
            <p className='spacePrice'>{space.costperDay} / day</p>
            <p className='reserveOnlineP'>Reserve online</p>
            <Link className='reserveSpaceButton' to='/select-date'><p>Reserve space</p></Link>
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
                    <p>{space.openDays}</p>
                </div>
                <div className='dataInfo2'>
                    <img src={schedule}></img>
                    <p>{space.openHours}</p>
                </div>
            </div>

        <div className='openingHours'>
                <h3>Description:</h3>
                <div className='descriptionText'>
                    <p>
                    {space.description}
                    </p>
                    </div>
                </div>
            </div>
        </div>
                )
            }
        )
    }
    </div>
    )
}

export default Space;
