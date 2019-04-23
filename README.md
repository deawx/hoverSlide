# hoverSlide
A jQuery-based hoverable side navigation plugin, perfect for parallax and vertical scrolling websites!

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/hoverslide-thumbnail.PNG" />

## Overview

hoverSlide is a jQuery-based hoverable side navigation plugin, perfect for parallax and vertical scrolling websites. 
hoverSlide works as a **[stand-alone navigation solution (demo)](https://jsfanatik.github.io/demo.html)**, 
and can also work in sync with a **[responsive topside navbar (demo)](https://jsfanatik.github.io/demo-advanced.html)**.

## Add Dependencies

Download the plugin from GitHub. Add the following file link before your closing body tag: 

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/hoverslide-cdn.PNG" />

Add the jQuery CDN link in your head.
  
<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/jquery-cdn.PNG" />

## Initialize

Add the div tags for your buttons in the HTML. Add class="tab" to each tag in order to connect the tags to the hover-slide function: 

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/div-block.PNG" />

Initialize hoverSlide for each button in your html. Add unique class names to each div tag (ex. tab1, tab2...). Assign each unique class name as a selector (NOTE: By default, the initial button has a top property of 60px. Double the top property for each subsequent button):

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/initialize.PNG" />


Add unique IDs inside the div tags to assign each button to its respective scrollTop function (NOTE: use page ID as the offset() method selector in each function):

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/scrollTop.PNG" />

## Options

The following is a list of default options:

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/options.PNG" />

## Left Align

hoverSlide aligns right: -50px by default. To align to the left, do the following:

1. Add the class “tab-left” to each button

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/left-align-html.PNG" />

2. Add left: ”-50px”, right: “” to override the right alignment: 

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/left-align.PNG" />

See **[Left-align demo](https://jsfanatik.github.io/demo-left.html)**.

Enjoy this plugin! Feel free to comment or make suggestions on how to improve!
