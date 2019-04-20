# hoverSlideJS v1.0
A jQuery-based hoverable side navigation plugin, perfect for parallax and vertical scrolling websites!

## Overview

hoverSlide is a jQuery-based hoverable side navigation plugin, perfect for parallax and vertical scrolling websites. 
hoverSlide works as a stand-alone navigation solution, 
and can also work in sync with topside navbar (check it out on the JSFanatik website!).

## Implement Dependencies

Download the plugin from GitHub. Add the following file link before your closing body tag: 

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/hoverslide-cdn.PNG" />

Add the jQuery CDN link in your head.
  
<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/jquery-cdn.PNG" />

## Initialize

Add the div tags for your buttons in the HTML:

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/jquery-cdn.PNG" />

Initialize hoverSlide in your script file for each button in your html. By default, the initial button has a top property of 60px. The top property for each subsequent button should be doubled, like so:

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/initialize.PNG" />

## Options

The following is a list of default options:

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/options.PNG" />

## Left Align

hoverSlide aligns right: -50px by default. To align to the left, do the following:

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/left-align-html.PNG" />

Add the class “tab-left” to each button
Add left: ”-50px”, right: “” to override the right alignment, like so: 

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/left-align.PNG" />
