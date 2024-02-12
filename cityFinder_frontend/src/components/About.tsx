import { Container } from "react-bootstrap";
import "../App.css";

const About = () => {
  return (
    <Container>
      <h1 className="mt-3">About</h1>

      <div className="container-fluid py-2">
        <h2 className="font-weight-light">
          This website allow you to search different cities in the UK, with their descriptions and places of interest.
          Students and tourists coming to the UK might find this website useful
        </h2>
        
      </div>
    </Container>
  );
};

export default About;
