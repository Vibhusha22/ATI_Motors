import { useEffect } from "react";
import FavouriteItems from "../components/FavouriteItems";
import EmptyFavourites from "../components/EmptyFavourites";
import useStore from "../store/useStore";

function Favourites() {
  const { favorites, status, error, fetchFavorites, removeFavorite } =
    useStore();

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

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
              {favorites.length ? (
                favorites.map((favorite) => (
                  <FavouriteItems
                    key={favorite.id}
                    favourite={favorite}
                    onRemoveFavorite={removeFavorite}
                  />
                ))
              ) : (
                <EmptyFavourites />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (status === "failed") {
    content = <p style={{ margin: "200px" }}>{error}</p>;
  }

  return <>{content}</>;
}

export default Favourites;
