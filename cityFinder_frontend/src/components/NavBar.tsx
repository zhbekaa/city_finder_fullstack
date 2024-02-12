import { FormEvent, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation, useNavigate } from "react-router-dom";
interface NavBarProps {
  navItems: string[];
}

const NavBar = ({ navItems }: NavBarProps) => {
  const [searchItem, setSearchItem] = useState<string>("");
  const [disp, setDisp] = useState<string>("none");
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/?q=${searchItem}`);
  }

  return (
    <nav className="navbar navbar-expand-md navbar--fixed-top  shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img style={{ maxWidth: "200px" }} src="/city_logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            disp == "none" ? setDisp("flex") : setDisp("none");
            console.log(disp);
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse nav-items"
          id="navbarSupportedContent"
          style={{ display: disp }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((item) => (
              <li key={item} className="nav-item">
                <a
                  className={
                    !pathName.slice(1) && item == "home"
                      ? "nav-link active fw-bold"
                      : pathName.slice(1) == item
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  href={item == "home" ? "/" : "/" + item}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <form
            className="d-flex me-3"
            onSubmit={(e) => {
              handleSearch(e);
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
