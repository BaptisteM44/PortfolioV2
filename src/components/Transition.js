import React, { useEffect } from 'react';
import '../styles/Transition.css'
import { gsap } from 'gsap'

function TimelineSequence(props) {
    const slider = React.createRef();


    useEffect(() => {

        gsap.fromTo(".slider3", {y:"0%"}, {y:"100%", duration: 2, ease: "expo.out", delay: 1} )

        gsap.fromTo(".transi1", {y:"100%", opacity:0}, {y:"0%", duration: 2.2, ease: "expo.out", delay: 1, opacity:1} )
        gsap.fromTo(".transi2",{y:"100%", opacity:0},{y:"0%", duration: 2.2, ease: "expo.out", delay: 1.2, opacity:1} )
        gsap.fromTo( ".home_img_arrow",{y:"100%", opacity:0},{y:"0%", duration: 2.2, ease: "expo.out", delay: 1.4, opacity:1} )
        gsap.fromTo(".transiImg",{x:"100%", opacity:0},{x:"0%", duration: 2.2, ease: "expo.out", delay: 1.9, opacity:1} )
    }, [slider]);


    return (<>

        <div className="slider3" ref={slider}>

        </div>
        </>);
}

export default TimelineSequence