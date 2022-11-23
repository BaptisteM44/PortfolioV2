import React, { useEffect } from 'react';
import '../styles/TimelineSequence.css'
import { gsap } from 'gsap'

function TimelineSequence(props) {
    const slider = React.createRef();


    useEffect(() => {

        gsap.to(".slider", {y:"-100%", duration: 2.2, ease: "expo.out",  delay: 1})
        gsap.to(".slider2", {x:"-100%", duration: 2.2, ease: "expo.out", delay: 2})

        gsap.fromTo(".transi1", {y:"100%", opacity:0}, {y:"0%", duration: 2.2, ease: "expo.out", delay: 2.5, opacity:1} )

        gsap.fromTo(".transi2",{y:"100%", opacity:0},{y:"0%", duration: 2.2, ease: "expo.out", delay: 2.8, opacity:1} )
        gsap.fromTo( ".home_img_arrow",{y:"100%", opacity:0},{y:"0%", duration: 2.2, ease: "expo.out", delay: 2.9, opacity:1} )
        gsap.fromTo(".transiImg",{x:"100%", opacity:0},{x:"0%", duration: 2.2, ease: "expo.out", delay: 3, opacity:1} )

        gsap.fromTo(".navbar",{y:"100%", opacity:0}, {y:"0%", duration: 2.2, ease: "expo.out", delay: 3.2, opacity:1} )
    }, [slider]);


    return (<>
        <div className="slider" ref={slider}>
            
        </div>
        <div className="slider2" ref={slider}>

        </div>
        </>);
}

export default TimelineSequence