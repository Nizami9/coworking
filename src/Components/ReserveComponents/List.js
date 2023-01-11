import Space from "../../spaceData.json";
import { Link,useParams } from "react-router-dom";
import { useSpaceContext } from '../../context/SpaceContext';
import "./link.css";


const List = () => {

   const {serachKey} = useParams();

   const {allSpaces } = useSpaceContext();

  console.log("space from space context ",allSpaces)

  return (
    <div className="locations">
     <div className="view-list"> <h6>viewing germany space locations</h6></div>
      {Space &&
        Space.map((space) => {
          return (
            <div className="card" key={space.id}>
                {" "}
                <img src={space.imgUrl} alt="img" className="img" />
              <div className="list-wrapper">
                <div className="title">
                  {space.title}
                  <div className="address-city-country">
                    <div className="address"> {space.address}</div>
                    <div className="city"> {space.city} </div>
                    <div className="country"> {space.counrty} </div>
                    <div><Link className="spacesLink" to='/space/:id'>Explore space →</Link></div>
                    <div className="area-maxPeople-costperDay">
                    <div className="area"> {space.area}</div>
                    <div className="maxpeople"> {space.maxPeople} </div>
                    <div className="costperDay"> {space.costperDay}</div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default List;
