import { useEffect } from "react";
import ExploreItems from "../components/ExploreItems";
import useStore from "../store/useStore";

function Explore() {
  const { vehicles, favorites, status, error, fetchVehicles, fetchFavorites } =
    useStore();

  useEffect(() => {
    fetchVehicles();
    fetchFavorites();
  }, [fetchVehicles, fetchFavorites]);

  const combinedVehicles = vehicles.map((vehicle) => ({
    ...vehicle,
    isFavorite: favorites.some((fav) => fav.vehicleId === vehicle.id),
  }));

  let content;

  if (status === "loading") {
    content = (
      <div className="scrollable-container">
        <p
          style={{
            margin: "300px",
            marginLeft: "300px",
          }}
        >
          <div class="spinner-border" role="status" style={{ color: "white" }}>
            <span class="sr-only"></span>
          </div>
        </p>
      </div>
    );
  } else if (status === "succeeded") {
    content = (
      <div className="scrollable-container">
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {combinedVehicles.map((vehicle) => (
                <ExploreItems
                  key={vehicle.id}
                  vehicle={vehicle}
                  isFavorite={vehicle.isFavorite}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return <>{content}</>;
}

export default Explore;
