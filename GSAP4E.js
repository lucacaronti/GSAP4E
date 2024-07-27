gsap.registerPlugin(ScrollTrigger);

/**
 * Available options settable from Elementor
 */
// For gsap animation and scrolltrigger
var gsap4e_attributes = ['start', 'end', 'x', 'y', 'duration', 'ease', 'scrub', 'toggleActions',
                        'markers', 'scale', 'opacity', 'pin', 'pinSpacing', 'immediateRender',
						'stagger', 'stagger-each', 'stagger-from', 'stagger-grid', 'stagger-ease',
                        'stagger-amount', 'rotationX', 'rotationY', 'transforOrigin', 'delay'];

                        // For other general purpose settings
gsap4e_attributes.push('animateChild', 'overflowHidden', 'animationTo', 'no-mobile', 'no-tablet');

// To define predefined animations
gsap4e_attributes.push('anim1', 'elementScale1', 'fadeIn');

class gsap4eParameter{
    constructor(g4ees) {
        this.param = {};
        this.animationType = ('animationTo' in g4ees) ? 'to': 'from';

        // Animation parameters
        if('y' in g4ees) this.param.y = g4ees.y;
        if('x' in g4ees) this.param.x = g4ees.x;
        if('opacity' in g4ees) this.param.opacity = g4ees.opacity;
        if('duration' in g4ees) this.param.duration = g4ees.duration;
        if('ease' in g4ees) this.param.ease = g4ees.ease;
        if('immediateRender' in g4ees) this.param.immediateRender = g4ees.immediateRender;
        if('rotationX' in g4ees) this.param.rotationX = g4ees.rotationX;
        if('rotationY' in g4ees) this.param.rotationY = g4ees.rotationY;
        if('scale' in g4ees) this.param.scale = g4ees.scale;
        if('transformOrigin' in g4ees) this.param.transformOrigin = g4ees.transformOrigin;
        if('delay' in g4ees) this.param.delay = g4ees.delay;

        this.param.stagger = {};
        if('stagger' in g4ees) this.param.stagger.each = g4ees.stagger;
        if('stagger-each' in g4ees) this.param.stagger.each = g4ees['stagger-each'];
        if('stagger-from' in g4ees) this.param.stagger.from = g4ees['stagger-from'];
        if('stagger-grid' in g4ees) this.param.stagger.grid = g4ees['stagger-grid'];
        if('stagger-ease' in g4ees) this.param.stagger.ease = g4ees['stagger-ease'];
        if('stagger-amount' in g4ees) this.param.stagger.amount = g4ees['stagger-amount'];
        
        // Scrolltrigger parameters
        this.param.scrollTrigger = {};
        if('start' in g4ees) this.param.scrollTrigger.start = g4ees.start;
        if('end' in g4ees) this.param.scrollTrigger.end = g4ees.end;
        if('scrub' in g4ees) this.param.scrollTrigger.scrub = g4ees.scrub;
        if('pin' in g4ees) this.param.scrollTrigger.pin = true;
        if('pinSpacing' in g4ees) this.param.scrollTrigger.pinSpacing = true;
        if('toggleActions' in g4ees) this.param.scrollTrigger.toggleActions = g4ees.toggleActions;
        if('markers' in g4ees) this.param.scrollTrigger.markers = true;
    }
}

//************************************************************************************************//
//                                                                                                //
//                                        Helper functions                                        //
//                                                                                                //
//************************************************************************************************//              
/**
 * Check is the screen width is mobile (<= 768px)
 * @returns true/false
 */
function isMobile(){
    return window.innerWidth <= 768;
}

/**
 * Chech is the screen width is mobile or tablet (<= 1024px)
 * @returns true/false
 */
function isTabletOrMobile(){
    return window.innerWidth <= 1024;
}

function get_gsap4e_attributes(element){
    var settings = {};
    gsap4e_attributes.forEach(attribute => {
        if(element.hasAttribute('data-gsap4e-' + attribute)){
            settings[attribute] = element.getAttribute('data-gsap4e-' + attribute);
        }
    });
    return settings;
}

function disableTransformTransition(element) {
    let currentTransition = window.getComputedStyle(element).transition;
    let newTransition = currentTransition
        .split(',')
        .filter(transition => !transition.includes('transform'))
        .join(',');
    element.style.transition = newTransition;
}

function invertCssDistance(distance) {
    const regex = /^(-?\d*\.?\d+)([a-z%]*)$/;
    const match = distance.match(regex);
    
    if (!match) return 0;

    const value = parseFloat(match[1]);
    const unit = match[2];
  
    const invertedValue = -value;
  
    return invertedValue + unit;
}

let gsap4e_fadeIn = document.querySelectorAll('.gsap4e-fadeIn');
gsap4e_fadeIn.forEach(element => {
    let gsap4e_element_settings = get_gsap4e_attributes(element);
    if(!('no-mobile' in gsap4e_element_settings && isMobile()) && !('no-tablet' in gsap4e_element_settings && isTabletOrMobile())){
        gsap.from(element, {
            opacity: 0,
            duration: ('duration' in gsap4e_element_settings) ? gsap4e_element_settings['duration'] : '0.5',
            ease: ('ease' in gsap4e_element_settings) ? gsap4e_element_settings['ease'] : 'power1.inOut',
            immediateRender: ('immediateRender' in gsap4e_element_settings) ? gsap4e_element_settings.immediateRender : true,
            scrollTrigger: {
                trigger: element,
                start: ('start' in gsap4e_element_settings) ? gsap4e_element_settings['start'] : 'top 80%',
                toggleActions: ('toggleActions' in gsap4e_element_settings) ? gsap4e_element_settings['toggleActions'] : 'play none none reverse',
                markers: ('markers' in gsap4e_element_settings) ? 'true' : false,
            }
        });
    }
});




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
            disableTransformTransition(e_ic);
            e_ic.style.overflow = "hidden";
            let gsap4e_element_settings = get_gsap4e_attributes(e);
            if(!('no-mobile' in gsap4e_element_settings && isMobile()) && !('no-tablet' in gsap4e_element_settings && isTabletOrMobile())){
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
                let yValI = invertCssDistance(yVal);
                let xVal = ('x' in gsap4e_element_settings) ? gsap4e_element_settings.x : '0';
                let xValI = invertCssDistance(xVal);
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
            let gsap4e_element_settings = get_gsap4e_attributes(e);
            if(!('no-mobile' in gsap4e_element_settings && isMobile()) && !('no-tablet' in gsap4e_element_settings && isTabletOrMobile())){
                // Set custom styles
                disableTransformTransition(e_ic);
                e.style.overflow = 'hidden';
                e_heading.style.display = 'block'; // Otherwise <span> does not work
                // Animation
                gsap.from(e_heading, {
                    y: ('y' in gsap4e_element_settings) ? gsap4e_element_settings.y : '0',
                    x: ('x' in gsap4e_element_settings) ? gsap4e_element_settings.x : '0',
                    opacity: ('opacity' in gsap4e_element_settings) ? gsap4e_element_settings.opacity : '1',
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
            let gsap4e_element_settings = get_gsap4e_attributes(e);
            if(!('no-mobile' in gsap4e_element_settings && isMobile()) && !('no-tablet' in gsap4e_element_settings && isTabletOrMobile())){
                // Set custom styles
                disableTransformTransition(e_ic);
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
//                                         Element animation                                          //
//                                                                                                //
//************************************************************************************************//

function setElemAnimPred(g4ep, g4ees){

    if('elementScale1' in g4ees){
        g4ep.param.ease = 'linear';
        g4ep.param.scrollTrigger.start = 'center center';
        g4ep.param.scrollTrigger.end = 'bottom top';
        g4ep.param.scale = 1.5;
        g4ep.param.scrollTrigger.toggleActions = 'play none none reverse';
        g4ep.param.scrollTrigger.scrub = true;
        g4ep.animationType = 'to';
    }
    if('fadeIn' in g4ees){
        g4ep.param.opacity = 0;
        g4ep.param.scrollTrigger.start = 'top 80%';
        g4ep.param.duration = 1.5;
        g4ep.param.scrollTrigger.toggleActions = 'play none none reset';
    }
}

let gsap4e_elementSlide = document.querySelectorAll('.gsap4e-elemAnim');
gsap4e_elementSlide.forEach(e => {

    let gsap4e_element_settings = get_gsap4e_attributes(e);
    let e_toAnim = ('animateChild' in gsap4e_element_settings) ? e.firstElementChild : e;
    if(!('no-mobile' in gsap4e_element_settings && isMobile()) && !('no-tablet' in gsap4e_element_settings && isTabletOrMobile())){
        // Set custom style
        disableTransformTransition(e);
        e_toAnim.style.transition = 'none';
        if('overflowHidden' in gsap4e_element_settings) e.style.overflow = 'hidden';


        let g4ep = new gsap4eParameter(gsap4e_element_settings);
        setElemAnimPred(g4ep, gsap4e_element_settings);
        g4ep.param.scrollTrigger.trigger = e;
        // Animation
        if(g4ep.animationType === 'from')
            gsap.from(e_toAnim, g4ep.param);
        else{
            gsap.to(e_toAnim, g4ep.param);
            console.log('animatin tooo');
        }

    }
});

//************************************************************************************************//
//                                                                                                //
//                                        Text animation 1                                        //
//                                                                                                //
//************************************************************************************************//

function setTextAnimPredefined(g4ep, g4ees){

    // Default values
    if(!('y' in g4ees)) g4ep.param.y = '100%';
    if(!('start' in g4ees)) g4ep.param.scrollTrigger.start = 'top 80%';
    if(!('end' in g4ees)) g4ep.param.scrollTrigger.end = 'bottom top';
    if(!('toggleActions' in g4ees)) g4ep.param.scrollTrigger.toggleActions = 'play none none reset';
    if(!('opacity' in g4ees)) g4ep.param.opacity = 0;

    if('anim1' in g4ees){
        g4ep.param.y = 20;
        g4ep.param.transformOrigin = '0% 80%';
        g4ep.param.ease = 'back';
        g4ep.param.rotationX = 60;
        g4ep.param.stagger.each = .1;
    }
}

let gsap4e_textAnim1 = document.querySelectorAll('.gsap4e-textAnim');
gsap4e_textAnim1.forEach(e => {
    let gsap4e_element_settings = get_gsap4e_attributes(e);
    if(!('no-mobile' in gsap4e_element_settings && isMobile()) && !('no-tablet' in gsap4e_element_settings && isTabletOrMobile())){
        // Set custom style
        disableTransformTransition(e);
        if('overflowHidden' in gsap4e_element_settings) e.style.overflow = 'hidden';
        
        let text = e.querySelectorAll('h1, h2, h3, h4, h5, h6, span, p');
        if(text){
            let textSplit = new SplitType(text[0], { types: 'chars' });
            let letters = e.querySelectorAll('.char');
    
            let g4ep = new gsap4eParameter(gsap4e_element_settings);
            setTextAnimPredefined(g4ep, gsap4e_element_settings);
            g4ep.param.scrollTrigger.trigger = e;
            // Animation
            gsap.from(letters, g4ep.param);
        }
    }
});