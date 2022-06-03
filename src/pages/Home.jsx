import { Navbar, TopNavbar } from "../components";
import { Container } from "@mui/system";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <Container className="main-container">
        <h3>Home</h3>
      </Container>
      <Navbar />
    </>
  );
};

export default Home;
