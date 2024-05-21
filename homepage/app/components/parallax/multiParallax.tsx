'useClient'
import useDeviceDetection from '@/app/hooks/UseDetection';
import { Button } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnalyticsCardButtonLeft, AnalyticsCardLandingVertica, AnalyticsCardVertical } from '../analyticsBanner';
import styles from "./animation.module.css"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
export default function MultilayerParallax() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [exitAnimation, setExitAnimation] = useState(styles.none)
    const [isMobile, setIsMobile] = useState(false)
    const [upAnimation, setUpAnimation] = useState(styles.dropDownFade);
    const [downAnimation, setDownAnimation] = useState(styles.dropDownFade);
    const [outAnimation, setOutAnimation] = useState(styles.dropDownFade);
    const [showUp, setShowUp] = useState(false);
    const [showDown, setShowDown] = useState(true);
    const device = useDeviceDetection()
    useEffect(() => {
        if (device == "Mobile") {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [device])

    const handleUpClick = () => {
        setUpAnimation(styles.buttonAnim);

        setTimeout(() => {
            setShowUp(false)
            setDownAnimation(styles.dropDownFade);
            setTimeout(() => {
                setShowDown(true);
            }, 4000);


        }, 500)

    };
    const handleDownClick = () => {

        setDownAnimation(styles.buttonAnim);
        setUpAnimation(styles.dropDownFade)
        setTimeout(() => {
            setShowDown(false)
            setTimeout(() => {
                setShowUp(true);
            }, 4000);


        }, 500)


    };
    const router = useRouter()
    const handleExitClick = () => {
        setOutAnimation(styles.buttonAnim);
        setExitAnimation(styles.dropDownFadeOut);
        setUpAnimation(styles.dropDownFadeOut);
        setTimeout(() => {
            router.push("/home")




        }, 1500)

    }




    return (
        <div className="relative grid place-content-center py-10" style={isMobile ? { overflow: 'hidden', width: "100%", height: "100svh", alignContent: "space-between" } : { width: "100%", height: "100%", alignContent: "space-between" }}>
            {isMobile ? <></> : <div className='flex justify-center items-center content-center z-[80]  my-20'>
                {!showUp ? <div className="h-10" ></div> :
                    <button className={`${upAnimation} font-bold text-white z-[80]`} onClick={() => {
                        setActiveIndex(activeIndex - 1);
                        console.log(activeIndex);
                        handleUpClick();
                        setTimeout(() => { setShowDown(true) }, 9000)
                    }}>^ </button>}
            </div>
            }
            {isMobile && showUp && <div className='flex justify-center items-center content-center z-[80]  '>  <button className={`${upAnimation} font-bold text-white z-[80]`} onClick={() => { setActiveIndex(activeIndex - 1); handleUpClick(); }}>^ </button></div>
            }
            <motion.div
                className='z-30'
                variants={{
                    hidden: { opacity: 0, y: 300 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"

                transition={{ duration: 4, delay: 0 }}
            >
                <h1 className={`font-bold text-white text-7xl md:text-9xl relative z-30`} > Welcome </h1>
            </motion.div>
            <div className='flex justify-center items-center content-center z-[80] my-20'>
                {!showDown ? <div className="h-10 pb-12" ></div> :
                    <button className={`${downAnimation} h-10 font-bold text-white z-[80] pb-12 `} onClick={() => {
                        setActiveIndex(activeIndex + 1);
                        handleDownClick();


                    }}>ENTER</button>}</div>
            <img className="absolute inset-0 z-[60]" src="/dusk1.png" style={{
                width: "100vw", transition: 'transform 3s ease-in-out .2s',
                transform: `translateX(0%) translateY(-${(activeIndex * 35) + 7}%)`
            }} />
            <img className="absolute inset-0 z-50" src="/dusk2.png" style={{
                width: "100vw", transition: 'transform 3s ease-in-out .2s',
                transform: `translateX(0%) translateY(-${(activeIndex * 20) + 7}%)`
            }} />
            <img className="absolute inset-0 z-30" src="/dusk3.png" style={{
                width: "100vw", transition: 'transform 3s ease-in-out .2s',
                transform: `translateX(0%) translateY(-${(activeIndex * 15) + 7}%)`
            }} />
            <img className="absolute inset-0 z-20" src="/dusk4.png" style={{
                width: "100vw", transition: 'transform 3s ease-in-out .2s',
                transform: `translateX(0%) translateY(-${(activeIndex * 12) + 7}%)`
            }} />
            <img className="absolute inset-0 z-10" src="/dusk5.png" style={{
                width: "100vw", transition: 'transform 3s ease-in-out .2s',
                transform: `translateX(0%) translateY(-${(activeIndex * 10) + 7}%)`
            }} />

            {!isMobile ? (<div className="absolute flex w-4/5 h-screen  flex-col justify-center items-center content-center z-[70]  my-10 text-white mx-[10%]" style={{

                transition: 'transform 4s ease-in-out .2s',
                transform: `translateX(0%) translateY(${((activeIndex - 1) * -200)}%)`
            }}>
                <div className={`${exitAnimation}`}>
                    <AnalyticsCardLandingVertica
                        imagePath="logo.png"
                        headerText=" Welcome to Colin's Portfolio"
                        bodyText="This is a collection of some of my work"
                        footerText="Full stack software engineer located in Vancouver, British Columbia. Recent graduate of Simon Fraser University with a Bachelor of Science in Computer Science and Software Engineering. Specialized in JavaScript and typescript React development with prior experience in building customer-facing applications." />
                </div>
                <button className={`${outAnimation} text-white z-[200]`} onClick={() => { handleExitClick() }}>  VIEW PORTFOLIO  </button>
            </div>) :
                <div className={`absolute flex w-full h-screen flex-col  justify-center items-center content-center z-[70]  text-white `} style={{

                    transition: 'transform 4s ease-in-out .2s',
                    transform: `translateX(0%) translateY(${((activeIndex - 1) * -200)}%)`
                }}>
                    <div className={`${exitAnimation}`}>
                        <AnalyticsCardLandingVertica

                            imagePath="logoMobile.png"
                            headerText="Colin's Portfolio"
                            bodyText="Welcome"
                            footerText="This is a collection of some of my work " />
                    </div>
                    <button className={`${outAnimation} text-white p-10 z-[200]`} onClick={() => { handleExitClick() }} >  VIEW PORTFOLIO  </button>
                </div>}


        </div >
    )
}