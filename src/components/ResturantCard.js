
const styleCard = {
    backgroundColor: "#f0f0f0",
  };

const ResturantCard = (props) => {
    const { resData } = props;
  
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo
    } = resData?.info;
  
  
    return (
      <div className="rest-container">
        <div className="rest-cards" style={styleCard}>
          <img
            className="barbeque-logo"
            alt="berbeque-logo"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
          />
          <h3>{name}</h3>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{avgRating}</h5>
          <h5>{resData.info.sla.deliveryTime} minutes</h5>
          <h5>{costForTwo}</h5>
        </div>
      </div>
    );
  };

  export default ResturantCard;