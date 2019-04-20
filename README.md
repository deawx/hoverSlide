# hoverSlideJS
A jQuery-based hoverable side navigation plugin, perfect for parallax and vertical scrolling websites!

#Overview
hoverSlide is a jQuery-based hoverable side navigation plugin, perfect for parallax and vertical scrolling websites. 
hoverSlide works as a stand-alone navigation solution, 
and can also work in sync with topside navbar (check it out on the JSFanatik website!).

#Implement Dependencies
Download the plugin from either NPM, Yarn, or GitHub. 

<img src="https://github.com/jsfanatik/hoverSlideJS/blob/master/plugin-img/hoverslide-cdn.PNG" />

Add the jQuery CDN link in your <head>

#Initialize
Add the div tags for your buttons in the HTML:

Initialize hoverSlide in your script file for each button in your html. By default, the initial button has a top property of 60px. The top property for each subsequent button should be doubled, like so:


#Options
The following is a list of default options:

#Left Align
hoverSlide aligns right: -50px by default. To align to the left, do the following:

Add the class “tab-left” to each button
Add left: ”-50px”, right: “” to override the right alignment. 

Example: 
