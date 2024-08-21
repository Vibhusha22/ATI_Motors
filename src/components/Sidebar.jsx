import { Link } from "react-router-dom";
import { FaCartFlatbed } from "react-icons/fa6";
function Sidebar() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark bar"
        style={{ width: "220px", height: "100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="20" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <FaCartFlatbed style={{ fontSize: "2.5vw", margin: "10px" }} />

          <span className="fs-4">MOTORS</span>
        </a>
        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <div className="text-end">
            <li className="nav-item">
              <Link
                to="/"
                className=" btn btn-outline-light me-5 custom-width"
                aria-current="page"
              >
                <svg className="bi pe-none me-2" width="1" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/Favourites"
                className="btn btn-outline-light me-5 custom-width"
              >
                <svg className="bi pe-none me-2" width="1" height="16">
                  <use xlinkHref="#speedometer2" />
                </svg>
                Favourites
              </Link>
            </li>
          </div>
        </ul>

        <hr />
      </div>
    </>
  );
}
export default Sidebar;
