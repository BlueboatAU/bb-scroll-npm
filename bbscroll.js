import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const bbScroll = ({ scrub = 2 }) => {
    let sections = document.querySelectorAll('[bb-scroll-section]');

    sections.forEach(section => {

        let targets = section.querySelectorAll('[bb-scroll]');

        let tl = gsap.timeline({
            scrollTrigger: {
                // markers:true,
                trigger: section,
            //   pin: true,   // pin the trigger element while active
                start: `center-=${window.innerHeight * 1}px center`, // when the top of the trigger hits the top of the viewport
                end: `center+=${window.innerHeight * 1}px center` , // end after scrolling 500px beyond the start
                scrub: scrub, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
          });   

        targets.forEach(target => {

            let targetBB = {
                x: target.hasAttribute('bb-scroll-x') ? target.getAttribute('bb-scroll-x') : 0,
                y: target.hasAttribute('bb-scroll-y') ? target.getAttribute('bb-scroll-y') : 0
            }

            tl.fromTo(target, {x:-targetBB.x, y:-targetBB.y}, {x:targetBB.x, y:targetBB.y , ease:'linear'}, 0)
        })
        

    })
    
}