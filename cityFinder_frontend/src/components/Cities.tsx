import { Component } from "react";

import "../App.css";

interface City {
  id: number;
  name: string;
  description: string;
  img: string;
  key: number;
}

interface State {
  cities: City[];
}

class Cities extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/cities")
      .then((response) => response.json())
      .then((data: City[]) => this.setState({ cities: data }));
  }
  render() {
    let url: string[] | undefined = window.location.href.split("q=");

    const searchItem = url ? url[1] : undefined;

    const { cities } = this.state;
    return (
      <div className="row m-0">
        {cities.map((city: City) => {
          if (
            !searchItem ||
            city.name.toLowerCase().includes(searchItem.toLowerCase())
          )
            return (
              <a
                key={city.id}
                className="uni-card"
                style={{
                  backgroundImage: "url(" + city.img + ")",
                  maxWidth: "320px",
                  padding: 0,
                  margin: "3rem",
                }}
                href={`/cities/${city.id}`}
              >
                <div className="overlap-group" key={city.description}>
                  <div className="text-wrapper" key={city.name}>
                    {city.name}
                  </div>
                </div>
              </a>
            );
        })}
      </div>
    );
  }
}

export default Cities;
