# BB Scroll
A html focused scrollspy animation library built with gsap by Studio Blueboat

## Importing
Import as follows:

import {bbScroll} from 'bbscroll/bbscroll';

## Usage
Add the 'bb-scroll-section' attribute to any parent HTML element to define the timeline

Adding the 'bb-scroll' attribute to any child of one of these parent elements will create animations based on the following attribute values if also present:

+ bb-scroll-x : the animation of the element on the x axis, negatives are permited and reverse the animation
+ bb-scroll-y : the animation of the element on the y axis, negatives are permited and reverse the animation