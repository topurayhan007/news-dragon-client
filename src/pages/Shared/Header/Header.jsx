import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>
          {" "}
          <strong>{moment().format("dddd,")}</strong>
          {moment().format(" MMMM D, YYYY")}
        </p>
      </div>
      <div className="d-flex p-3 bg-light">
        <Button variant="danger" className="me-3 rounded-0 px-3">
          Latest
        </Button>

        <Marquee speed={50} gradient={false} className="fw-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
