import { Navbar, TopNavbar } from "../components";
import { Container } from "@mui/system";

const About = () => {
  return (
    <>
      <TopNavbar />
      <Container className="main-container">
        <h3>About</h3>
      </Container>
      <Navbar />
    </>
  );
};

export default About;
