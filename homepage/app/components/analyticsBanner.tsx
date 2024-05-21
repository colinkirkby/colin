import React from "react"
import { Card, Button } from "antd"
import "./styles.css"
import { motion } from "framer-motion"
import Link from "next/link"

// Define the prop types
interface AnalyticsCardButtonLeftProps {
  imagePath: string
  headerText: string
  bodyText: string
  footerText: string
}

export const AnalyticsCardButtonLeft: React.FC<
  AnalyticsCardButtonLeftProps
> = ({
  imagePath,
  headerText,
  bodyText,

  footerText
}) => {
    return (
      <Card
        style={{
          width: "100%",
          border: "none",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          marginBottom: "30px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "60px",
              paddingInline: "40px"
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              transition={{ duration: 2, delay: 0.4 }}
            >
              <h1>{headerText}</h1>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, delay: 3 }}
            >
              <p
                style={{ marginTop: "60px", marginBottom: "20px", fontSize: 20 }}
              >
                {bodyText}
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, delay: 5 }}
            >
              <p style={{ marginTop: "20px", textAlign: "center" }}>
                {footerText}
              </p>
              <p
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  marginBottom: "100px",
                  fontSize: "10px"
                }}
              >
                {"Everything on this page is hand crafted by me"}
              </p>
            </motion.div>
          </div>
          <img src={imagePath} alt={headerText} style={{ width: "72%" }} />
        </div>
      </Card>
    )
  }
export const AnalyticsCardVertical: React.FC<AnalyticsCardButtonLeftProps> = ({
  imagePath,
  headerText,
  bodyText,

  footerText
}) => {
  return (
    <Card
      style={{
        width: "100%",
        border: "none",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        height: "100vh",
        marginBottom: "30px",
        scrollSnapAlign: "start"
      }}
      cover={<img src={imagePath} alt={headerText} style={{ width: "100%" }} />}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "60px",
            paddingInline: "40px"
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            transition={{ duration: 2, delay: 0.4 }}
          >
            <h1>{headerText}</h1>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, delay: 3 }}
          >
            <p
              style={{ marginTop: "60px", marginBottom: "20px", fontSize: 20 }}
            >
              {bodyText}
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, delay: 5 }}
          >
            <p style={{ marginTop: "20px", textAlign: "center" }}>
              {footerText}
            </p>
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                marginBottom: "100px",
                fontSize: "10px"
              }}
            >
              {"Everything on this page is hand crafted by me"}
            </p>
          </motion.div>
        </div>
      </div>
    </Card>
  )
}

export const AnalyticsCardLandingVertica: React.FC<AnalyticsCardButtonLeftProps> = ({
  imagePath,
  headerText,
  bodyText,

  footerText
}) => {
  return (
    <Card
      style={{
        width: "100%",
        border: "none",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        height: "30vh",
        scrollSnapAlign: "start",
        backgroundColor: "#000013"
      }}

    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingInline: "40px"
          }}
        >


          <h1 className=" text-white">{headerText}</h1>

          <p className=" text-white"
            style={{ marginTop: "60px", marginBottom: "20px", fontSize: 20 }}
          >
            {bodyText}
          </p>


          <p className=" text-white" style={{ marginTop: "20px", textAlign: "center" }}>
            {footerText}
          </p>
          <p className=" text-white"
            style={{
              marginTop: "20px",
              textAlign: "center",

              fontSize: "10px"
            }}
          >
            {"Everything on this page is hand crafted by me"}
          </p>


        </div>

      </div>
    </Card>
  )
}
