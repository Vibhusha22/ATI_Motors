function Footer() {
  return (
    <>
      <footer
        className="d-flex flex-wrap justify-content-between align-items-center py-4 my-6 border-top"
        style={{
          background: "linear-gradient(45deg, #000000, #333333, #000000)",
          height: "117px",
        }}
      >
        <p className="col-md-4 mb-0 " style={{ color: "grey" }}>
          © 2024 Company, Inc
        </p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 " style={{ color: "grey" }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 " style={{ color: "grey" }}>
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 " style={{ color: "grey" }}>
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 " style={{ color: "grey" }}>
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 " style={{ color: "grey" }}>
              About
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
export default Footer;
