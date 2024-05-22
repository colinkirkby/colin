'useClient'
import useDeviceDetection from '@/app/hooks/UseDetection';
import { Button } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnalyticsCardButtonLeft, AnalyticsCardLandingVertica, AnalyticsCardVertical } from '../analyticsBanner';
import styles from "../animation.module.css"
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
            setTimeout(() => {
                setDownAnimation(styles.dropDownFade);
                setShowDown(true);
            }, 4000);


        }, 500)

    };
    const handleDownClick = () => {
        setDownAnimation(styles.buttonAnim);
        setUpAnimation(styles.dropDownFade);

        setTimeout(() => {
            setShowDown(false)

        }, 500)
        setTimeout(() => {
            setShowUp(true);
        }, 4500);



    };
    const router = useRouter()
    const handleExitClick = () => {
        setOutAnimation(styles.buttonAnim);
        setExitAnimation(styles.dropDownFadeOut);
        setUpAnimation(styles.dropDownFadeOut);
        setTimeout(() => {
            router.push("/home")




        }, 1000)

    }




    return (
        <div className="relative grid place-content-center py-10" style={isMobile ?
            { overflow: 'hidden', width: "100%", height: "100svh", alignContent: "space-between" } :
            { width: "100%", height: "100%", alignContent: "space-between" }}>
            {isMobile ? <></> : <div className='flex justify-center items-center content-center z-[80]  my-20 '>
                {!showUp ? <div className="h-10" ></div> :
                    <button className={`${upAnimation} font-bold text-white z-[80] rounded-full px-3 pt-1.5 transform hover:scale-105`} style={{ background: " linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.0) 110%), rgb(4 ,47, 46,1)" }}
                        onClick={() => {
                            setActiveIndex(activeIndex - 1);
                            console.log(activeIndex);
                            handleUpClick();

                        }}>^ </button>}
            </div>
            }
            {isMobile && showUp && <div className='flex justify-center items-center content-center z-[80]  '>
                <button className={`${upAnimation} font-bold text-white z-[80] rounded-3xl p-3 transform hover:scale-105`} style={{ background: " linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.0) 110%),rgb(4 ,47, 46,1)" }} onClick={() => {
                    setActiveIndex(activeIndex - 1);
                    handleUpClick();
                }}>
                    ^
                </button>
            </div>
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
                {!showDown ?
                    <div className="h-10 pb-12" ></div> :
                    <button className={`${downAnimation} h-10 font-bold text-white z-[80] pb-12 transition hover:scale-105 `} onClick={() => {
                        setActiveIndex(activeIndex + 1);
                        handleDownClick();



                    }}>ENTER
                    </button>}
            </div>
            <img className="absolute inset-0 z-[60]" src="/dusk1.png" style={{
                width: "100vw", transition: 'transform 5s ease-in-out .1s',
                transform: `translateX(0%) translateY(-${(activeIndex * 35) + 7}%)`
            }} />
            <img className="absolute inset-0 z-50" src="/dusk2.png" style={{
                width: "100vw", transition: 'transform 5s ease-in-out .2s',
                transform: `translateX(0%) translateY(-${(activeIndex * 20) + 7}%)`
            }} />
            <img className="absolute inset-0 z-30" src="/dusk3.png" style={{
                width: "100vw", transition: 'transform 5s ease-in-out .1s',
                transform: `translateX(0%) translateY(-${(activeIndex * 15) + 7}%)`
            }} />
            <img className="absolute inset-0 z-20" src="/dusk4.png" style={{
                width: "100vw", transition: 'transform 5s ease-in-out .1s',
                transform: `translateX(0%) translateY(-${(activeIndex * 12) + 7}%)`
            }} />
            <img className="absolute inset-0 z-10" src="/dusk5.png" style={{
                width: "100vw", transition: 'transform 5s ease-in-out .1s',
                transform: `translateX(0%) translateY(-${(activeIndex * 10) + 7}%)`
            }} />

            {!isMobile ? (<div className="absolute flex w-4/5 h-screen  flex-col justify-center items-center content-center z-[70]  my-10 text-white mx-[10%]" style={{

                transition: 'transform 6s ease-in-out .2s',
                transform: `translateX(0%) translateY(${((activeIndex - 1) * -200)}%)`
            }}>
                <div className={`${exitAnimation}`}>
                    <AnalyticsCardLandingVertica
                        imagePath="logo.png"
                        headerText=" Welcome to Colin's Portfolio"
                        bodyText="This is a collection of some of my work"
                        footerText="I'm a full stack software engineer located in Vancouver, British Columbia. I recently graduated from Simon Fraser University with a Bachelor of Science in Computer Science and Software Engineering. I've Specialized in JavaScript and typescript React development with prior experience in building customer-facing applications as well as experience in databases, networking and backend development." />
                </div>
                <button className={`${outAnimation} text-white z-[200] mt-20 rounded-3xl p-3 transform hover:scale-105`} style={{ background: " linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.0) 110%), rgb(4 ,47, 46,1)" }} onClick={() => { handleExitClick() }}>  VIEW PORTFOLIO  </button>
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