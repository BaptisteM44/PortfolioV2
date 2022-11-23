import React, { useEffect } from 'react';
import '../styles/TimelineSequence.css'
import { gsap } from 'gsap'

function TimelineSequence(props) {
    const slider = React.createRef();


    useEffect(() => {

        gsap.to(".slider", {y:"-100%", duration: 2.2, ease: "expo.out",  delay: 2})
        gsap.to(".slider2", {x:"-100%", duration: 2.2, ease: "expo.out", delay: 3})
        gsap.to(".transi1",{y:"0%", duration: 2.2, ease: "expo.out", delay: 3, opacity:1} )
        gsap.to(".transi2",{y:"0%", duration: 2.2, ease: "expo.out", delay: 3.4, opacity:1} )
        gsap.to( ".home_img_arrow",{y:"0%", duration: 2.2, ease: "expo.out", delay: 3.4, opacity:1} )
        gsap.to(".home_img_background",{x:"0%", duration: 2.2, ease: "expo.out", delay: 3.8, opacity:1} )
        gsap.to(".navbar", {y:"0%", duration: 2.2, ease: "expo.out", delay: 4, opacity:1} )
    }, [slider]);


    return (<>
        <div className="slider" ref={slider}>
            
        </div>
        <div className="slider2" ref={slider}>

        </div>
        </>);
}

export default TimelineSequence