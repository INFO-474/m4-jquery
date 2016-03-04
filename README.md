# Module 4: jQuery

## Overview
When working in JavaScript, it's common to leverage a pre-written set of functions called a **library**: libraries enable users to abstract away common tasks into functions that they may use across projects.  The open-source community has developed a variety of general-purpose JavaScript libraries, one of the most common of which is **jQuery**.  While jQuery has a variety of applications and purposes, we'll primarily use it for **selecting** elements, **assigning** event listeners, and **reading data**.

## Resources
Here are some helpful resources help you start using jQuery:

- [jQuery selectors](http://www.w3schools.com/jquery/jquery_selectors.asp)
- [jQuery tutorial](http://www.w3schools.com/jquery/)
- [jQuery effects](https://api.jquery.com/category/effects/)
- [jQuery add elements](http://www.w3schools.com/jquery/jquery_dom_add.asp)
## Getting Started
In order to start using the jQuery library, you'll need to read it into your `index.html` file.  You'll use the same syntax as reading in any other JavaScript file, though you'll need to **read it in before you script** in order to use its functions:


```html
<!-- index.html file -->
<!DOCTYPE html>
  <head>
  </head>
  <body>
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>

```

A few tips: if you read in the _minified_ version of the (any) library (i.e., `library.min.js`), it will have a faster load time, but will give less helpful error messages.  You may also want to download the file and keep a local copy.  This is helpful if you plan on working on a project without an internet connection, but increases your burden of file management.

Once you've read in the jQuery library, you're able to start using jQuery functions within your JavaScript code:

```javascript
// Select the DOM element with id "my-div"  using jQuery
jQuery('#my-div')

// Using the $ shortcut
$('#my-div')
```


## Selecting elements
Because jQuery was so thoughtfully designed, it uses the same syntax for selecting elements as you do using CSS. You're easily able to make selections by id, class, element type, attribute value, or any combination.  Here are a few examples of selecting elements:

```javascript
$('selector'); // generic
$('#my-div'); // by id
$('div'); // by type
$('.my-class'); // by class
$('.class1, .class2'); // multiple classes
$('div.my-class'); // All divs with class my-class
$('tr:odd'); // Odd <tr> elements

// Store a selection in a variable for later use/Manipulation
var myDiv = $('#my-div');
```

For a full list of element selectors, see [here](http://www.w3schools.com/jquery/jquery_selectors.asp).  Once you've selected an element, you'll of course want to do something with it.  First, you may want to retrieve a current value of an attribute or style:

```javascript
// Generic
$('select').attr('attr-name') // Get current attribute attr-name from selected element

// Get height property of an svg
$('#my-svg').attr('height') // height of svg

// Get the font-size of a paragraph
$('#my-p').css('font-size') // css properties

// Get the text within an element
$('#my-div').text() // text in div

// Get the value of an input box
$('input').val() // value of input

```

While in some cases you want to retrieve values, you may also want to set particular values:

```javascript
// Generic
$('select').attr('attr-name', 'attr-value') // Assign the selected element's attr-name the value attr-value

// Set height property of an svg
$('#my-svg').attr('height', 200) // Set height to 200

// Set the font-size of a paragraph
$('#my-p').css('font-size', '25px') // Set font-size

// Set the text within an element
$('#my-div').text('This is the new text') // Set the text of the div

// Set the input value to empty string
$('input').val('') // Set value to empty string

```

## Adding/Removing elements
In addition to manipulating elements already on the screen, you can use jQuery to add or remove DOM elements.  Let's start with the easy part (removing).  You may want to `remove` an element (which would remove all of the elements _inside of_ it), or you may want to remove only the contents within an element (i.e. `empty` it out)

```javascript
// Remove an element
$('#my-div').remove() // removes the div and everything inside of it

// Empty out the div: it will remain, but its contents will be destroyed
$('#my-div').empty() // removes the contents of div

// Remove only certain elements by passing a selector to empty
$('#my-div').empty('p') // removes all paragraph tags from the div

```

There are four methods you can use to add elements to the DOM: `append`, `prepend`, `after`, and `before` ([more info](http://www.w3schools.com/jquery/jquery_dom_add.asp)).  Each of these methods act upon a selected DOM element and add content. That content should contain the HTML tags you wish to inject into the DOM:

```javascript
// Place a paragraph tag at the end of a div
$('#my-div').append('<p>New paragraph</p>')

// Create a new paragraph element in JavaScript
var p = $('<p>').text('Paragraph Text')

// Place the p element at the beginning of a div
$('#my-div').prepend(p)

// Place the p element before the div in the DOM
$('#my-div').before(p)

// Place the p element after the div in the DOM
$('#my-div').before(p)

```

To practice getting/setting values and adding/removing elements, see [exercise-1](exercise-1).


## Assigning Event Handlers
In addition to providing a simplified syntax for selecting elements and setting their attributes, jQuery also provides a clean syntax for assigning events to the elements that you've selected:

```javascript
// Generic
$('selector').action(function() {
    // here's where you do stuff
})

// Alternatively
$('selector').on('action', function() {
    // here's where you do stuff
})
```
If you want to access the element that was acted upon, you can leverage the `this` keyword because of the scope of your function:

```javascript
$('selector').action(function() {
    $(this) // selects the element that was acted upon so you can manipulate it
})
```

To practice assigning event handlers, see [exercise-2](exercise-2).

## Animation
A fun part of the jQuery library is it provides a set of tools for staging animations. There are a variety of built-in function, as well as the ability to write your own custom animations.  Here are a few fun/common ones:

```javascript
// Select the element with id "my-div" and perform an animation
$('#my-div').fadeIn(500) // fade in the element over 500 milliseconds
$('#my-div').fadeOut(500) // fade out the element
$('#my-div').slideDown(500) // slide the element down
$('#my-div').slideUp(500) // slide the element up

// Write your own custom animation
// Generic syntax: put in an object of key-values pairs of CSS properties you want to manipulate
$(selector).animate({params},speed,callback);

// Example:
$("#my-div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
}, 1500);
```

To practice accessing information via object properties, and leveraging different object methods, see [exercise-3](exercise-3).
