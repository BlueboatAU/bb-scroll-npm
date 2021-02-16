import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const bbScroll = (
    { 
        scrub = 2, 
        defaults = {
            x: -200,
            y: -200,
            scaleFrom: 0,
            scaleTo: 1,
            ease: "linear",
        }
    }
) => {
    let sections = document.querySelectorAll('[bb-scroll-section]');

    sections.forEach(section => {

        let targets = section.querySelectorAll('[bb-scroll]');

        targets.forEach(target => {

            let bbType = target.getAttribute('bb-scroll');
            let tlDuration = {};

            let targetAtts = {
                x: target.hasAttribute('bb-scroll-x') ? target.getAttribute('bb-scroll-x') : defaults.x,
                y: target.hasAttribute('bb-scroll-y') ? target.getAttribute('bb-scroll-y') : defaults.y,
                scaleFrom: target.hasAttribute('bb-scroll-scale-from') ? target.getAttribute('bb-scroll-scale-from') : defaults.scaleFrom,
                scaleTo: target.hasAttribute('bb-scroll-scale-to') ? target.getAttribute('bb-scroll-scale-to') : defaults.scaleTo,
            }

            if(bbType === 'slide-in' || bbType === 'crush-u'){
                tlDuration.start = `center-=${window.innerHeight * 1}px center`;
                tlDuration.end = 'center center';
            } else if(bbType === 'slide-out'){
                tlDuration.start = 'center center';
                tlDuration.end = `center+=${window.innerHeight * 1}px center`;
            } else {
                tlDuration.start = `center-=${window.innerHeight * 1}px center`;
                tlDuration.end = `center+=${window.innerHeight * 1}px center`;
            }

            let tl = gsap.timeline({
                scrollTrigger: {
                    // markers:true,
                    trigger: section,
                //   pin: true,   // pin the trigger element while active
                    start: tlDuration.start,
                    end:  tlDuration.end,
                    scrub: scrub,
                }
            });


            if(bbType === 'slide-in'){
                tl.from(target, {x:targetAtts.x, y:targetAtts.y, ease:defaults.ease}, 0)
            } else if(bbType === 'slide-out'){
                tl.to(target, {x:targetAtts.x, y:targetAtts.y, ease:defaults.ease}, 0)
            } else if(bbType === 'crush-u'){
                tl.from(target, {y: '100%', ease:defaults.ease}, 0)
            } else {
                tl.fromTo(target, {x:-targetAtts.x, y:-targetAtts.y}, {x:targetAtts.x, y:targetAtts.y, ease:defaults.ease}, 0)
            }
        })
        

    })
    
}