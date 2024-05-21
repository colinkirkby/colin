import { useState } from "react"
import styles from "../animation.module.css"

export default function SlideShow() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [barAnimation, setBarAnimation] = useState(styles.none)
    return (
        <div className="text-white flex flex-col">
            <div id="headers" className=" flex flex-col gap-2">
                <div className=" flex flex-row ">
                    <button className=" content-center justify-center mx-9" onClick={() => {
                        if (activeIndex !== 0) {
                            setActiveIndex(0); setBarAnimation(styles.headerAnimLeft);

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

                        }
                    }}>
                        <h1 className="m-auto ">
                            Personal Projects
                        </h1>
                    </button>
                </div>
                <div className="w-full">
                    <div className={`${barAnimation} w-1/2 bg-white h-2`} style={{

                    }} ></div>

                </div>
            </div >
        </div >)
}
