'use client';


import { Button, Card, Col, Row } from "antd"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"
import {
  AnalyticsCardButtonLeft,
  AnalyticsCardVertical
} from "../components/analyticsBanner"
import { useEffect, useRef, useState } from "react"
import useDeviceDetection from "../hooks/UseDetection"
import AnimatedCard from "../components/animatedCard"
import Link from "next/link"
import MobilePage from "../components/mobilePage/mobileHome"



export default function Client() {
  const [isMobile, setIsMobile] = useState(false)
  const device = useDeviceDetection()
    useEffect(() => {
      if (device == "Mobile") {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }, [device])
  

  return (
    <>{isMobile? <MobilePage/> : <></> }
    </>
   
  )
}

