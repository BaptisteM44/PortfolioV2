// import React, {useRef, useEffect} from 'react'
// import '../styles/Transition.css'
// import {Power4} from 'gsap'

// function Transition({timeline}) {
//     const home = gsap.timeline();
//     const homeh2 = useRef(null)
//     const homeimg = useRef(null)
//     useEffect (() => {
//         home.from(homeh2.current, {
//         duration: 1.6,
//         skewX: 10,
//         x: -100,
//         opacity: 0
//         }, "-=3.5")
//         home.from(homeimg.current, {
//         duration: 1.8,
//         y:-200,
//         opacity:0
//         }, "-=3")
//     })
//     const trans = useRef(null);
//     useEffect(() => {
//         timeline.to(trans.current, {
//             duration: 4,
//             x:2500,
//             ease: Power4.easeOut
//         });
//     })
//     return(
//         <div>
//             <div className="transition-effect" ref={trans}></div>
//         </div>
//     )
// }

// export default Transition