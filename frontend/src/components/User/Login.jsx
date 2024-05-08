import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utills/config";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
      } else {
        const user = result.data;
        setAuth({ user: user, token: result.token });
        localStorage.setItem(
          "auth",
          JSON.stringify({ user: user, token: result.token })
        );
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="w-60 mx-auto text-center">
              <div className="loginImg flex space-x-10 my-5">
                <img
                  src={
                    "https://th.bing.com/th/id/OIP.5Mbup4RSlJNq7YxCjOeXzgHaHa?rs=1&pid=ImgDetMain"
                  }
                  className="w-1/3 object-contain"
                  alt=""
                />
                <h2 className="bold text-center text-2xl my-auto text-amber-800">
                  Login
                </h2>
              </div>
              <div className="px-9 py-7 bg-primary-color relative">
                <Form onSubmit={handleClick} className="w-40 mx-auto">
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                      className="w-20vh  px-4 py-2 my-2 rounded-lg border text-heading-color focus:outline-none"
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                      className="w-20vh  px-4 py-2 my-2 rounded-lg border text-heading-color focus:outline-none"
                    />
                  </FormGroup>
                  <Button
                    className="text-gray-800 border-orange-500 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                    type="submit"
                  >
                    Log in
                  </Button>
                </Form>
                <p className="text-sm text-gray-500 mt-6 text-center">
                  Don't have an account?{" "}
                  <Link className=" text-orange-500 italic" to="/register">
                    Create
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
