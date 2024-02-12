import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../App.css";
import { CityAttribute, CityDetails } from "../interfaces/CityInterfaces";

// {name, img, description, created_at, update_at} : City
const CityDetailed = () => {
  function returnAtr(cityatr?: CityAttribute[], name?: string) {
    if (cityatr?.length) {
      return (
        <>
          <h3> {name} </h3>

          <div className="scrolling-wrapper">
            {cityatr?.map((citat) => (
              <a
                className="uni-card"
                style={{
                  backgroundImage: `url(${citat?.img})`,
                  maxWidth: "320px",
                  padding: 0,
                  margin: "3rem",
                }}
                href={citat?.url}
              >
                <div className="overlap-group">
                  <div className="text-wrapper">{citat?.name}</div>
                </div>
              </a>
            ))}
          </div>
        </>
      );
    }
  }
  let { city_id } = useParams();
  const [city, setCity] = useState<CityDetails>();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/cities/${city_id}`)
      .then((response) => response.json())
      .then((data) => {
        setCity(data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <Container
      className="mt-5"
      style={{
        paddingRight: "100px",
        paddingLeft: "100px",
      }}
    >
      <h1>{city?.name}</h1>
      <p>{city?.description}</p>

      <a>Created at: {city?.created_at.split("T", 1)}</a>
      {returnAtr(city?.universities, "Universities")}
      {returnAtr(city?.activities, "Activities")}
      {returnAtr(city?.accommodations, "Accomodations")}
      {returnAtr(city?.shops, "Shops")}
      {returnAtr(city?.transports, "Transports")}
    </Container>
  );
};

export default CityDetailed;
