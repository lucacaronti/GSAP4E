import * as g4eu from './GSAP4E_utils.js'

gsap.registerPlugin(ScrollTrigger);

/**
 * Available options settable from Elementor
 */
var gsap4e_attributes = ['start', 'end', 'x', 'y', 'duration', 'ease', 'scrub', 'toggleActions',
                        'markers', 'no-mobile', 'no-tablet', 'scale', 'opacity', 'pin', 'pinSpacing', 'immediateRender'];





//************************************************************************************************//
//                                                                                                //
//                                       Image animation 1                                        //
//                                                                                                //
//************************************************************************************************//
let gsap4e_imgAnim1 = document.querySelectorAll('.gsap4e-imgAnim1');
gsap4e_imgAnim1.forEach(e => {
    if(e.hasChildNodes()){
        let e_ic = e.firstElementChild;
        if(e_ic.hasChildNodes()){
            let e_img = e_ic.firstElementChild;
            // Set custom styles
            e.style.overflow = "hidden";
            g4eu.disableTransformTransition(e_ic);
            e_ic.style.overflow = "hidden";
            let gsap4e_element_settings = g4eu.get_gsap4e_attributes(e);
            if(!('no-mobile' in gsap4e_element_settings && g4eu.isMobile()) && !('no-tablet' in gsap4e_element_settings && g4eu.isTabletOrMobile())){
                // Animation
                let e_tl = gsap.timeline({
                    immediateRender: ('immediateRender' in gsap4e_element_settings) ? gsap4e_element_settings.immediateRender : true,
                    scrollTrigger: {
                        trigger: e,
                        start: ('start' in gsap4e_element_settings) ? gsap4e_element_settings.start : 'top 70%',
                        end: ('end' in gsap4e_element_settings) ? gsap4e_element_settings.end : 'bottom top',
                        scrub: ('scrub' in gsap4e_element_settings) ? true : false,
                        pin: ('pin' in gsap4e_element_settings) ? true : false,
                        pinSpacing: ('pinSpacing' in gsap4e_element_settings) ? true : false,
                        toggleActions: ('toggleActions' in gsap4e_element_settings) ? gsap4e_element_settings.toggleActions : 'play none none reverse',
                        markers: ('markers' in gsap4e_element_settings) ? true : false
                    }
                });
                let yVal = ('y' in gsap4e_element_settings) ? gsap4e_element_settings.y : '0';
                let yValI = g4eu.invertCssDistance(yVal);
                let xVal = ('x' in gsap4e_element_settings) ? gsap4e_element_settings.x : '0';
                let xValI = g4eu.invertCssDistance(xVal);
                e_tl.from(e_ic, {
                    y: yVal,
                    x: xVal,
                    ease: ('ease' in gsap4e_element_settings) ? gsap4e_element_settings.ease : 'power1.Out',
                    duration: ('duration' in gsap4e_element_settings) ? gsap4e_element_settings.duration : '1.5',
                }, 0);
                e_tl.from(e_img, {
                    y: yValI,
                    x: xValI,
                    duration: ('duration' in gsap4e_element_settings) ? gsap4e_element_settings.duration : '1.5',
                    scale: ('scale' in gsap4e_element_settings) ? gsap4e_element_settings.scale : 1.3,
                    ease: ('ease' in gsap4e_element_settings) ? gsap4e_element_settings.ease : 'power1.Out',
                }, 0);
            }
        }
    }
});

//************************************************************************************************//
//                                                                                                //
//                                         Heading slide                                          //
//                                                                                                //
//************************************************************************************************//
let gsap4e_headingSlide = document.querySelectorAll('.gsap4e-headingSlide');
gsap4e_headingSlide.forEach(e => {
    if(e.hasChildNodes()){
        let e_ic = e.firstElementChild; // Get inner container
        if(e_ic.hasChildNodes()){
            let e_heading = e_ic.firstElementChild;
            let gsap4e_element_settings = g4eu.get_gsap4e_attributes(e);
            if(!('no-mobile' in gsap4e_element_settings && g4eu.isMobile()) && !('no-tablet' in gsap4e_element_settings && g4eu.isTabletOrMobile())){
                // Set custom styles
                g4eu.disableTransformTransition(e_ic);
                e.style.overflow = 'hidden';
                e_heading.style.display = 'block'; // Otherwise <span> does not work
                // Animation
                gsap.from(e_heading, {
                    y: ('y' in gsap4e_element_settings) ? gsap4e_element_settings.y : '0',
                    x: ('x' in gsap4e_element_settings) ? gsap4e_element_settings.x : '0',
                    duration: ('duration' in gsap4e_element_settings) ? gsap4e_element_settings.duration : '1',
                    ease: ('ease' in gsap4e_element_settings) ? gsap4e_element_settings.ease : 'power1.out',
                    immediateRender: ('immediateRender' in gsap4e_element_settings) ? gsap4e_element_settings.immediateRender : true,
                    scrollTrigger: {
                        trigger: e,
                        start: ('start' in gsap4e_element_settings) ? gsap4e_element_settings.start : 'top 80%',
                        end: ('end' in gsap4e_element_settings) ? gsap4e_element_settings.end : 'bottom top',
                        scrub: ('scrub' in gsap4e_element_settings) ? true : false,
                        pin: ('pin' in gsap4e_element_settings) ? true : false,
                        pinSpacing: ('pinSpacing' in gsap4e_element_settings) ? true : false,
                        toggleActions: ('toggleActions' in gsap4e_element_settings) ? gsap4e_element_settings.toggleActions : 'play none none reverse',
                        markers: ('markers' in gsap4e_element_settings) ? true : false
                    }
                });
            }
        }
    }
});

//************************************************************************************************//
//                                                                                                //
//                                           Text slide                                           //
//                                                                                                //
//************************************************************************************************//
let gsap4e_textSlide = document.querySelectorAll('.gsap4e-textSlide');
gsap4e_textSlide.forEach(e => {
    if(e.hasChildNodes()){
        let e_ic = e.firstElementChild;
        if(e_ic.hasChildNodes()){
            let gsap4e_element_settings = g4eu.get_gsap4e_attributes(e);
            if(!('no-mobile' in gsap4e_element_settings && g4eu.isMobile()) && !('no-tablet' in gsap4e_element_settings && g4eu.isTabletOrMobile())){
                // Set custom styles
                g4eu.disableTransformTransition(e_ic);
                e.style.overflow = 'hidden';
                // Animation
                e_ic.childNodes.forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE && node.nodeName.toLowerCase() !== 'style') {
                        gsap.from(node, {
                            y: ('y' in gsap4e_element_settings) ? gsap4e_element_settings.y : '0',
                            x: ('x' in gsap4e_element_settings) ? gsap4e_element_settings.x : '0',
                            opacity: ('opacity' in gsap4e_element_settings) ? gsap4e_element_settings.opacity : '1',
                            duration: ('duration' in gsap4e_element_settings) ? gsap4e_element_settings.duration : '0.5',
                            ease: ('ease' in gsap4e_element_settings) ? gsap4e_element_settings.ease : 'power1.out',
                            immediateRender: ('immediateRender' in gsap4e_element_settings) ? gsap4e_element_settings.immediateRender : true,
                            scrollTrigger: {
                                trigger: e,
                                start: ('start' in gsap4e_element_settings) ? gsap4e_element_settings.start : 'top 80%',
                                end: ('end' in gsap4e_element_settings) ? gsap4e_element_settings.end : 'bottom top',
                                scrub: ('scrub' in gsap4e_element_settings) ? true : false,
                                pin: ('pin' in gsap4e_element_settings) ? true : false,
                                pinSpacing: ('pinSpacing' in gsap4e_element_settings) ? true : false,
                                toggleActions: ('toggleActions' in gsap4e_element_settings) ? gsap4e_element_settings.toggleActions : 'play none none reverse',
                                markers: ('markers' in gsap4e_element_settings) ? true : false
                            }
                        });
                    }
                })
            }
        }
    }
});


//************************************************************************************************//
//                                                                                                //
//                                         Element slide                                          //
//                                                                                                //
//************************************************************************************************//

let gsap4e_elementSlide = document.querySelectorAll('.gsap4e-elementSlide');
gsap4e_elementSlide.forEach(e => {
    let gsap4e_element_settings = g4eu.get_gsap4e_attributes(e);
    if(!('no-mobile' in gsap4e_element_settings && g4eu.isMobile()) && !('no-tablet' in gsap4e_element_settings && g4eu.isTabletOrMobile())){
        // Set custom style
        g4eu.disableTransformTransition(e);
        // Animation
        gsap.from(e, {
            y: ('y' in gsap4e_element_settings) ? gsap4e_element_settings.y : '0',
            x: ('x' in gsap4e_element_settings) ? gsap4e_element_settings.x : '0',
            duration: ('duration' in gsap4e_element_settings) ? gsap4e_element_settings.duration : '0.5',
            ease: ('ease' in gsap4e_element_settings) ? gsap4e_element_settings['ease'] : 'power2.out',
            immediateRender: ('immediateRender' in gsap4e_element_settings) ? gsap4e_element_settings.immediateRender : true,
            scrollTrigger: {
                trigger: e,
                start: ('start' in gsap4e_element_settings) ? gsap4e_element_settings.start : 'top 80%',
                end: ('end' in gsap4e_element_settings) ? gsap4e_element_settings.end : 'bottom top',
                scrub: ('scrub' in gsap4e_element_settings) ? true : false,
                pin: ('pin' in gsap4e_element_settings) ? true : false,
                pinSpacing: ('pinSpacing' in gsap4e_element_settings) ? true : false,
                toggleActions: ('toggleActions' in gsap4e_element_settings) ? gsap4e_element_settings.toggleActions : 'play none none reverse',
                markers: ('markers' in gsap4e_element_settings) ? true : false
            }
        });
    }
});