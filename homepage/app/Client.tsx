import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  AnalyticsCardButtonLeft,
  AnalyticsCardVertical
} from "./components/analyticsBanner";
import { useEffect, useState } from "react";

export function Client() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Define a function to update the state based on the window's width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720); // Set to true if width is less than 720
    };

    // Call handleResize on mount to set the initial value
    handleResize();

    // Add event listener for subsequent resize events
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { Meta } = Card;
  return (
    <Col
      style={{
        width: "1000px",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {!isMobile ? (
        <AnalyticsCardButtonLeft
          imagePath="logo.png"
          headerText="Hi I'm Colin"
          bodyText="This is a collection of some of my work"
          footerText=""
        />
      ) : (
        <AnalyticsCardVertical
          imagePath="logo.png"
          headerText="Hi I'm Colin"
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
          <a href="https://ufreecalendar.vercel.app/">
            <Card
              hoverable
              style={{ width: "300px", height: "300px" }}
              cover={<img src="/ufree.png" alt="streamline" />}
            >
              <Meta title="calendar application" />
            </Card>
          </a>
        </Col>
        <Col className="m-10">
          <a href="https://stream-line.vercel.app/">
            <Card
              hoverable
              style={{ width: "300px", height: "300px" }}
              cover={<img src="/bannersquare.png" alt="streamline" />}
            >
              <Meta title="StreamLine application WIP" />
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
              style={{ width: "300px", height: "300px" }}
              cover={<img src="/portable.png" alt="streamline" />}
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
              style={{ width: "300px", height: "300px" }}
              cover={<img src="/build.png" alt="streamline" />}
            >
              <Meta title="Build Direct Technologies" />
            </Card>
          </a>
        </Col>
      </Row>
    </Col>
  );
}
