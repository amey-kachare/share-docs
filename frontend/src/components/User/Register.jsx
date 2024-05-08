import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BASE_URL } from "../utills/config";
const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  let { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
      }
      console.log(result.data);
      setAuth({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
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
                  <h2 className="text-center text-2xl my-auto text-amber-800">
                    Register
                  </h2>
                </div>
                <div className="px-9 py-7 bg-primary-color relative content-center">
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Username"
                        required
                        id="username"
                        onChange={handleChange}
                        className="w-20vh px-4 py-2 my-2 rounded-lg border text-heading-color focus:outline-none"
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        id="email"
                        onChange={handleChange}
                        className="w-20vh px-4 py-2 my-2 rounded-lg border text-heading-color focus:outline-none"
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
                      Register<Link to="/login"></Link>
                    </Button>
                  </Form>
                  <p>
                    Already have an account ?{" "}
                    <Link className=" text-orange-500 italic" to="/login">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Register;
