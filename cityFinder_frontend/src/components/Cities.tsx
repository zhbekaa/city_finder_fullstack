import { useEffect, useState } from "react";
import "../App.css";
import { CityList } from "../interfaces/CityInterfaces";
import CityCard from "./CityCard";
import { Container } from "react-bootstrap";

const Cities = () => {
  const [cities, setCities] = useState<CityList[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/cities")
      .then((response) => response.json())
      .then((data: CityList[]) => setCities(data));
  }, []);

  let url: string[] | undefined = window.location.href.split("q=");

  const searchItem = url ? url[1] : undefined;

  return (
    <Container className="mt-3">
        {cities.map((city: CityList) => {
          if (
            !searchItem ||
            city.name.toLowerCase().includes(searchItem.toLowerCase())
          )
            return (
                <CityCard city={city} key={city.id} />
            );
        })}

    </Container>
  );
};

export default Cities;
