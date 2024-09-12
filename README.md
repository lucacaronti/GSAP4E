# GSAP4E
GSAP For Elementor it's a free and ope source to speed up creation of GSAP animation on Elemenetor

It'm also creating a tutorial with examples on this page: [https://lucacaronti.it/gsap4e](https://lucacaronti.it/gsap4e)

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

Or copy and paste the code directly in a custom javascript code of Elementor.

And include (in `functions.php`) Gsap and Split Type libraries through CDNs. 

```php
function enqueue_external_scripts() {
	wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js', array(), null);
	wp_enqueue_script('gsap-scrollTrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js', array(), null);
	wp_enqueue_script('split-type', 'https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js', array(), null);
}
add_action('wp_enqueue_scripts', 'enqueue_external_scripts');
```

## Available parameteres

### Gsap animation parameters
| Name | Command | Gsap equivalent | Example(s) |
|:---|:---|:---|:---|
| Background color | `data-gsap4e-backgroundColor` | `backgroundColor` | `data-gsap4e-backgroundColor \| black ` | 
| Border color | `data-gsap4e-borderColor` | `borderColor` | `data-gsap4e-borderColor \| black ` | 
| Border radius | `data-gsap4e-borderRadius` | `borderRadius` | `data-gsap4e-borderRadius \| black ` | 
| Border width | `data-gsap4e-borderWidth` | `borderWidth` | `data-gsap4e-borderWidth \| 2px ` | 
| Bottom | `data-gsap4e-bottom` | `bottom` | `data-gsap4e-bottom \| 20px ` |
| Box shadow | `data-gsap4e-boxShadow` | `boxShadow` | `data-gsap4e-boxShadow \| 2px 2px 2px 20px rgba(0,0,0,0.1)` |
| Clip path | `data-gsap4e-clipPath` | `clipPath` | `data-gsap4e-clipPath \| ` |
| Color | `data-gsap4e-Color` | `color` | `data-gsap4e-Color \| ` | 
| Height | `data-gsap4e-height` | `height` | `data-gsap4e-height \| 10px` |
| Immediate render | `data-gsap4e-immediateRender` | `immediateRender` | `data-gsap4e-immediateRender \| false` |
| Left | `data-gsap4e-left` | `left` | `data-gsap4e-left \| 10px` |
| Margin | `data-gsap4e-margin` | `margin` | `data-gsap4e-margin \| 10px` |
| Opacity | `data-gsap4e-opacity` | `opacity` | `data-gsap4e-opacity \| 0.2` |
| Padding | `data-gsap4e-padding` | `padding` | `data-gsap4e-padding \| 10px` |
| Right | `data-gsap4e-right` | `right` | `data-gsap4e-right \| 10px` |
| Rotation | `data-gsap4e-rotation` | `rotation` | `data-gsap4e-rotation \| 360` |
| Rotation X | `data-gsap4e-rotationX` | `rotationX` | `data-gsap4e-rotationX \| 360` |
| Rotation Y | `data-gsap4e-rotationY` | `rotationY` | `data-gsap4e-rotationY \| 360` |
| Rotation Z | `data-gsap4e-rotationZ` | `rotationZ` | `data-gsap4e-rotationZ \| 360` |
| Scale | `data-gsap4e-scale` | `scale` | `data-gsap4e-scale \| 2` |
| Scale X | `data-gsap4e-scaleX` | `scaleX` | `data-gsap4e-scaleX \| 2` |
| Scale Y | `data-gsap4e-scaleY` | `scaleY` | `data-gsap4e-scaleY \| 2` |
| Scale Z | `data-gsap4e-scaleZ` | `scaleZ` | `data-gsap4e-scaleZ \| 2` |
| Skew X | `data-gsap4e-skewX` | `skewX` | `data-gsap4e-skewX \|` |
| Skew Y | `data-gsap4e-skewY` | `skewY` | `data-gsap4e-skewY \|` |
| Text shadow | `data-gsap4e-textShadow` | `textShadow` | `data-gsap4e-textShadow \|` |
| Top | `data-gsap4e-top` | `top` | `data-gsap4e-top \| 10px` |
| Transform Origin | `data-gsap4e-transformOrigin` | `transformOrigin` | `data-gsap4e-transformOrigin \| 0% 0%` |
| Width | `data-gsap4e-width` | `width` | `data-gsap4e-width \| 10px` |
| X | `data-gsap4e-x` | `x` | `data-gsap4e-x \| 500px` <br>  `data-gsap4e-x \| 100%` |
| Y | `data-gsap4e-y` | `y` | `data-gsap4e-y \| 500px` <br>  `data-gsap4e-y \| 100%` |
| Z | `data-gsap4e-z` | `z` | `data-gsap4e-z \| 500px` <br>  `data-gsap4e-z \| 100%` |
| Z index | `data-gsap4e-zIndex` | `zIndex` | `data-gsap4e-zIndex \| 99`|

### Gsap timing parameters
| Name | Command | Gsap equivalent | Example(s) |
|:---|:---|:---|:---|
| Duration | `data-gsap4e-duration` | `duration` | `data-gsap4e-duration \| 0.2` |
| Ease | `data-gsap4e-ease` | `ease` | `data-gsap4e-ease \| linear` |
| Dealy | `data-gsap4e-delay` | `delay` | `data-gsap4e-delay \| 0.5` |
| Stagger | `data-gsap4e-stagger` | `stagger` | `data-gsap4e-stagger \| 0.1` |
| Stagger each | `data-gsap4e-stagger-each` | `stagger.each` | `data-gsap4e-stagger-each \| 0.1` |
| Stagger form | `data-gsap4e-stagger-from` | `stagger.from` | `data-gsap4e-stagger-from \| center` |
| Stagger grid| `data-gsap4e-stagger-grid` | `stagger.grid` | `data-gsap4e-stagger-grid \| auto` |
| Stagger ease | `data-gsap4e-stagger-ease` | `stagger.ease` | `data-gsap4e-stagger-ease \| power1.inOut` |
| Stagger amount | `data-gsap4e-stagger-amount` | `stagger.amount` | `data-gsap4e-stagger-amount \| 1` |
| Yoyo | `data-gsap4e-yoyo` | `yoyo` | `data-gsap4e-yoyo \| true` |
| Repeat | `data-gsap4e-repeat` | `repeat` | `data-gsap4e-repeat \| -1` |
| Repeat delay | `data-gsap4e-repeatDelay` | `repeatDelay` | `data-gsap4e-repeatDelay \| 1` |


### Gsap scroltrigger parameters
| Name | Command | Gsap equivalent | Example(s) |
|:---|:---|:---|:---|
| Start |  `data-gsap4e-start` | `scrollTrigger.start` | `data-gsap4e-start \| bottom center` <br> `data-gsap4e-start \| top += 500px` |
| End | `data-gsap-end` | `scrollTrigger.end` | `data-gsap4e-end \| center center` <br> `data-gsap4e-end \| bottom 40%` |
| Scrub | `data-gsap4e-scrub` | `scrollTrigger.scrub` | `data-gsap4e-scrub \| true` |
| Pin | `data-gsap4e-pin` | `scrollTrigger.pin` | `data-gsap4e-pin \| true` |
| Pin Spacing | `data-gsap4e-pinSpacing` | `scrollTrigger.pinSpacing`  | `data-gsap4e-pinSpacing \| true `|
| Toggle actions | `data-gsap4e-toggleActions` | `scrollTrigger.toggleActions` | `data-gsap4e-toggleActions \| play none none reverse` |
| Markers | `data-gsap4e-markers` | `scrollTrigger.markers` | `data-gsap4e-markers \| true` |

### Motion path animations
| Name | Command | Gsap equivalent | Example(s) |
|:---|:---|:---|:---|
| Motion path ID | `data-gsap4e-motionPathId` | `motionPath.path` | `data-gsap4e-motionPathId \| id-of-my-element` |
| Motion path start | `data-gsap4e-motionPathStart` | `motionPath.start` | `data-gsap4e-motionPathStart \| 0.1` |
| Motion path end | `data-gsap4e-motionPathEnd` | `motionPath.end` | `data-gsap4e-motionPathEnd \| 0.9` |

Note: by dafult `motionPath.align` is set equal to `data-gsap4e-motionPathId`, and `motionPath.alignOrigin` is set to `[0.5, 0.5]`. Future versions will add the possibility to modify theese parameters.


### Other general purpose parameters
| Name | Command | Description | Example(s) |
|:---|:---|:---|:---|
| Animate child | `data-gsap4e-animateChild` | If defined, the animation occours on the first child element | `data-gsap4e-animateChild` |
| Overflow hidden | `data-gsap4e-overflowHidden` | If defined, the element overflow is set to hidden. This is useful in combination to 'Animate child' setting | `data-gsap4e-overflowHidden` |
| Animation to | `data-gsap4e-animationTo` | the default animation is `gsap.from`. If this parameter is defined the animation changes to `gsap.to`, with the same parameters | `data-gsap4e-animationTo` |
| Avoid animation on tablet | `data-gsap4e-no-tablet` | It checkes if the windows view size is <= 1024px. Not still working with resizing | `data-gsap4e-no-tablet` |
| Avoid animation on mobile | `data-gsap4e-no-mobile` | It checkes if the windows view size is <= 768px. Not still working with resizing | `data-gsap4e-no-mobile` |
| Animation selector | `data-gsap4e-animSelector` | You can pass a css selector (as you pass to the `document.querySelector(...)` function) in order to animate a specific class or Id | `data-gsap4e-animSelector \| #my-object`|
| Trigger selector | `data-gsap4e-triggerSelector` | You can pass a css selector (as you pass to the `document.querySelector(...)` function) in order to specify a scrollTrigger trigger. The default trigger is the animated element itself. | `data-gsap4e-triggerSelector \| #my-object`|
| Split type | `data-gsap4e-splitType` | This is used with `gsap4e-textAnim` and allows to select the slit type. Can be `chars` (and actually splits in `chars, words`), `words`, and `lines`. Default is `words` is not specified | `data-gsap4e-splitType \| lines`|

## Animations

### Element animation

> Class | `.gsap4e-elemAnim`

> Description | Main element animation. It just applies the defined animation on the element (or the child element). It's the most generaul-purpose animation you can choose

#### Predefined animations

##### Element scale 1

Usage: `data-gsap4e-elementScale1`

Description: It applies a `gsap.to` animation that scales the element

Default data:
- `ease = 'linear'`
- `scrollTrigger.start = 'center center'`
- `scrollTrigger.end = 'bottom top'`
- `scale = 1.5`
- `toggleActions = 'play none none reverse`
- `scrub = true`
---

##### Fade in

Usage: `data-gsap4e-fadeIn`

Description: It applies a `gsap.from` animation that fades in the element

Default data:
- `opacity = '0'`
- `scrollTrigger.start = 'top 80%'`
- `duration = 1.5`
- `toggleActions = 'play none none reset`
---

### Text animation

> Class | `.gsap4e-textAnim`

> Description | Main text animation. It uses Split Type to divide text into lines, words or letters, and apply fancier animations

> Note: The text must be in `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<hp>`,`<span>`,`<p>` tags, not others. 

#### Predefined animations

##### Animation 1

Usage: `data-gsap4e-textOpacityAnim`

Parameters:
- `scrollTrigger.start = 'top 80%'`
- `scrollTrigger.end = 'top bottom'`
- `scrollTrigger.toggleActions = 'play none none reset'`
- `opacity = 0`
- `y = 20`
- `transformOrigin = '0% 80%'`
- `ease = 'back'`
- `rotationX = 60`
- `stagger.each = 0.1`
---

##### Text opacity animation

Usage: `data-gsap4e-textAnim1`

Parameters:
- `scrollTrigger.start = 'top 80%'`
- `scrollTrigger.end = 'bottom 75%'`
- `scrub = true`

Description:

---

### Image animation

> Class | `.gsap4e-imgAnim`

> Description | Allows to apply cool animation on images

#### Predefined animations

##### Image animation 1

Usage: `data-gsap4e-imgAnim1`

Description: This animation allows the image to appear by scaling and translating it in a more elegant way. Essentially, the animation occurs on two layers (the container and the image itsel): one layer is animated in one direction, and the other layer in the opposite direction.

Default parameters:
- `scrollTrigger.start = 'top 70%'`
- `scrollTrigger.end = 'bottom top'`
- `ease = 'power1.Out`
- `scale = 1.3`
- `duration = 1.5`

Example:

1)
```
data-gsap4e-imgAnim1
data-gsap4e-y | 100%
data-gsap4e-x | -100%
```
---



## Credits

This project was made possible thanks to the incredible work of the GreenSock Animation Platform (GSAP) team. GSAP is a powerful, high-performance animation library used by developers worldwide to create stunning web animations. Its flexibility, performance, and ease of use have been invaluable in developing this library.

GreenSock Animation Platform (GSAP):

- Website: [Gsap website](https://gsap.com/)
- License: [Gsap licening](https://gsap.com/licensing/)
  
Special thanks to the GreenSock team for providing such a robust tool that enables developers to bring their creative visions to life with ease.