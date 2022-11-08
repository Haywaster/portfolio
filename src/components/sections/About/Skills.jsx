import React, { useState } from 'react';

const Skills = () => {
    const [width, setWidth] = useState(0)

    // useEffect(() => {
    //     const filling = setInterval(() => {
    //         if (width >= 90) {
    //             clearInterval(filling);
    //         } else {
    //             setWidth(prev => prev + 1)
    //         }
    //     }, 100);

    //     document.getElementById('skills').addEventListener("animationend", () => {
    //         return filling
    //     });
    //     // return () => document.getElementById('skills').removeEventListener("transitionend", console.log(123), false);
    //     return () => clearInterval(filling)
    // }, [width])

    return (
        <div
            onTransitionEnd={(e) => {
                if (e.propertyName === "transform") {
                    const filling = setInterval(() => {
                        setWidth(prev => {
                            if (prev >= 90 - 1) {
                                clearInterval(filling)
                            }
                            return prev + 1
                        })
                    }, 5)
                }
            }}
            id='skills' data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="top-center" className="flex flex-50-gt-sm waypoint bars-wrap animated slide-in-right">
            <div className="bar flex">
                <div className="bar fill" style={{ "width": `${width}%` }}>
                    <div className="tag bold flex">HTML</div>
                </div>
                <span>{width}%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={{ "width": "90%" }}>
                    <div className="tag bold flex">CSS</div>
                </div>
                <span>90%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={{ "width": "80%" }}>
                    <div className="tag bold flex">JavaScript</div>
                </div>
                <span>80%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={{ "width": "80%" }}>
                    <div className="tag bold flex">React + Redux</div>
                </div>
                <span>80%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={{ "width": "70%" }}>
                    <div className="tag bold flex">SASS, SCSS</div>
                </div>
                <span>70%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={{ "width": "65%" }}>
                    <div className="tag bold flex">GIT</div>
                </div>
                <span>65%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={{ "width": "50%" }}>
                    <div className="tag bold flex">UI Design</div>
                </div>
                <span>50%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={{ "width": "60%" }}>
                    <div className="tag bold flex">Photoshop</div>
                </div>
                <span>60%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={{ "width": "60%" }}>
                    <div className="tag bold flex">Bootstrap</div>
                </div>
                <span>60%</span>
            </div>

            <button onClick={() => setWidth(prev => prev + 1)}>Click me</button>
        </div>
    );
};

export default Skills;