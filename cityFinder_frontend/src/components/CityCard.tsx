import { CityList } from "../interfaces/CityInterfaces";

interface Props {
  city: CityList;
  key: number;
}

const CityCard = ({ city }: Props) => {
  return (
    // <div className="d-flex justify-content-center" key={city.id}>
      <a
        className="uni-card m-2"
        style={{
          backgroundImage: "url(" + city.img + ")",
          maxWidth: "320px",
          padding: 0,
        }}
        href={`/cities/${city.id}`}
      >
        <div className="overlap-group" key={city.description}>
          <div className="text-wrapper" key={city.name}>
            {city.name}
          </div>
        </div>
      </a>
    // </div>
  );
};

export default CityCard;
