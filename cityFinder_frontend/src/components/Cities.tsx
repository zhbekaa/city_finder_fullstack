import { useEffect, useState } from "react";
import "../App.css";
import { CityList } from "../interfaces/CityInterfaces";
import CityCard from "./CityCard";
import { Button, Container } from "react-bootstrap";

const Cities = () => {
  const [cities, setCities] = useState<CityList[]>([]);
  const [limit, setLimit] = useState<number>(6);
  const fetchCities = async (pageParams: {
    page: number;
    limit: number;
  }): Promise<CityList[]> => {
    const response = await fetch(
      `http://localhost:8000/api/cities?page=${pageParams.page}&limit=${pageParams.limit}`
    );
    const data = await response.json();
    return data.data;
  };
  useEffect(() => {
    fetchCities({ page: 1, limit: limit })
      .then((cities: CityList[]) => {
        console.log(cities);
        setCities(cities);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, [limit]);
  let url: string[] | undefined = window.location.href.split("q=");

  const searchItem = url ? url[1] : undefined;

  return (
    <div className="d-flex flex-column align-items-center gap-3 pb-3">
      <Container className="mt-3">
        {cities.map((city: CityList) => {
          if (
            !searchItem ||
            city.name.toLowerCase().includes(searchItem.toLowerCase())
          )
            return <CityCard city={city} key={city.id} />;
        })}
        {/* <div ref={observer}></div> */}
        {/* {isFetchingNextPage && <p>Loading more...</p>} */}
      </Container>
      {cities.length >= 6 && (
        <Button onClick={() => setLimit(limit + 6)}>Load More</Button>
      )}
    </div>
  );
};

export default Cities;
