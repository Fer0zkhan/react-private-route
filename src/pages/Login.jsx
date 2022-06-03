import { Navbar, TopNavbar } from "../components";
import { Container } from "@mui/system";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) return <Navigate to="/" />;
  return (
    <>
      <TopNavbar />
      <Container className="main-container">
        <h3>Login</h3>
      </Container>
      <Navbar />
    </>
  );
};

export default Login;
