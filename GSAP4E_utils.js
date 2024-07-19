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