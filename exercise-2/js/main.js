/* your code goes here! */
// jQuery functions
$(function() {

	// Click function on all buttons
	$('button').click(function(){
		// Get info
		var selector = $('#selector').val();
		var newContent = $('#newContent').val();

		// Apply changes based on button id
		switch($(this).attr('id')){
      // Change content
			case 'change-content':
				$( selector ).html(newContent);
				break;

      // Add at end
			case 'add-at-end':
				$(selector).append(newContent);
				break;

      // Add at start
			case 'add-at-start':
				$(selector).prepend(newContent);
				break;

      // Insert before
			case 'insert-before':
				$(selector).before(newContent);
				break;

      // Move after
			case 'move-after':
				$(selector).insertAfter(newContent);
				break;

      // Surround with class
			case 'surround-class':
				$(selector).wrap('<div class="'+newContent+'"></div>');
				break;

      // Hide text
			case 'hide-text':
				$(selector).each(function(){
					if($(this).text().length > 12 ) {
						$(this).wrap('<div class="hidden"></div>');
					}
				})
				break;

			case 'remove-word':
				$( selector + ":contains('"+newContent+"')"  ).remove();
				break;

			default:
				break;
		}
	})

})
/* Use clever selections and event handlers to assign the described interactivity */
