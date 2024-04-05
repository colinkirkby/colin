import { Card, Col, Row } from "antd";
import Image from "next/image";
import { AnalyticsCardButtonLeft } from "./components/analyticsBanner";
import { useEffect, useState } from "react";

export default function Home() {
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
  return (
    <main className="flex n flex-col items-center ">
      <div className="z-10 max-w-5xl w-full items-center justify-between ">
        <Col
          style={{
            width: "1000px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AnalyticsCardButtonLeft
            imagePath="banner.png"
            headerText="Hi I'm Colin"
            bodyText="This is a collection of some of my work"
            footerText=""
          />
          <h1 className="font-mono font-bold" style={{ margin: "auto" }}>
            Personal Projects
          </h1>
          <Row justify="space-around" style={{ padding: "20px" }}>
            <Col className="m-20">
              <a href="https://ufreecalendar.vercel.app/">
                <Card
                  title="calendar application"
                  style={{ width: "300px", height: "300px" }}
                  cover={
                    <Image
                      src="/ufree.png"
                      alt="streamline"
                      width={300}
                      height={240}
                    />
                  }
                ></Card>
              </a>
            </Col>
            <Col className="m-20">
              <a href="https://stream-line.vercel.app/">
                <Card
                  title="StreamLine application WIP"
                  style={{ width: "300px", height: "300px" }}
                  cover={
                    <Image
                      src="/bannersquare.png"
                      alt="streamline"
                      width={300}
                      height={240}
                    />
                  }
                ></Card>
              </a>
            </Col>
          </Row>
          <h1 className="font-mono font-bold">Previous Company Work</h1>
          <Row justify="space-around">
            <Col className="m-20">
              <a href="https://portable-electric.com/neuron-os/">
                <Card
                  title="Portable Electric Neuron os"
                  style={{ width: "300px", height: "300px" }}
                  cover={
                    <Image
                      src="/portable.png"
                      alt="streamline"
                      width={300}
                      height={240}
                    />
                  }
                ></Card>
              </a>
            </Col>
            <Col className="m-20">
              <a href="https://www.builddirect.com/">
                <Card
                  title="Build Direct Technologies"
                  style={{ width: "300px", height: "300px" }}
                ></Card>
              </a>
            </Col>
          </Row>
        </Col>
      </div>
    </main>
  );
}
