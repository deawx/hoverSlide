# hoverSlide
A jQuery-based hoverable side navigation plugin, perfect for parallax and vertical scrolling websites!

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/hoverslide-thumbnail.PNG" />

## Overview

hoverSlide is a jQuery-based hoverable side navigation plugin, perfect for parallax and vertical scrolling websites. 
hoverSlide works as a stand-alone navigation solution, 
and can also work in sync with a topside navbar (check it out on the **[JSFanatik website](https://jsfanatik.github.io/)**).

## Add Dependencies

Download the plugin from GitHub. Add the following file link before your closing body tag: 

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/hoverslide-cdn.PNG" />

Add the jQuery CDN link in your head.
  
<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/jquery-cdn.PNG" />

## Initialize

Add the div tags for your buttons in the HTML. Add unique IDs inside the div tags to assign each button to its respective scrollTop function:

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/div-block.PNG" />

Initialize hoverSlide in your script file for each button in your html. By default, the initial button has a top property of 60px. The top property for each subsequent button should be doubled:

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/initialize.PNG" />

## Options

The following is a list of default options:

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/options.PNG" />

## Left Align

hoverSlide aligns right: -50px by default. To align to the left, do the following:

1. Add the class “tab-left” to each button

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/left-align-html.PNG" />

2. Add left: ”-50px”, right: “” to override the right alignment: 

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/left-align.PNG" />

Enjoy this plugin! Feel free to comment or make suggestions on how to improve!
