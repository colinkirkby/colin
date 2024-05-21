import { useState } from "react"
import styles from "../animation.module.css"
import { motion } from "framer-motion"
import Carousel from "./carousel"

export default function SlideShow() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [activeSlides, setActiveSlides] = useState(0)
    const [barAnimation, setBarAnimation] = useState(styles.none)
    const [showWork, setShowWork] = useState(true)
    const [showProjects, setShowProjects] = useState(false)
    const [workAnim, setWorkAnim] = useState(styles.buttonIn)
    const [projectAnim, setProjectAnim] = useState(styles.buttonIn)
    const handleProjectClick = () => {
        setWorkAnim(styles.boardAnim);
        setProjectAnim(styles.dropDownFade);

        setTimeout(() => {
            setWorkAnim(styles.dropDownFade);
            setShowProjects(true);
            setShowWork(false);
        }, 800)

    }
    const handleWorkClick = () => {
        setProjectAnim(styles.boardAnim);
        setWorkAnim(styles.dropDownFade);

        setTimeout(() => {
            setProjectAnim(styles.dropDownFade);
            setShowProjects(false);
            setShowWork(true);
        }, 800)

    }
    return (
        <div className="text-white flex flex-col  w-max-full h-max-full overflow-hidden">
            <motion.div
                className='z-30 w-max-full h-max-full overflow-hidden'
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 4, delay: 0 }}
            >
                <div id="headers" className="relative flex flex-col gap-2 w-[403px] z-[100] mx-20">
                    <div className=" flex flex-row ">
                        <button className=" content-center justify-center mx-9" onClick={() => {
                            if (activeIndex !== 0) {
                                setActiveIndex(0); setBarAnimation(styles.headerAnimLeft);
                                handleWorkClick()

                            }
                        }}>
                            <h1 className="m-auto " >
                                Work Experience
                            </h1>
                        </button>

                        <button className=" content-center justify-center mx-9" onClick={() => {
                            if (activeIndex !== 1) {
                                setActiveIndex(1);
                                setBarAnimation(styles.headerAnimRight);
                                handleProjectClick();

                            }
                        }}>
                            <h1 className="m-auto ">
                                Personal Projects
                            </h1>
                        </button>
                    </div>
                    <div className="w-full ">
                        <div className={`${barAnimation} w-1/2 bg-white h-1 rounded-md`} style={{

                        }} ></div>

                    </div>
                </div >
                {showWork &&
                    <div className={`${workAnim} overflow-hidden`}>
                        <div className="width-[1000px] h-[500px]  p-7 " style={{
                            transition: 'transform 2s ease-in-out .2s',
                            transform: `translateX(0%) translateY(${-((activeSlides) * 115)}%)`
                        }}>
                            <div >
                                <Carousel />
                            </div>

                            <div className=" mt-32">
                                <Carousel />

                            </div>
                        </div>
                    </div>}
                {showProjects &&
                    <div className={`${projectAnim} overflow-hidden`}>
                        <div className="width-[1000px] h-[500px]  p-7 " style={{
                            transition: 'transform 2s ease-in-out .2s',
                            transform: `translateX(0%) translateY(${-((activeSlides) * 115)}%)`
                        }}>
                            <div >
                                <Carousel />
                            </div>

                            <div className=" mt-32">
                                <Carousel />

                            </div>
                        </div>
                    </div>}


            </motion.div>
        </div >)
}
