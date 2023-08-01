import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../App.css";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useAuth } from "../context/AuthContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AiFillHeart } from "react-icons/ai";

function NavBar() {
  const { user } = useAuth(); // Retrieve the user from the AuthContext
  // get path from url
  const urlPath = window.location.pathname;
  const showPath = urlPath.substring(urlPath.lastIndexOf("/") + 1);
  return (
    <>
      <Navbar className="bg-body-tertiary mb-3 bg-danger " expand="lg">
        <Container fluid className="align-content-md-center">
          <Navbar.Brand>
            <Link to="/">
              {" "}
              <img
                src="/pokemon-23.svg"
                className=" “img-fluid   w-25  px-0 me-0"
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Offcanvas
              placement="end"
              backdrop={false}
              scroll={false}
              className="navbar-offcanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="pe-3">
                  <div className="d-flex flex-column flex-md-row align-items-md-center ">
                    <div className="mb-3 mb-md-0">
                      {/* show favorites button */}
                      {user ? (
                        <Button>
                          <Link
                            to="/favorites"
                            className="text-light bold p-0 m-0"
                          >
                            Favorites <AiFillHeart />
                          </Link>
                        </Button>
                      ) : (
                        ""
                      )}
                    </div>

                    {/* If there's a user logged in, show the email and logout button */}
                    <div className="d-flex align-items-md-center mb-3 mb-md-0 ">
                      {user && (
                        <mark className="mt-0 mx-2 px-3 text-light">
                          {"Account: " + user.email}
                        </mark>
                      )}
                      {/* if there's a user, show logout, if there's no user logged in and the current path is login, dont show login button */}
                      {user ? ( <LogoutButton />
                      ) : showPath === "login" ? ( ""
                      ) : (
                        <LoginButton />
                      )}
                    </div>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
