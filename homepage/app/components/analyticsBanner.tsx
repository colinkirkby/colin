import React from "react";
import { Card, Button } from "antd";
import "./styles.css";
import { motion } from "framer-motion";

// Define the prop types
interface AnalyticsCardButtonLeftProps {
  imagePath: string;
  headerText: string;
  bodyText: string;
  footerText: string;
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
            alignItems: "left",

            paddingInline: "40px"
          }}
        >
          <h1 className="text-xl">{headerText}</h1>
          <p>{bodyText}</p>

          <p style={{ marginTop: "1rem" }}>{footerText}</p>
        </div>
        <img src={imagePath} alt={headerText} style={{ width: "60%" }} />
      </div>
    </Card>
  );
};
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
        paddingBottom: "80px",
        marginBottom: "30px"
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
            <p style={{ marginTop: "20px", marginBottom: "100px" }}>
              {footerText}
            </p>
          </motion.div>
        </div>
      </div>
    </Card>
  );
};
