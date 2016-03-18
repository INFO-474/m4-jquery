// Main JavaScript File

// Defining the changeText variable so that it's globally available for assignment.
var changeText;

// You'll have to wait for you page to load to assign events to the elements created in your index.html File
$(function(){
  // Select elements with class "italics" and set their css "font-style", to "italic"
  $('.italics').css('font-style', 'italic');

  // Select all svgs and change their attr "height" to 200
  $('svg').attr('height', 200);

  // Select your first svg and change it's width attribute to 10
  $('svg:first').attr("width", 10);

  // Select even rows in the table and set their css "background" to "lightgray"
  $("tr:even").css('background', 'lightgray');

  // Select the input and set the attribute "placeholder" to "start typing"
  $('input').attr('placeholder', 'start typing');

  // Set the input val to "hello"
  $('input').val('hellos');

  // Fill in this function that selects the text with id "change" and sets it text to the value in the text box.  Click "submit" to see if it worked.
  changeText = function() {
    var text = $('input').val()
    $("#change").text(text)
    $('input').val('')
  };

});
