import { Button, Card, Col, Row } from "antd"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"
import {
  AnalyticsCardButtonLeft,
  AnalyticsCardVertical
} from "./components/analyticsBanner"
import { useEffect, useRef, useState } from "react"
import useDeviceDetection from "./hooks/UseDetection"
import AnimatedCard from "./components/animatedCard"
import Link from "next/link"

const mobileStyle = {
  width: "80vw",
  height: "80vw",
  border: "none",
  margin: "auto",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
}
const desktopStyle = {
  width: "12vw",
  height: "12vw",
  border: "none",
  margin: "auto",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
}
const imgStyle = {
  overflow: "hidden",
  paddingLeft: "1px",
  paddingRight: "1px"
}

export function Client() {
  const [isMobile, setIsMobile] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const ref = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)

  const control = useAnimation()
  const control1 = useAnimation()
  const control2 = useAnimation()
  const control3 = useAnimation()
  const control4 = useAnimation()
  const control5 = useAnimation()

  const handleResize = () => {
    setIsMobile(window.innerWidth < 720) // Set to true if width is less than 720
  }
  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Trigger the animation
            control.start("visible")
          } else {
            // Optionally reset the animation state when the element goes out of view
            control.start("hidden")
          }
        })
      },
      {
        // Adjust the threshold and rootMargin to control when the callback is executed
        threshold: 0.5 // Trigger when 10% of the element is in view
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [control])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Trigger the animation
            control1.start("visible")
          } else {
            // Optionally reset the animation state when the element goes out of view
            control1.start("exit")
            //control1.start("hidden");
          }
        })
      },
      {
        // Adjust the threshold and rootMargin to control when the callback is executed
        threshold: 0.8 // Trigger when 10% of the element is in view
      }
    )

    if (ref1.current) {
      observer.observe(ref1.current)
    }

    return () => {
      if (ref1.current) {
        observer.unobserve(ref1.current)
      }
    }
  }, [control1])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Trigger the animation
            control2.start("visible")
          } else {
            // Optionally reset the animation state when the element goes out of view
            control2.start("exit")
            //control2.start("hidden");
          }
        })
      },
      {
        // Adjust the threshold and rootMargin to control when the callback is executed
        threshold: 0.8 // Trigger when 10% of the element is in view
      }
    )

    if (ref2.current) {
      observer.observe(ref2.current)
    }

    return () => {
      if (ref2.current) {
        observer.unobserve(ref2.current)
      }
    }
  }, [control2])
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Trigger the animation
            control3.start("visible")
          } else {
            // Optionally reset the animation state when the element goes out of view
            control3.start("exit")
            //control3.start("hidden");
          }
        })
      },
      {
        // Adjust the threshold and rootMargin to control when the callback is executed
        threshold: 0.8 // Trigger when 10% of the element is in view
      }
    )

    if (ref3.current) {
      observer.observe(ref3.current)
    }

    return () => {
      if (ref3.current) {
        observer.unobserve(ref3.current)
      }
    }
  }, [control3])
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            // Trigger the animation
            control4.start("visible")
          } else {
            // Optionally reset the animation state when the element goes out of view
            control4.start("exit")
            //control4.start("hidden");
          }
        })
      },
      {
        // Adjust the threshold and rootMargin to control when the callback is executed
        threshold: 0.8 // Trigger when 10% of the element is in view
      }
    )

    if (ref4.current) {
      observer.observe(ref4.current)
    }

    return () => {
      if (ref4.current) {
        observer.unobserve(ref4.current)
      }
    }
  }, [control4])
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            control5.start("visible")
          } else {
            control5.start("exit")
          }
        })
      },
      {
        threshold: 0.8
      }
    )

    if (ref5.current) {
      observer.observe(ref5.current)
    }

    return () => {
      if (ref5.current) {
        observer.unobserve(ref5.current)
      }
    }
  }, [control5])

  const device = useDeviceDetection()
  useEffect(() => {
    if (device == "Mobile") {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [device])

  const { Meta } = Card

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
              scrollSnapType: "y mandatory",
              scrollSnapStop: "always"
            }
          : {
              marginTop: "3vh",
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
          bodyText="Welcome"
          footerText="This is a collection of some of my work "
        />
      ) : (
        <AnalyticsCardVertical
          imagePath="logoMobile.png"
          headerText="Colin's Portfolio"
          bodyText="Welcome"
          footerText="This is a collection of some of my work "
        />
      )}
      <div
        ref={ref}
        style={
          isMobile
            ? {
                textAlign: "center",
                paddingBottom: "200px",
                marginTop: "100px",
                scrollSnapAlign: "center",
                height: "900px",
                display: "flex",
                alignItems: "center"
              }
            : {
                textAlign: "center",
                maxWidth: "70vw",
                paddingBottom: "100px",
                marginTop: "100px",
                scrollSnapAlign: "center",
                alignItems: "center"
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
            style={{
              marginTop: "20px",
              padding: "5vw",
              textAlign: "center",
              fontSize: "15px"
            }}
            className=" text-black"
          >
            {
              "Full stack software engineer located in Vancouver, British Columbia. Recent graduate of Simon Fraser University with a Bachelor of Science in Computer Science and Software Engineering. Specialized in JavaScript and typescript React development with prior experience in building customer-facing applications."
            }
          </p>
        </motion.div>
      </div>
      <div
        style={
          isMobile
            ? {
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                alignItems: "center"
              }
            : {
                backgroundColor: "#FFFF",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                marginTop: "10vh",
                paddingTop: "5vh",
                display: "flex",
                justifyContent: "center",
                height: "10vh",
                alignItems: "center"
              }
        }
      >
        <h1
          className=" text-black"
          style={
            isMobile
              ? {
                  fontSize: "30px",
                  scrollSnapAlign: "center",
                  paddingBottom: "300px"
                }
              : {
                  fontSize: "30px",
                  scrollSnapAlign: "center",
                  paddingBottom: "30px"
                }
          }
        >
          Work Experience
        </h1>
      </div>
      <Row
        justify="space-around"
        style={
          isMobile
            ? {}
            : {
                backgroundColor: "#FFFF",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px"
              }
        }
      >
        <Col
          className="m-5"
          style={isMobile ? {} : { maxWidth: "16vw", paddingBottom: "10vh" }}
        >
          <div
            ref={ref5}
            style={
              isMobile
                ? {
                    position: "relative",
                    paddingBottom: "100px",
                    marginBottom: "200px",
                    scrollSnapAlign: "center"
                  }
                : {
                    maxWidth: "25vw",
                    position: "relative",
                    paddingBottom: "10px",
                    marginBottom: "20px",
                    scrollSnapAlign: "center"
                  }
            }
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.2 }
              }}
              initial="hidden"
              animate={control5}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <a href="https://www.loom.com/share/e06549ba2f5347eb95672ad52a765a5c">
                <Card
                  hoverable
                  size={isMobile ? "default" : "small"}
                  style={isMobile ? mobileStyle : desktopStyle}
                  cover={
                    <img src="/ct_text_cropped.png" alt="" style={imgStyle} />
                  }
                >
                  {" "}
                  <Meta title="CarTracked" />
                </Card>
              </a>
            </motion.div>
            <motion.div
              variants={{
                exit: { opacity: 0, y: 75, scale: 0.7 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              initial="exit"
              animate={control5}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p
                style={{ marginTop: "20px", textAlign: "center" }}
                className=" text-black"
              >
                {
                  "Designed and built a mobile version of the cartracked application allowing dealers to have easy access while on the go. "
                }
              </p>
            </motion.div>
          </div>
        </Col>
        <Col className="m-5" style={isMobile ? {} : { maxWidth: "16vw" }}>
          <div
            ref={ref3}
            style={
              isMobile
                ? {
                    position: "relative",
                    paddingBottom: "100px",
                    marginBottom: "200px",
                    scrollSnapAlign: "center"
                  }
                : {
                    position: "relative",
                    paddingBottom: "10px",
                    marginBottom: "20px",
                    scrollSnapAlign: "center"
                  }
            }
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.2 }
              }}
              initial="hidden"
              animate={control3}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <a href="https://portable-electric.com/neuron-os/">
                <Card
                  hoverable
                  size={isMobile ? "default" : "small"}
                  style={isMobile ? mobileStyle : desktopStyle}
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
                  "Built a React based JavaScript application using AWS serverless ecosystem. This application allowed for easy deployment and rental managment of the company's portable battery units."
                }
              </p>
            </motion.div>
          </div>
        </Col>
        <Col className="m-5" style={isMobile ? {} : { maxWidth: "16vw" }}>
          <div
            ref={ref4}
            style={
              isMobile
                ? {
                    position: "relative",
                    paddingBottom: "100px",
                    scrollSnapAlign: "center",
                    scrollSnapStop: "always"
                  }
                : {
                    position: "relative",
                    paddingBottom: "10px",
                    scrollSnapAlign: "center",
                    scrollSnapStop: "always"
                  }
            }
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.2 }
              }}
              initial="hidden"
              animate={control4}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <a href="https://www.builddirect.com/">
                <Card
                  hoverable
                  size={isMobile ? "default" : "small"}
                  style={isMobile ? mobileStyle : desktopStyle}
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
                  "Worked as a full stack developer maintaining BuildDirects online storefront. I helped build and launch a revamped version of the webpage designed to leverage the new NextJS feature set. Bringing page load times down 90% to 1-2 seconds per page. "
                }
              </p>
            </motion.div>
          </div>
        </Col>
      </Row>
      <div
        style={
          isMobile
            ? {
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                alignItems: "center"
              }
            : {
                backgroundColor: "#FFFF",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                marginTop: "10vh",
                paddingTop: "5vh",
                display: "flex",
                justifyContent: "center",
                height: "10vh",
                alignItems: "center"
              }
        }
      >
        <h1
          className=" text-black"
          style={
            isMobile
              ? {
                  fontSize: "30px",
                  scrollSnapAlign: "center",
                  paddingBottom: "300px"
                }
              : {
                  fontSize: "30px",
                  scrollSnapAlign: "center",
                  paddingBottom: "30px"
                }
          }
        >
          Personal Projects
        </h1>
      </div>
      <Row
        justify="space-around"
        style={
          isMobile
            ? {}
            : {
                backgroundColor: "#FFFF",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px"
              }
        }
      >
        <Col className="m-5" style={isMobile ? {} : { maxWidth: "16vw" }}>
          <div
            ref={ref1}
            style={
              isMobile
                ? {
                    position: "relative",
                    marginBottom: "200px",
                    paddingBottom: "100px",
                    scrollSnapAlign: "center"
                  }
                : {
                    position: "relative",
                    marginBottom: "20px",
                    paddingBottom: "10px",
                    scrollSnapAlign: "center"
                  }
            }
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: { opacity: 1, y: 0, scale: 1 },

                exit: { opacity: 0, scale: 0.2 }
              }}
              initial="hidden"
              animate={control1}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <a href="https://stream-line.vercel.app/">
                <Card
                  hoverable
                  size={isMobile ? "default" : "small"}
                  style={isMobile ? mobileStyle : desktopStyle}
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
              <p
                style={{ marginTop: "20px", textAlign: "center" }}
                className=" text-black"
              >
                {
                  "A work in progress SAAS project designed using AWS cloud services and NextJS. Intended to simplyfy retail workspaces and bring value to managment teams."
                }
              </p>
            </motion.div>
          </div>
        </Col>

        <Col className="m-5" style={isMobile ? {} : { maxWidth: "16vw" }}>
          <div
            ref={ref2}
            style={{
              position: "relative",
              paddingBottom: "100px",
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
              animate={control2}
              transition={{ duration: 0.7, delay: 0 }}
            >
              <a href="https://ufreecalendar.vercel.app/">
                <Card
                  hoverable
                  size={isMobile ? "default" : "small"}
                  style={isMobile ? mobileStyle : desktopStyle}
                  cover={
                    <img src="/ufree.png" alt="streamline" style={imgStyle} />
                  }
                >
                  <Meta
                    style={isMobile ? {} : { fontSize: "5vw" }}
                    title="Calendar Application"
                  />
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
                  "A TypeScript based calendar application leveraging browser storage. This was a project to learn TypeScript and build more complicated functional UI."
                }
              </p>
            </motion.div>
            {isMobile && (
              <Row justify="center" style={{ marginTop: "50px" }}>
                <a href="https://www.linkedin.com/in/colin-kirkby-253909178">
                  <Button type="primary"> Visit My Linked In</Button>
                </a>
              </Row>
            )}
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
  )
}
