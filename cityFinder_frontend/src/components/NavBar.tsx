import { FormEvent, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation, useNavigate } from "react-router-dom";
import { CityList } from "../interfaces/CityInterfaces";
import SearchDropDown from "./SearchDropDown";
interface NavBarProps {
  navItems: string[];
}

const NavBar = ({ navItems }: NavBarProps) => {
  const [searchItem, setSearchItem] = useState<string>(" ");
  const [cities, setCities] = useState<CityList[]>([]);
  const [disp, setDisp] = useState<string>("none");
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  async function fetchSearches(query: string) {
    try {
      const res = await fetch(`http://localhost:8000/api/cities?q=${query}`);
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  }
  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/?q=${searchItem}`);
  }
  async function handleSmallSearch(searchItem: string) {
    // e.preventDefault();
    if (searchItem) {
      console.log(searchItem)
      setCities(await fetchSearches(searchItem).then((res) => res));
    } else setCities([]);
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
          <div>
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
                onChange={(e) => {
                  handleSmallSearch(e.target.value)
                  setSearchItem(e.target.value)}}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {(cities && cities.length > 0) && <SearchDropDown cities={cities}></SearchDropDown>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
