import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h5 className="fw-bold">Login With</h5>
      <Button
        variant="outline-primary"
        className="mb-2 border border-2 border-primary w-100"
      >
        <FaGoogle /> Login with Google{" "}
      </Button>
      <Button
        variant="outline-dark"
        className="mb-2 border border-2 border-dark w-100"
      >
        <FaGithub /> Login with GitHub
      </Button>

      <div>
        <h4 className="mt-4 mb-3">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>

      <div className="mt-4">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
