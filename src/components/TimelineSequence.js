import React, { useEffect } from 'react';
import '../styles/TimelineSequence.css'
import { gsap } from 'gsap'

function TimelineSequence() {
    const slider1 = React.createRef();
    const slider2 = React.createRef();

    const animateFromTo = (selector, from, to) => {
        gsap.fromTo(selector, from, to)
    }

    useEffect(() => {
        gsap.to(".slider", {y:"-100%", duration: 2.2, ease: "expo.out",  delay: 1})
        gsap.to(".slider2", {x:"-100%", duration: 2.2, ease: "expo.out", delay: 2})

        animateFromTo(".transi1", {y:"100%", opacity:0}, {y:"0%", duration: 2.2, ease: "expo.out", delay: 2.5, opacity:1})
        animateFromTo(".transi2",{y:"100%", opacity:0},{y:"0%", duration: 2.2, ease: "expo.out", delay: 2.8, opacity:1})
        animateFromTo(".home_img_arrow",{y:"100%", opacity:0},{y:"0%", duration: 2.2, ease: "expo.out", delay: 2.9, opacity:1})
        animateFromTo(".transiImg",{x:"100%", opacity:0},{x:"0%", duration: 2.2, ease: "expo.out", delay: 3, opacity:1})
        animateFromTo(".navbar",{y:"100%", opacity:0}, {y:"0%", duration: 2.2, ease: "expo.out", delay: 3.2, opacity:1})

    }, []);

    return (<>
        <div className="slider" ref={slider1}></div>
        <div className="slider2" ref={slider2}></div>
    </>);
}

export default TimelineSequence
