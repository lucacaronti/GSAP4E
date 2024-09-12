gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

/**
 * Available options settable from Elementor
 */
// For gsap animation styles
var gsap4e_attributes = ['backgroundColor', 'borderColor', 'borderRadius', 'borderWidth', 'bottom', 'boxShadow', 'clipPath',
    'color', 'height', 'immediateRender', 'left', 'margin', 'opacity', 'padding', 'right', 'rotation', 'rotationX', 'rotationY',
    'rotationZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY', 'textShadow', 'top', 'transforOrigin', 'width', 'x',
    'y', 'z', 'zIndex'];


// For timing
gsap4e_attributes.push('duration', 'stagger', 'stagger-each', 'stagger-from', 'stagger-grid', 'stagger-ease', 'stagger-amount',
    'delay', 'yoyo', 'repeat', 'ease', 'repeatDelay');

// For scrollTrigger
gsap4e_attributes.push('start', 'end', 'scrub', 'toggleActions', 'markers', 'pin', 'pinSpacing');

// For motion path animations
gsap4e_attributes.push('motionPathId', 'motionPathStart', 'motionPathEnd', 'motionPathOrigin', 'motionPathAutoRotate');

// For other general purpose settings
gsap4e_attributes.push('animateChild', 'overflowHidden', 'animationTo', 'no-mobile', 'no-tablet', 'animSelector',
    'splitType', 'triggerSelector');

// To define predefined animations
gsap4e_attributes.push('textAnim1', 'elementScale1', 'fadeIn', 'textOpacityAnim', 'imgAnim1');

class gsap4eParameter {
    constructor(g4ees, triggerElement) {
        this.param = {};
        this.animationType = ('animationTo' in g4ees) ? 'to' : 'from';

        // Animation parameters
        if ('y' in g4ees) this.param.y = g4ees.y;
        if ('x' in g4ees) this.param.x = g4ees.x;
        if ('z' in g4ees) this.param.z = g4ees.z;
        if ('width' in g4ees) this.param.width = g4ees.width;
        if ('height' in g4ees) this.param.height = g4ees.height;
        if ('opacity' in g4ees) this.param.opacity = g4ees.opacity;
        if ('duration' in g4ees) this.param.duration = g4ees.duration;
        if ('ease' in g4ees) this.param.ease = g4ees.ease;
        if ('immediateRender' in g4ees) this.param.immediateRender = g4ees.immediateRender;
        if ('rotationX' in g4ees) this.param.rotationX = g4ees.rotationX;
        if ('rotationY' in g4ees) this.param.rotationY = g4ees.rotationY;
        if ('rotationZ' in g4ees) this.param.rotationZ = g4ees.rotationZ;
        if ('rotation' in g4ees) this.param.rotation = g4ees.rotation;
        if ('scale' in g4ees) this.param.scale = g4ees.scale;
        if ('scaleX' in g4ees) this.param.scaleX = g4ees.scaleX;
        if ('scaleY' in g4ees) this.param.scaleY = g4ees.scaleY;
        if ('scaleZ' in g4ees) this.param.scaleZ = g4ees.scaleZ;
        if ('transformOrigin' in g4ees) this.param.transformOrigin = g4ees.transformOrigin;
        if ('delay' in g4ees) this.param.delay = g4ees.delay;
        if ('yoyo' in g4ees) this.param.yoyo = true;
        if ('repeat' in g4ees) this.param.repeat = g4ees.repeat;
        if ('repeatDelay' in g4ees) this.param.repeatDelay = g4ees.repeatDelay;
        if ('backgroundColor' in g4ees) this.param.backgroundColor = g4ees.backgroundColor;
        if ('borderColor' in g4ees) this.param.borderColor = g4ees.borderColor;
        if ('borderWidth' in g4ees) this.param.borderWidth = g4ees.borderWidth;
        if ('borderRadius' in g4ees) this.param.borderRadius = g4ees.borderRadius;
        if ('padding' in g4ees) this.param.padding = g4ees.padding;
        if ('margin' in g4ees) this.param.margin = g4ees.margin;
        if ('top' in g4ees) this.param.top = g4ees.top;
        if ('right' in g4ees) this.param.right = g4ees.right;
        if ('bottom' in g4ees) this.param.bottom = g4ees.bottom;
        if ('left' in g4ees) this.param.left = g4ees.left;
        if ('skewX' in g4ees) this.param.skewX = g4ees.skewX;
        if ('skewY' in g4ees) this.param.skewY = g4ees.skewY;
        if ('textShadow' in g4ees) this.param.textShadow = g4ees.textShadow;
        if ('boxShadow' in g4ees) this.param.boxShadow = g4ees.boxShadow;
        if ('clipPath' in g4ees) this.param.clipPath = g4ees.clipPath;
        if ('zIndex' in g4ees) this.param.zIndex = g4ees.zIndex;

        this.param.stagger = {};
        if ('stagger' in g4ees) this.param.stagger.each = g4ees.stagger;
        if ('stagger-each' in g4ees) this.param.stagger.each = g4ees['stagger-each'];
        if ('stagger-from' in g4ees) this.param.stagger.from = g4ees['stagger-from'];
        if ('stagger-grid' in g4ees) this.param.stagger.grid = g4ees['stagger-grid'];
        if ('stagger-ease' in g4ees) this.param.stagger.ease = g4ees['stagger-ease'];
        if ('stagger-amount' in g4ees) this.param.stagger.amount = g4ees['stagger-amount'];

        // Scrolltrigger parameters
        this.param.scrollTrigger = {};
        if ('triggerSelector' in g4ees){
            const _triggerElement = document.querySelector(g4ees.triggerSelector);
            if(_triggerElement) this.param.scrollTrigger.trigger = _triggerElement;
            else console.error(`[GSAP4E-error] Unable to find trigger element '${g4ees.triggerSelector}'`);
        }
        if(!('triggerSelector' in g4ees)){
            this.param.scrollTrigger.trigger = triggerElement;
        }
        if ('start' in g4ees) this.param.scrollTrigger.start = g4ees.start;
        if ('end' in g4ees) this.param.scrollTrigger.end = g4ees.end;
        if ('scrub' in g4ees) this.param.scrollTrigger.scrub = g4ees.scrub;
        if ('pin' in g4ees) this.param.scrollTrigger.pin = true;
        if ('pinSpacing' in g4ees) this.param.scrollTrigger.pinSpacing = true;
        if ('toggleActions' in g4ees) this.param.scrollTrigger.toggleActions = g4ees.toggleActions;
        if ('markers' in g4ees) this.param.scrollTrigger.markers = true;

        // Motion path
        if ('motionPathId' in g4ees) {
            this.param.motionPath = {};
            if ('motionPathId' in g4ees) {
                this.param.motionPath.path = '#' + g4ees.motionPathId;
                this.param.motionPath.align = '#' + g4ees.motionPathId;
                this.param.motionPath.alignOrigin = [0.5, 0.5];
            }
            if ('motionPathStart' in g4ees) this.param.motionPath.start = g4ees.motionPathStart;
            if ('motionPathEnd' in g4ees) this.param.motionPath.end = g4ees.motionPathEnd;
        }
    }
}

//------------------------------------------------------------------------------------------------//
//                                                                                                //
//                                        Helper functions                                        //
//                                                                                                //
//------------------------------------------------------------------------------------------------//

/**
 * Check is the screen width is mobile (<= 768px)
 * @returns true/false
 */
function isMobile() {
    return window.innerWidth <= 768;
}

/**
 * Chech is the screen width is mobile or tablet (<= 1024px)
 * @returns true/false
 */
function isTabletOrMobile() {
    return window.innerWidth <= 1024;
}

function get_gsap4e_attributes(element) {
    var settings = {};
    gsap4e_attributes.forEach(attribute => {
        if (element.hasAttribute('data-gsap4e-' + attribute)) {
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

//------------------------------------------------------------------------------------------------//
//                                                                                                //
//                               General purpose element animation                                //
//                                                                                                //
//------------------------------------------------------------------------------------------------//

function setElemAnimPred(g4ep, g4ees) {

    if ('elementScale1' in g4ees) {
        g4ep.param.ease = 'linear';
        g4ep.param.scrollTrigger.start = 'center center';
        g4ep.param.scrollTrigger.end = 'bottom top';
        g4ep.param.scale = 1.5;
        g4ep.param.scrollTrigger.toggleActions = 'play none none reverse';
        g4ep.param.scrollTrigger.scrub = true;
        g4ep.animationType = 'to';
    }
    if ('fadeIn' in g4ees) {
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
    if ('animSelector' in gsap4e_element_settings) {
        let e_toAnim_ = e.querySelector(`${gsap4e_element_settings.animSelector}`);
        if (e_toAnim_) e_toAnim = e_toAnim_;
    }
    if (!('no-mobile' in gsap4e_element_settings && isMobile()) && !('no-tablet' in gsap4e_element_settings && isTabletOrMobile())) {
        // Set custom style
        disableTransformTransition(e);
        e_toAnim.style.transition = 'none';
        if ('overflowHidden' in gsap4e_element_settings) e.style.overflow = 'hidden';


        let g4ep = new gsap4eParameter(gsap4e_element_settings, e);
        setElemAnimPred(g4ep, gsap4e_element_settings);
        // Animation
        if (g4ep.animationType === 'from')
            gsap.from(e_toAnim, g4ep.param);
        else {
            gsap.to(e_toAnim, g4ep.param);
        }
    }
});


//------------------------------------------------------------------------------------------------//
//                                                                                                //
//                                        Image animation                                         //
//                                                                                                //
//------------------------------------------------------------------------------------------------//

let gsap4e_imgAnim = document.querySelectorAll('.gsap4e-imgAnim');
gsap4e_imgAnim.forEach(e => {

    let gsap4e_element_settings = get_gsap4e_attributes(e);
    if (!('no-mobile' in gsap4e_element_settings && isMobile()) && !('no-tablet' in gsap4e_element_settings && isTabletOrMobile())) {

        if('imgAnim1' in gsap4e_element_settings){
            if (e.hasChildNodes()) {
                let e_ic = e.firstElementChild; // Inner container
                if (e_ic.hasChildNodes()) {
                    let e_img = e_ic.firstElementChild; // Image
                    // Set custom styles
                    e.style.overflow = "hidden";
                    e_ic.style.overflow = "hidden";
                    disableTransformTransition(e_ic);
                    disableTransformTransition(e_img);

                    let g4ep = new gsap4eParameter(gsap4e_element_settings, e);
                    
                    if(!g4ep.param.scrollTrigger.hasOwnProperty('start')) g4ep.param.scrollTrigger.start = 'top 70%';
                    if(!g4ep.param.scrollTrigger.hasOwnProperty('end')) g4ep.param.scrollTrigger.end = 'bottom top';
                    const yVal = (g4ep.param.hasOwnProperty('y')) ? g4ep.param.y : '0';
                    const yValI = invertCssDistance(yVal);
                    const xVal = (g4ep.param.hasOwnProperty('x')) ? g4ep.param.x : '0';
                    const xValI = invertCssDistance(xVal);

                    const e_tl = gsap.timeline(g4ep.param);
                    e_tl.from(e_ic, {
                        y: yVal,
                        x: xVal,
                        ease: (g4ep.param.hasOwnProperty('ease')) ? g4ep.param.ease : 'power1.Out',
                        duration: (g4ep.param.hasOwnProperty('duration')) ? g4ep.param.duration : '1.5',
                    }, 0);
                    e_tl.from(e_img, {
                        y: yValI,
                        x: xValI,
                        ease: (g4ep.param.hasOwnProperty('ease')) ? g4ep.param.ease : 'power1.Out',
                        scale: (g4ep.param.hasOwnProperty('scale')) ? g4ep.param.scale : 1.3,
                        duration: (g4ep.param.hasOwnProperty('duration')) ? g4ep.param.duration : '1.5',
                    }, 0);
                }
            }
        }else{
            // WIP: other animations
        }
    }
});


//------------------------------------------------------------------------------------------------//
//                                                                                                //
//                                         Text animation                                         //
//                                                                                                //
//------------------------------------------------------------------------------------------------//

function setTextAnimPredefined(g4ep, g4ees, textElement, textToAnim) {

    if ('textAnim1' in g4ees) {
        g4ep.param.scrollTrigger.start = 'top 80%';
        g4ep.param.scrollTrigger.end = 'top bottom';
        g4ep.param.scrollTrigger.toggleActions = 'play none none reset';
        g4ep.param.opacity = 0;
        g4ep.param.y = 20;
        g4ep.param.transformOrigin = '0% 80%';
        g4ep.param.ease = 'back';
        g4ep.param.rotationX = 60;
        g4ep.param.stagger.each = .1;
    }
    if ('textOpacityAnim' in g4ees) {
        g4ep.param.scrollTrigger.trigger = textElement,
        g4ep.param.scrollTrigger.start = "top 80%",
        g4ep.param.scrollTrigger.end = "bottom 75%",
        g4ep.param.scrollTrigger.scrub = true,
        g4ep.param.scrollTrigger.onUpdate = (self) => {
            const progress = self.progress;
            const index = Math.floor(progress * textToAnim.length);
            textToAnim.forEach((text, i) => {
                text.style.opacity = (i < index) ? '1' : '0.1';
            });
        }
    }
}

let gsap4e_textAnim1 = document.querySelectorAll('.gsap4e-textAnim');
gsap4e_textAnim1.forEach(e => {
    let gsap4e_element_settings = get_gsap4e_attributes(e);
    if (!('no-mobile' in gsap4e_element_settings && isMobile()) && !('no-tablet' in gsap4e_element_settings && isTabletOrMobile())) {
        // Set custom style
        disableTransformTransition(e);
        if ('overflowHidden' in gsap4e_element_settings) e.style.overflow = 'hidden';

        let text = e.querySelectorAll('.elementor-widget-container > h1, .elementor-widget-container > h2, .elementor-widget-container > h3, .elementor-widget-container > h4, .elementor-widget-container > h5, .elementor-widget-container > h6, .elementor-widget-container > span, .elementor-widget-container > p');
        if (text) {
            let splittedText = null;
            let textToAnim = null;
            if('splitType' in gsap4e_element_settings){
                if(gsap4e_element_settings.splitType === 'chars'){
                    splittedText = new SplitType(text, {types: 'chars, words'});
                    textToAnim = splittedText.chars;
                }else if(gsap4e_element_settings.splitType === 'words'){
                    splittedText = new SplitType(text, {types: 'words'});
                    textToAnim = splittedText.words;
                }else if(gsap4e_element_settings.splitType === 'lines'){
                    splittedText = new SplitType(text, {types: 'lines'});
                    textToAnim = splittedText.lines;
                }else{
                    console.error(`[GSAP4E] Non valid splitType parameter -> ${gsap4e_element_settings.splitType}`)
                }
            }else{ // Default
                splittedText = new SplitType(text, {types: 'words'});
                textToAnim = splittedText.words;
            }

            let g4ep = new gsap4eParameter(gsap4e_element_settings, e);
            setTextAnimPredefined(g4ep, gsap4e_element_settings, e, textToAnim);
            // Animation
            gsap.from(textToAnim, g4ep.param);
        }
    }
});