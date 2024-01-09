import '../styles/ScrollText.css'
import React, { useEffect } from 'react';
import { gsap } from 'gsap'

function ScrollText(props) {
    const ScrollText = React.createRef();


    useEffect(() => {
        gsap.set(".rollingText", {xPercent: -120})
        gsap.set(".rollingText02", {xPercent: 20})

        gsap.to(".rollingText", {
            xPercent: 20,
            scrollTrigger: {
            trigger: ".rolling",
            scrub: true,
            start: "top bottom",
            end: "center top",
            markers: false,
        }
        });
        gsap.to(".rollingText02", {
            xPercent: -120,
            scrollTrigger: {
            trigger: ".interest",
            scrub: true,
            start: "top bottom",
            end: "center top",
            markers: false
        }
        });

    }, [ScrollText]);


    return (<>
            <div className="rolling">
                <div className="wrapperRollingText">
                    <div className="rollingText text" ref={ScrollText}>
                    REACT.JS - HTML - CSS - SASS - JAVASCRIPT - GSAP
                    </div>
                </div>

                <div className="wrapperRollingText02">
                    <div className="rollingText02 text" ref={ScrollText}>
                        SEO - CREATIVITY - PERFORMANCE - ANIMATION
                    </div>
                </div>    
            </div>
            
                </>);
}

export default ScrollText