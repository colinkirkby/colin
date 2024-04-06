import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  AnalyticsCardButtonLeft,
  AnalyticsCardVertical
} from "./components/analyticsBanner";
import { useEffect, useState } from "react";
import useDeviceDetection from "./hooks/UseDetection";

const mobileStyle = {
  width: "300px",
  height: "300px",
  border: "none",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
};
const imgStyle = {
  overflow: "hidden",
  paddingLeft: "1px",
  paddingRight: "1px"
};

export function Client() {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 720); // Set to true if width is less than 720
  };
  const device = useDeviceDetection();
  useEffect(() => {
    if (device == "Mobile") {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [device]);

  const { Meta } = Card;

  return (
    <Col
      style={{
        width: "1000px",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "400px"
      }}
    >
      {!isMobile ? (
        <AnalyticsCardButtonLeft
          imagePath="logo.png"
          headerText="Colin's Portfolio"
          bodyText="This is a collection of some of my work"
          footerText=""
        />
      ) : (
        <AnalyticsCardVertical
          imagePath="logoMobile.png"
          headerText="Colin's Portfolio"
          bodyText="This is a collection of some of my work"
          footerText=""
        />
      )}

      <h1
        className="font-mono font-bold text-black"
        style={{ marginLeft: "10px" }}
      >
        Personal Projects
      </h1>
      <Row justify="space-around" style={{ padding: "20px" }}>
        <Col className="m-10">
          <a href="https://stream-line.vercel.app/">
            <Card
              hoverable
              style={mobileStyle}
              cover={
                <img
                  src="/bannersquare.png"
                  alt="streamline"
                  style={imgStyle}
                />
              }
            >
              <Meta title="StreamLine application WIP" />
            </Card>
          </a>
        </Col>
        <Col className="m-10">
          <a href="https://ufreecalendar.vercel.app/">
            <Card
              hoverable
              style={mobileStyle}
              cover={<img src="/ufree.png" alt="streamline" style={imgStyle} />}
            >
              <Meta title="calendar application" />
            </Card>
          </a>
        </Col>
      </Row>
      <h1
        className="font-mono font-bold font text-black"
        style={{ marginLeft: "10px" }}
      >
        Previous Company Work
      </h1>
      <Row justify="space-around">
        <Col className="m-10">
          <a href="https://portable-electric.com/neuron-os/">
            <Card
              hoverable
              style={mobileStyle}
              cover={
                <img src="/portable1.png" alt="streamline" style={imgStyle} />
              }
            >
              {" "}
              <Meta title="Portable Electric Neuron os" />
            </Card>
          </a>
        </Col>
        <Col className="m-10">
          <a href="https://www.builddirect.com/">
            <Card
              hoverable
              style={mobileStyle}
              cover={<img src="/build.png" alt="streamline" style={imgStyle} />}
            >
              <Meta title="Build Direct Technologies" />
            </Card>
          </a>
        </Col>
      </Row>
    </Col>
  );
}
