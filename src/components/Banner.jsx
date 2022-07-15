import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

function Banner() {
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {"Hi Im webdecoded"}
              <span className="wrap">web developer</span>
              <p>
                Mai hu Gian, mai hu bada takatwar, mera gala hia bada sureela,
                meri awaaz sun ke, log ho jaate hai mad-hosh
              </p>
              <button onClick={() => console.log("Banner Button Clicked")}>
                Let's Connect <ArrowRightCircle size={24} />
              </button>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Banner Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
