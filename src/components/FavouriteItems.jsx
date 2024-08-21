import { MdDeleteForever } from "react-icons/md";

function FavouriteItems({ favourite, onRemoveFavorite }) {
  const handleDeleteClick = async () => {
    await onRemoveFavorite(favourite.id);
  };

  return (
    <div className="col">
      <div
        className="card shadow-sm each-container"
        style={{ backgroundColor: "#00A99D" }}
      >
        <img
          src={favourite.image_url}
          className="bd-placeholder-img card-img-top"
          alt={favourite.title}
          width="100%"
          height="310"
          role="img"
          aria-label={favourite.title}
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />
        <div className="card-body">
          <h5 className="card-title contain" style={{ fontWeight: "bolder" }}>
            {favourite.title}
          </h5>
          <div className="description-scroll">
            <p className="card-text contain" style={{ fontWeight: "bold" }}>
              {favourite.description}
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
            <div onClick={handleDeleteClick}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <MdDeleteForever style={{ color: "black", fontSize: "20px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavouriteItems;
