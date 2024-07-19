# GSAP4E
GSAP For Elementor predefined basic animation

## Usage

## How it works

```php
function enqueue_external_scripts() {
	wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js', array(), null);
	wp_enqueue_script('gsap-scrollTrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js', array(), null);
}
add_action('wp_enqueue_scripts', 'enqueue_external_scripts');
```



## Animations

### imgAnim1

> Class | _.gsap4e-imgAnim1_

> Description |  

| Parameter name | Parameter command | Default value | Parameter type | Example(s) |
|:---|:---|:---|:---|:---|
| Start |  data-gsap4e-start | 'top 70%' | String | data-gsap4e-start \| bottom center <br> data-gsap4e-start \| top += 500px |
| End | data-gsap-end | 'bottom top' | String | data-gsap4e-end \| center center <br> data-gsap4e-end \| bottom 40% |
| Scrub | data-gsap4e-scrub | false | Bool | data-gsap4e-scrub \| true |
| Pin | data-gsap4e-pin | false | Bool | data-gsap4e-pin \| true |
| Pin Spacing | data-gsap4e-pinSpacing | false | Bool | data-gsap4e-pinSpacing \| true |
| Toggle actions | data-gsap4e-toggleActions | 'play none none reverse' | String | |
| Markers | data-gsap4e-markers | false | Bool | data-gsap4e-markers \| true |
| Y | data-gsap4e-y | '0' | String | data-gsap4e-y \| 500px <br>  data-gsap4e-y \| 100% |
| X | data-gsap4e-x | '0' | String | data-gsap4e-x \| 500px <br>  data-gsap4e-x \| 100% |
| Ease | data-gsap4e-ease | 'power1.Out' | String | data-gsap4e-ease | linear |
| Duration | data-gsap4e-duration | '1.5' | String | data-gsap4e-duration \| 0.2 |
| Scale | data-gsap4e-scale | 1.3 | Int | data-gsap4e-scale \| 2 |

**Notes:**
- To the element, and the inner container will be applied the style _overflow = hidden_
- To the inner container will be disabled any transform transition


