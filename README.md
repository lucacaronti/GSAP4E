# GSAP4E
GSAP For Elementor predefined basic animation

This library does not cover all the possible animations, but if you need just something fast and easy to implement this can be good for you.

**Note: Actually requires Elementor Pro to work**

## Usage

Just three easy steps:
1. Download the file and setup everithing as described below.
2. Define the class of animation you want to apply in you elementor widget.
3. In the attribute section of you widget define all the animation settings.

## Setup

### Requirements
- Gsap
- Gsap ScrollTrigger
- Split Type

### Include stuff

Just include the GSAP4E.js file inside `functions.php` of your Wordpress child theme 

```php
function gsap4e_scripts() {	
	wp_register_script('GSAP4E', get_stylesheet_directory_uri() . '/GSAP4E.js', array(), null, true);
    wp_enqueue_script('GSAP4E');
}
add_action('wp_enqueue_scripts', 'gsap4e_scripts');
```

And include (in `functions.php`) also Gsap and Split Type libraries through CDNs. 

```php
function enqueue_external_scripts() {
	wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js', array(), null);
	wp_enqueue_script('gsap-scrollTrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js', array(), null);
	wp_enqueue_script('split-type', 'https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js', array(), null);
}
add_action('wp_enqueue_scripts', 'enqueue_external_scripts');
```

## Available parameteres (In general, read each animation description for more informations)

### Gsap animation parameters
| Name | Command | Gsap equivalent | Example(s) |
|:---|:---|:---|:---|
| Y | `data-gsap4e-y` | `y` | `data-gsap4e-y \| 500px` <br>  `data-gsap4e-y \| 100%` |
| X | `data-gsap4e-x` | `x` | `data-gsap4e-x \| 500px` <br>  `data-gsap4e-x \| 100%` |
| Opacity | `data-gsap4e-opacity` | `opacity` | `data-gsap4e-opacity \| 0.2` |
| Duration | `data-gsap4e-duration` | `duration` | `data-gsap4e-duration \| 0.2` |
| Ease | `data-gsap4e-ease` | `ease` | `data-gsap4e-ease \| linear` |
| Immediate render | `data-gsap4e-immediateRender` | `immediateRender` | `data-gsap4e-immediateRender \| false` |
| Rotation X | `data-gsap4e-rotationX` | `rotationX` | `data-gsap4e-rotationX \| 360` |
| Rotation Y | `data-gsap4e-rotationY` | `rotationY` | `data-gsap4e-rotationY \| 360` |
| Scale | `data-gsap4e-scale` | `scale` | `data-gsap4e-scale \| 2` |
| Transform Origin | `data-gsap4e-transformOrigin` | `transformOrigin` | `data-gsap4e-transformOrigin \| 0% 0%` |
| Dealy | `data-gsap4e-delay` | `delay` | `data-gsap4e-delay \| 0.5` |
| Stagger | `data-gsap4e-stagger` | `stagger` | `data-gsap4e-stagger \| 0.1` |
| Stagger each | `data-gsap4e-stagger-each` | `stagger.each` | `data-gsap4e-stagger-each \| 0.1` |
| Stagger form | `data-gsap4e-stagger-from` | `stagger.from` | `data-gsap4e-stagger-from \| center` |
| Stagger grid| `data-gsap4e-stagger-grid` | `stagger.grid` | `data-gsap4e-stagger-grid \| auto` |
| Stagger ease | `data-gsap4e-stagger-ease` | `stagger.ease` | `data-gsap4e-stagger-ease \| power1.inOut` |
| Stagger amount | `data-gsap4e-stagger-amount` | `stagger.amount` | `data-gsap4e-stagger-amount \| 1` |

### Gsap scroltrigger parameters
| Name | Command | Gsap equivalent | Example(s) |
|:---|:---|:---|:---|
| Start |  `data-gsap4e-start` | `start` | `data-gsap4e-start \| bottom center` <br> `data-gsap4e-start \| top += 500px` |
| End | `data-gsap-end` | `end` | `data-gsap4e-end \| center center` <br> `data-gsap4e-end \| bottom 40%` |
| Scrub | `data-gsap4e-scrub` | `scrub` | `data-gsap4e-scrub \| true` |
| Pin | `data-gsap4e-pin` | `pin` | `data-gsap4e-pin \| true` |
| Pin Spacing | `data-gsap4e-pinSpacing` | `pinSpacing`  | `data-gsap4e-pinSpacing \| true `|
| Toggle actions | `data-gsap4e-toggleActions` | `toggleActions` | `data-gsap4e-toggleActions \| play none none reverse` |
| Markers | `data-gsap4e-markers` | `markers` | `data-gsap4e-markers \| true` |

### Other general purpose parameters
| Name | Command | Description | Example(s) |
|:---|:---|:---|:---|
| Animate child | `data-gsap4e-animateChild` | If defined, the animation occours on the first child element | `data-gsap4e-animateChild` |
| Overflow hidden | `data-gsap4e-overflowHidden` | If defined, the element overflow is set to hidden. This is useful in combination to 'Animate child' setting | `data-gsap4e-overflowHidden` |
| Animation to | `data-gsap4e-animationTo` | the default animation is `gsap.from`. If this parameter is defined the animation changes to `gsap.to`, with the same parameters | `data-gsap4e-animationTo` |
| Avoid animation on tablet | `data-gsap4e-no-tablet` | It checkes if the windows view size is <= 1024px. Not still working with resizing | `data-gsap4e-no-tablet` |
| Avoid animation on mobile | `data-gsap4e-no-mobile` | It checkes if the windows view size is <= 768px. Not still working with resizing | `data-gsap4e-no-mobile` |

## Animations

### imgAnim1

> Class | `.gsap4e-textAnim`

> Description | Main text animation. It uses Split Type to divide text into letters, and apply fancier animations

> Note: The text must be in `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<hp>`,`<span>`,`<p>` tags, not others. 

#### Default values
If not specified, the default parameters are the one defined in GSAP

- `y: '100%'`
- `start: 'top 80%'`
- `end: 'bottom top'`
- `toggleActions: 'play none none reset'`
- `opacity: 0`

#### Predefined animations

##### Animation 1
---

Usage: `data-gsap4e-anim1`

Default data:
- `y: 20`
- `transformOrigin: '0% 80%'`
- `ease: 'back'`
- `rotationX: 60`
- `stagger.each: 0.1`
---

### elemAnim

> Class | `.gsap4e-elemAnim`

> Description | Main element animation. It just applies the defined animation on the element (or the child element). It's the most generaul-purpose animation

#### Default values
No default values here

#### Predefined animations

##### Element scale 1
---

Usage: `data-gsap4e-elementScale1`

Description: It applies a `gsap.to` animation that scales the element

Default data:
- `ease: 'linear'`
- `scrollTrigger.start: 'center center'`
- `scrollTrigger.end: 'bottom top'`
- `scale: 1.5`
- `toggleActions: 'play none none reverse`
- `scrub: true`
---

##### Fade in
---

Usage: `data-gsap4e-fadeIn`

Description: It applies a `gsap.to` animation that scales the element

Default data:
- `ease: 'linear'`
- `scrollTrigger.start: 'center center'`
- `scrollTrigger.end: 'bottom top'`
- `scale: 1.5`
- `toggleActions: 'play none none reverse`
- `scrub: true`
---

## Credits

This project was made possible thanks to the incredible work of the GreenSock Animation Platform (GSAP) team. GSAP is a powerful, high-performance animation library used by developers worldwide to create stunning web animations. Its flexibility, performance, and ease of use have been invaluable in developing this library.

GreenSock Animation Platform (GSAP):

- Website: [Gsap website](https://gsap.com/)
- License: [Gsap licening](https://gsap.com/licensing/)
  
Special thanks to the GreenSock team for providing such a robust tool that enables developers to bring their creative visions to life with ease.