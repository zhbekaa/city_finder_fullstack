import { CityList } from "../interfaces/CityInterfaces";

interface Props {
  cities: CityList[];
}
const SearchDropDown = ({ cities }: Props) => {
  console.log("search: ", cities);
  return (
    <div className="search-dropdown">
      {cities.map((city) => (
        <a
          key={city.id}
          href={`/cities/${city.id}`}
          style={{
            fontSize: "24px",
            color: "black",
          }}
        > 
          {city.name}
        </a>
      ))}
    </div>
  );
};

export default SearchDropDown;
