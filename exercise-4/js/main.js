// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // Animate your div to these new set of properties:

  $('#my-div').animate({
    opacity:.5, // opacity of .5
    width:500, // width of 500
    height:300 // height of 300
  }, 2000, function() {
    // When the transition finishes, fade out your paragraphs and your circle.
     // Select all paragraphs and fade them out
    $('p, circle').fadeOut(500)
  })
});
