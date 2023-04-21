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
  const bgImage = new Image();
  bgImage.src = bg;
  const bgHeight = bgImage.height;

  return (
    <div>
      <h5 className="fw-bold mb-4">Login With</h5>
      <Button
        variant="outline-primary"
        className="mb-2 border border-2 d-flex align-items-center justify-content-center border-primary w-100"
      >
        <FaGoogle className="me-2" />
        Login with Google
      </Button>
      <Button
        variant="outline-dark"
        className="mb-2 border border-2 d-flex align-items-center justify-content-center border-dark w-100"
      >
        <FaGithub className="me-2" />
        Login with GitHub
      </Button>

      <div>
        <h4 className="mt-4 mb-3">Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="py-3 ps-4">
            <FaFacebook className="me-2" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="py-3 ps-4">
            <FaTwitter className="me-2" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="py-3 ps-4">
            <FaInstagram className="me-2" /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>

      <div
        className="mt-4 text-white text-center d-flex flex-column justify-content-center align-items-center px-5"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          height: bgHeight,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>Create an Amazing Newspaper</h2>
        <p className="my-4">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger" className="rounded-0 px-4 py-2">
          Latest
        </Button>
      </div>
    </div>
  );
};

export default RightNav;
