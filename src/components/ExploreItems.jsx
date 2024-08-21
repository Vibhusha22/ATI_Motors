import { FaHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import useStore from "../store/useStore";
import { useState, useCallback, useEffect } from "react";

function ExploreItems({ vehicle, isFavorite }) {
  const { addFavorite, removeFavorite, favorites } = useStore();
  const [favorite, setFavorite] = useState(isFavorite);

  useEffect(() => {
    setFavorite(isFavorite);
  }, [isFavorite]);

  const handleFavClick = useCallback(async () => {
    try {
      await addFavorite(vehicle.id);
      setFavorite(true);
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  }, [addFavorite, vehicle.id]);

  return (
    <div className="col">
      <div
        className="card shadow-sm each-container"
        style={{ backgroundColor: "#00A99D" }}
      >
        <img
          src={vehicle.image_url}
          className="bd-placeholder-img card-img-top"
          alt={vehicle.title}
          width="100%"
          height="310"
          role="img"
          aria-label={vehicle.title}
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />
        <div className="card-body">
          <h5 className="card-title contain" style={{ fontWeight: "bolder" }}>
            {vehicle.title}
          </h5>
          <div className="description-scroll">
            <p
              className="card-text contain"
              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              {vehicle.description}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "12px",
            }}
          >
            <div></div>
            {favorite ? (
              <div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <div style={{ color: "black", fontSize: "15px" }}>Added</div>
                </button>
              </div>
            ) : (
              <div onClick={handleFavClick}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <FaHeart style={{ color: "black" }} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreItems;
