import { Link, useParams } from 'react-router-dom';
import calendar from "./ImagesSpace/calendar.png";
import schedule from "./ImagesSpace/schedule.png";
import SpaceData from "../../../spaceData.json";
import "./Space.css";
import { useSpaceContext } from '../../../context/SpaceContext';
import ScrollToTopOnMount from '../../../ScrollToTopOnMount';

const Space = () => {
    const { allSpaces, setSelectedSpace, selectedSpace } = useSpaceContext();
    const { id } = useParams();
    const space = allSpaces.filter(singleSpace => singleSpace.spaceid == id);
    setSelectedSpace(space[0]);
    console.log("space is", allSpaces, space,id );
    // console.log("selectedSpace  ---",selectedSpace);
    {
        return (selectedSpace &&
            <div>
                <ScrollToTopOnMount />
                <div className='containerSpace'>
                    <div className='leftImageSpace'>
                        <img src={selectedSpace.imgurl} alt='office-picture'></img>
                    </div>
                    <div className='spaceReservations'>
                        <h1>{selectedSpace.title}</h1>
                        <span className='info'>Available 57 desks</span>
                        <p className='spacePrice'>{selectedSpace.costperday + '€'} / day</p>
                        <p className='reserveOnlineP'>Reserve online</p>
                        <Link className='reserveSpaceButton' to={`/space/${id}/select-date`}><p>Reserve space</p></Link>
                        <div className='hrOr'>
                            <hr />
                            <p>or</p>
                            <hr />
                        </div>
                        <p>Visit this space in person following our new safety measures.</p>
                        <Link className='bookTourButton' to={`/space/${id}/book-tour`}><p>Book a Tour</p></Link>
                    </div>
                    <div className='spaceImages'>
                        <div className='openingHours'>
                            <h3>Opening hours:</h3>
                            <div className='dataInfo1'>
                                <img src={calendar}></img>
                                <p>{selectedSpace.opendays_from}{" - "}{selectedSpace.opendays_to}</p>
                            </div>
                            <div className='dataInfo2'>
                                <img src={schedule}></img>
                                <p>{selectedSpace.openhours_from}{" - "}{selectedSpace.openhours_to}</p>
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
        )
    }
}

export default Space;
