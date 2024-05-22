import { useState } from "react"
import styles from "../animation.module.css"
import { motion } from "framer-motion"
import Carousel from "./carousel"
import { AnalyticsCardButtonLeft } from "../analyticsBanner"
import { Row } from "antd"

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
    const work: JSX.Element[] = [<AnalyticsCardButtonLeft
        imagePath="/ct_text_cropped.png"
        headerText="CarTracked"
        bodyText="Designed and built a mobile version of the cartracked application as well as redesigning and rebuilding significant portions of the desktop application."
        backgroundImg="/cartrackedBackground.png"
        buttonText="View Demo"
        buttonLink="https://www.loom.com/share/e06549ba2f5347eb95672ad52a765a5c"
    />, <AnalyticsCardButtonLeft
        imagePath="/build.png"
        headerText="Build Direct"
        backgroundImg="/bd_back.png"
        bodyText="Worked as a full stack developer maintaining BuildDirects online storefront. I helped build and launch a revamped version of the webpage designed to leverage the new NextJS feature set. Bringing page load times down 90% to 1-2 seconds per page."
        buttonText="Visit Page"
        buttonLink="https://www.builddirect.com/"
    />, <AnalyticsCardButtonLeft
        imagePath="/portable1.png"
        headerText="Portable Electric Neuron os"
        backgroundImg="/portable.png"
        bodyText="Built a React based JavaScript application using AWS serverless ecosystem. This application allowed for easy deployment and rental managment of the company's portable battery units."
        buttonText="Visit Page"
        buttonLink="https://portable-electric.com/neuron-os/"
    />]
    const personal: JSX.Element[] = [<AnalyticsCardButtonLeft
        imagePath="/bannersquare.png"
        headerText="StreamLine WIP"
        bodyText="A work in progress SAAS project designed using AWS cloud services and NextJS. Intended to simplyfy retail workspaces and bring value to managment teams."
        backgroundImg="/stream_bg.png"
        buttonText="Visit Page"
        buttonLink="https://stream-line.vercel.app/"
    />, <AnalyticsCardButtonLeft
        imagePath="/ufree.png"
        headerText="Calendar Application"
        backgroundImg="/free_bg.png"
        bodyText="A TypeScript based calendar application leveraging browser storage. This was a project to learn TypeScript and build more complicated functional UI."
        buttonText="Visit Page"
        buttonLink="https://ufreecalendar.vercel.app/"
    />]


    return (
        <div className="text-white flex flex-col w-max-full h-max-full overflow-hidden">
            < motion.div
                className='z-30 w-max-full h-max-full overflow-hidden'
                variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 }
                }
                }
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
                {
                    showWork &&
                    <div className={`${workAnim} overflow-hidden`}>
                        <div className="width-[1000px] h-[500px]  p-7 " style={{
                            transition: 'transform 2s ease-in-out .2s',
                            transform: `translateX(0%) translateY(${-((activeSlides) * 115)}%)`
                        }}>
                            <div >
                                <Carousel items={work} />
                            </div>


                        </div>
                    </div>
                }
                {
                    showProjects &&
                    <div className={`${projectAnim} overflow-hidden`}>
                        <div className="width-[1000px] h-[500px]  p-7 " style={{
                            transition: 'transform 2s ease-in-out .2s',
                            transform: `translateX(0%) translateY(${-((activeSlides) * 115)}%)`
                        }}>
                            <div >
                                <Carousel items={personal} />
                            </div>


                        </div>
                    </div>
                }

                <Row justify="center" style={{ marginTop: "50px" }}>
                    <a href="https://www.linkedin.com/in/colin-kirkby-253909178">
                        <button className="p-3.5 px-5 bg-teal-950 text-white font-bold text-sm rounded-full transition hover:scale-105" style={{ background: ` linear-gradient(180deg, rgba(255, 255, 255, 0.18) 100%, rgba(255, 255, 255, 0.0) 0%), rgb(4 ,47, 46,1)`, marginTop: "20px", textAlign: "center" }}>
                            Visit My LinkedIn</button>
                    </a>
                </Row>
            </motion.div >
        </div >)
}
