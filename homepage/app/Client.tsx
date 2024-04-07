import { Button, Card, Col, Row } from "antd";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import {
  AnalyticsCardButtonLeft,
  AnalyticsCardVertical
} from "./components/analyticsBanner";
import { useEffect, useRef, useState } from "react";
import useDeviceDetection from "./hooks/UseDetection";
import AnimatedCard from "./components/animatedCard";
import Link from "next/link";

const mobileStyle = {
  width: "300px",
  height: "300px",
  border: "none",
  margin: "auto",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
};
const imgStyle = {
  overflow: "hidden",
  paddingLeft: "1px",
  paddingRight: "1px"
};

export function Client() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 720); // Set to true if width is less than 720
  };
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Trigger the animation
            control.start("visible");
            console.log("0 should be visible");
          } else {
            // Optionally reset the animation state when the element goes out of view
            console.log("0 should be hidden");
            control.start("hidden");
          }
        });
      },
      {
        // Adjust the threshold and rootMargin to control when the callback is executed
        threshold: 0.5 // Trigger when 10% of the element is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [control]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Trigger the animation
            control1.start("visible");
            console.log("1 should be visible");
          } else {
            // Optionally reset the animation state when the element goes out of view
            console.log("1 should be hidden");
            control1.start("exit");
            //control1.start("hidden");
          }
        });
      },
      {
        // Adjust the threshold and rootMargin to control when the callback is executed
        threshold: 1 // Trigger when 10% of the element is in view
      }
    );

    if (ref1.current) {
      observer.observe(ref1.current);
    }

    return () => {
      if (ref1.current) {
        observer.unobserve(ref1.current);
      }
    };
  }, [control1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Trigger the animation
            control2.start("visible");
          } else {
            // Optionally reset the animation state when the element goes out of view
            control2.start("exit");
            //control2.start("hidden");
          }
        });
      },
      {
        // Adjust the threshold and rootMargin to control when the callback is executed
        threshold: 1 // Trigger when 10% of the element is in view
      }
    );

    if (ref2.current) {
      observer.observe(ref2.current);
    }

    return () => {
      if (ref2.current) {
        observer.unobserve(ref2.current);
      }
    };
  }, [control2]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Trigger the animation
            control3.start("visible");
          } else {
            // Optionally reset the animation state when the element goes out of view
            control3.start("exit");
            //control3.start("hidden");
          }
        });
      },
      {
        // Adjust the threshold and rootMargin to control when the callback is executed
        threshold: 0.8 // Trigger when 10% of the element is in view
      }
    );

    if (ref3.current) {
      observer.observe(ref3.current);
    }

    return () => {
      if (ref3.current) {
        observer.unobserve(ref3.current);
      }
    };
  }, [control3]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Trigger the animation
            control4.start("visible");
          } else {
            // Optionally reset the animation state when the element goes out of view
            control4.start("exit");
            //control4.start("hidden");
          }
        });
      },
      {
        // Adjust the threshold and rootMargin to control when the callback is executed
        threshold: 1 // Trigger when 10% of the element is in view
      }
    );

    if (ref4.current) {
      observer.observe(ref4.current);
    }

    return () => {
      if (ref4.current) {
        observer.unobserve(ref4.current);
      }
    };
  }, [control4]);

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
    <div
      style={
        isMobile
          ? {
              height: "100vh",
              overflowY: "scroll",
              overflowX: "hidden",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "100px",
              scrollSnapType: "y mandatory", // Set up vertical scroll snapping
              scrollSnapStop: "always"
            }
          : {
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "100px"
            }
      }
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
          bodyText="Welcome"
          footerText="This is a collection of some of my work"
        />
      )}
      <div
        ref={ref}
        style={
          isMobile
            ? {
                textAlign: "center",
                marginBottom: "100px",
                marginTop: "100px",
                scrollSnapAlign: "center",
                height: "900px",
                display: "flex",
                alignItems: "center"
              }
            : {
                textAlign: "center",
                marginBottom: "100px",
                marginTop: "100px",
                scrollSnapAlign: "center"
              }
        }
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, scale: 0.7 },
            visible: { opacity: 1, y: 0, scale: 1 }
          }}
          initial="hidden"
          animate={control}
          transition={{ duration: 1.5, delay: 0 }}
        >
          <h1 className=" text-black" style={{ fontSize: "30px" }}>
            About Me
          </h1>
          <p
            style={{ marginTop: "20px", textAlign: "center" }}
            className=" text-black"
          >
            {
              "Full stack software engineer located in Vancouver, British Columbia. Recent graduate of Simon Fraser University with a Bachelor of Science in Computer Science and Software Engineering. Specialized in JavaScript and typescript React development with prior experience in building customer-facing applications."
            }
          </p>
        </motion.div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center"
        }}
      >
        <h1
          className=" text-black"
          style={{ fontSize: "30px", scrollSnapAlign: "center" }}
        >
          Personal Projects
        </h1>
      </div>
      <Row justify="space-around" style={{ padding: "20px" }}>
        <Col className="m-10">
          <div
            ref={ref1}
            style={{
              position: "relative",
              marginBottom: "200px",
              scrollSnapAlign: "center"
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, y: 0, scale: 1 },

                exit: { opacity: 0, scale: 0.2 }
              }}
              initial="hidden"
              animate={control1}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
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
                  <Meta title="StreamLine Application WIP" />
                </Card>
              </a>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75, scale: 0.7 },
                visible: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.2 }
              }}
              initial="hidden"
              animate={control1}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p style={{ marginTop: "20px" }} className=" text-black">
                {
                  "A work in progress saas project designed using AWS cloud services and NextJS. Intended to simplyfy retail workspaces and bring valueto managment teams."
                }
              </p>
            </motion.div>
          </div>
        </Col>

        <Col className="m-10">
          <div
            ref={ref2}
            style={{ position: "relative", scrollSnapAlign: "center" }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.2 }
              }}
              initial="hidden"
              animate={control2}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <a href="https://ufreecalendar.vercel.app/">
                <Card
                  hoverable
                  style={mobileStyle}
                  cover={
                    <img src="/ufree.png" alt="streamline" style={imgStyle} />
                  }
                >
                  <Meta title="Calendar Application" />
                </Card>
              </a>
            </motion.div>
            <motion.div
              variants={{
                exit: { opacity: 0, y: 75, scale: 0.7 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              initial="exit"
              animate={control2}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p
                style={{ marginTop: "20px", textAlign: "center" }}
                className=" text-black"
              >
                {
                  "A TypeScript based calendar application leveraging browser storage. This was meant as a project to learn TypeScript and build more complicated functional UI."
                }
              </p>
            </motion.div>
          </div>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center"
        }}
      >
        <h1
          className=" text-black"
          style={{ fontSize: "30px", scrollSnapAlign: "center" }}
        >
          Previous Company Work
        </h1>
      </div>
      <Row justify="space-around">
        <Col className="m-10">
          <div
            ref={ref3}
            style={{
              position: "relative",
              marginBottom: "200px",
              scrollSnapAlign: "center"
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.2 }
              }}
              initial="hidden"
              animate={control3}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <a href="https://portable-electric.com/neuron-os/">
                <Card
                  hoverable
                  style={mobileStyle}
                  cover={
                    <img
                      src="/portable1.png"
                      alt="streamline"
                      style={imgStyle}
                    />
                  }
                >
                  {" "}
                  <Meta title="Portable Electric Neuron os" />
                </Card>
              </a>
            </motion.div>
            <motion.div
              variants={{
                exit: { opacity: 0, y: 75, scale: 0.7 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              initial="exit"
              animate={control3}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p
                style={{ marginTop: "20px", textAlign: "center" }}
                className=" text-black"
              >
                {
                  "Built a React based JavaScript application using AWS serverless ecosystem. This application allowed for easy deployment and rental managment of the companies portable battery units."
                }
              </p>
            </motion.div>
          </div>
        </Col>
        <Col className="m-10">
          <div
            ref={ref4}
            style={{
              position: "relative",
              scrollSnapAlign: "center",
              scrollSnapStop: "always"
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.2 }
              }}
              initial="hidden"
              animate={control4}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <a href="https://www.builddirect.com/">
                <Card
                  hoverable
                  style={mobileStyle}
                  cover={
                    <img src="/build.png" alt="streamline" style={imgStyle} />
                  }
                >
                  <Meta title="Build Direct Technologies" />
                </Card>
              </a>
            </motion.div>
            <motion.div
              variants={{
                exit: { opacity: 0, y: 75, scale: 0.7 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              initial="exit"
              animate={control4}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p
                style={{ marginTop: "20px", textAlign: "center" }}
                className="text-black"
              >
                {
                  "Worked as a full stack developer maintaining build directs online storefront. I assisted in launching a revamped version of their webpage rebuilt to leverage the new NextJS feature set. Bringing page load times down 90% to 1-2 seconds per page. "
                }
              </p>
              {isMobile && (
                <Row justify="center" style={{ marginTop: "50px" }}>
                  <a href="https://www.linkedin.com/in/colin-kirkby-253909178">
                    <Button type="primary"> Visit My Linked In</Button>
                  </a>
                </Row>
              )}
            </motion.div>
          </div>
        </Col>
      </Row>
      {!isMobile && (
        <Row justify="center" style={{ marginTop: "30px" }}>
          <a href="https://www.linkedin.com/in/colin-kirkby-253909178">
            <Button type="primary"> Visit My Linked In</Button>
          </a>
        </Row>
      )}
    </div>
  );
}
