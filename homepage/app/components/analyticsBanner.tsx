import React from "react";
import { Card, Button } from "antd";

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
        paddingTop: "120px",
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
            marginTop: "40px",
            paddingInline: "40px"
          }}
        >
          <h1 className="text-xl">{headerText}</h1>
          <p style={{ marginTop: "40px", marginBottom: "20px" }}>{bodyText}</p>

          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
            {footerText}
          </p>
        </div>
      </div>
    </Card>
  );
};
