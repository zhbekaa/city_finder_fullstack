import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../App.css";

interface CityAtr {
  id: number;
  name: string;
  img: string;
  url: string;
  city_id: number;
  created_at: string;
  updated_at: string;
}
interface City {
  id: number;
  name: string;
  img: null;
  description: string;
  created_at: string;
  update_at: string;
  lat: string;
  lng: string;
  universities?: CityAtr[];
  activities?: CityAtr[];
  accommodations?: CityAtr[];
  shops?: CityAtr[];
  transports?: CityAtr[];
}
function returnAtr(cityatr?: CityAtr[], name?: string) {
  if (cityatr?.length != 0) {
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

// {name, img, description, created_at, update_at} : City
const City = () => {
  let { city_id } = useParams();
  const [city, setCity] = useState<City>();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/cities/${city_id}`)
      .then((response) => response.json())
      .then((data) => {
        setCity(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(city?.lat + "\n" + city?.lng);
  return (
    <Container
      className="mt-5"
      style={{
        paddingRight: "100px",
        paddingLeft: "100px"
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

export default City;
