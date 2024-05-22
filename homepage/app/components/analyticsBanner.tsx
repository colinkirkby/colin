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
interface AnalyticsCardButtonLeftPropsDesktop {
  imagePath: string
  headerText: string
  bodyText: string
  buttonText: string
  buttonLink: string
  backgroundImg: string,
}


export const AnalyticsCardButtonLeft: React.FC<
  AnalyticsCardButtonLeftPropsDesktop
> = ({
  imagePath,
  headerText,
  bodyText,
  backgroundImg,

  buttonLink, buttonText
}) => {
    return (
      <div className=" text-black "
        style={{
          width: "100%",
          border: "none",

          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          marginBottom: "30px"
        }}
      >
        <div className=" rounded-2xl"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundSize: "cover",
            height: "420px",
            overflow: "hidden",
            backgroundImage: "url(" + backgroundImg + ")",
            justifyContent: "center"
          }}
        >
          <div className="flex w-[600px] h-full justify-center " style={{ background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 95%)" }}>
            <div className=" flex m-auto w-[200px] h-[160px] bg-white rounded-2xl shadow-md">
              <img className=" m-auto w-[200px]  rounded-2xl" src={imagePath} alt={headerText} style={{ width: "100%" }} />
            </div>
          </div>


          <div
            className="pl-20 py-16  h-full w-[500px]"
            style={{

              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              background: "#ffff",
              paddingInline: "40px",
            }}
          ><div className=" pl-5 flex items-center flex-col gap-1">

              <h1 className=" font-bold text-lg ">{headerText}</h1>


              <p className="text-center" style={{ marginTop: "20px", marginBottom: "20px", fontSize: 15 }}
              >
                {bodyText}
              </p>

              <button className="p-3.5 px-5 bg-teal-950 text-white font-bold text-sm rounded-full transition hover:scale-105" style={{ background: ` linear-gradient(180deg, rgba(255, 255, 255, 0.18) 100%, rgba(255, 255, 255, 0.0) 0%), rgb(4 ,47, 46,1)`, marginTop: "20px", textAlign: "center" }}>
                <Link href={buttonLink}>
                  {buttonText}
                </Link>
              </button>
              <p
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "10px"
                }}
              >

              </p>
            </div>

          </div>

        </div>
      </div>
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
