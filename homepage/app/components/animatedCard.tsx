import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, Col } from "antd";
import { Meta } from "antd/lib/list/Item";
//import { useRouter } from "next/router";

// Define a type for the props
interface AnimatedCardProps {
  imageUrl: string;
  link: string;
  title: string;
  delay?: number; // Make delay optional with a default value
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  imageUrl,
  link,
  title,
  delay = 0
}) => {
  const control = useAnimation();
  const ref = useRef(null); // Use null as the initial value for the ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            control.start("visible");
          }
        });
      },
      { threshold: 0.1 }
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

  return (
    <Col className="m-10">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.5, delay }}
      >
        <a href={link}>
          <Card
            hoverable
            style={
              {
                /* Insert your mobileStyle here */
              }
            }
            cover={
              <img
                src={imageUrl}
                alt={title}
                style={
                  {
                    /* Insert your imgStyle here */
                  }
                }
              />
            }
          >
            <Meta title={title} />
          </Card>
        </a>
      </motion.div>
    </Col>
  );
};

export default AnimatedCard;
